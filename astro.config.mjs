import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://subhan.dev',
  adapter: cloudflare({
    imageService: 'passthrough',
  }),
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
  ],
});
