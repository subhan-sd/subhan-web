import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

interface SitemapItem {
  loc: string;
  priority: string;
  changefreq: string;
  lastmod?: string;
}

export const GET: APIRoute = async ({ site }) => {
  const siteUrl = site ? site.toString().replace(/\/$/, '') : 'https://subhan.dev';

  const posts = await getCollection('blog', ({ data }) => !data.draft);

  const pages: SitemapItem[] = [
    { loc: `${siteUrl}/`, priority: '1.0', changefreq: 'weekly' },
    { loc: `${siteUrl}/blog`, priority: '0.8', changefreq: 'weekly' },
    ...posts.map((post) => ({
      loc: `${siteUrl}/blog/${post.slug}`,
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: post.data.updatedDate?.toISOString() || post.data.publishDate.toISOString(),
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${p.loc}</loc>
    ${p.lastmod ? `<lastmod>${p.lastmod}</lastmod>` : ''}
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
