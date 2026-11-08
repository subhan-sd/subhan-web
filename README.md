# Subhan Singandaru — Personal Brand Website

Production-ready personal branding and engineering portfolio for **Subhan Fadz Kamil Singandaru**, Software Engineer specializing in Full Stack Web Engineering with an emerging focus on AI Engineering.

Built with **Astro 5**, **React 19**, **TypeScript**, **Tailwind CSS**, and optimized for deployment on the **Cloudflare Workers / Pages** edge platform.

---

## Architecture & Technology Stack

| Layer | Technology | Details |
|---|---|---|
| **Framework** | [Astro 5](https://astro.build/) | Static-first HTML generation, zero JavaScript baseline, Content Collections |
| **Interactive Islands** | [React 19](https://react.dev/) | Island architecture for Theme Switcher, Projects Filter, Blog Search, Contact Form |
| **Styling** | [Tailwind CSS v3.4](https://tailwindcss.com/) | Semantic dark-first color tokens, custom typography, lightweight CSS animations |
| **Icons** | [Lucide](https://lucide.dev/) | Tree-shakeable SVG icon components |
| **Content Engine** | MDX + Shiki | Type-safe Markdown with Zod schemas and syntax highlighting |
| **Platform / Runtime** | [Cloudflare Workers / Pages](https://pages.cloudflare.com/) | `@astrojs/cloudflare` serverless edge adapter with passthrough image optimization |
| **Validation** | [Zod](https://zod.dev/) | Strict runtime data contracts for contact API and content frontmatter |

---

## Key Features

- **Editorial Dark-First Design:** Minimalist, high-contrast typography inspired by Linear, Vercel, and modern engineering blogs.
- **Anti-FOUC Theme Switcher:** Instant Dark/Light mode toggle with inline local-storage initialization script.
- **Authentic Career Timeline:** Transparent history across enterprise ecosystems (IFG, Jasindo, Pegadaian, Telkom).
- **Interactive Projects Showcase:** Category tabs (*Full Stack*, *Backend & Infra*, *AI & ML*, *Open Source*) with architectural summaries.
- **Technical Capabilities Matrix:** Categorized skills with explicit distinction between *Professional Experience* (Production), *Working Knowledge*, and *Currently Learning*.
- **AI Engineering Roadmap:** 8-milestone evolutionary roadmap from software engineering foundations to production-grade AI systems.
- **Technical Writing Hub:** Searchable, category-filtered technical blog powered by Astro MDX Content Collections.
- **Serverless Contact Route:** Edge-ready `/api/contact` endpoint with honeypot bot trap and Cloudflare Turnstile token verification support.
- **SEO & Structured Data:** Automatic OpenGraph, Twitter Cards, dynamic `robots.txt`, `sitemap-index.xml`, and `schema.org/Person` JSON-LD metadata.

---

## Project Structure

```
├── public/
│   ├── favicon.svg
│   ├── og-image.svg
│   └── documents/
│       └── Subhan_Fadz_Kamil_Singandaru_CV.pdf
├── src/
│   ├── components/
│   │   ├── blog/              # Blog search and post cards
│   │   ├── layout/            # Header, Footer, ThemeScript
│   │   ├── sections/          # Hero, About, Experience, Projects, Stack, AI Journey, Contact
│   │   └── ui/                # Button, Badge, ThemeToggle, Icons
│   ├── content/
│   │   ├── config.ts          # Zod Content Collections schema
│   │   └── blog/              # MDX technical writing articles
│   ├── data/
│   │   ├── profile.ts         # Bio, contact links, availability status
│   │   ├── experience.ts      # Career timeline data
│   │   ├── skills.ts          # Categorized skills & proficiency tiers
│   │   ├── projects.ts        # Architectural project details
│   │   ├── ai-journey.ts      # 8-milestone AI engineering roadmap
│   │   └── navigation.ts      # Nav links and social metadata
│   ├── layouts/
│   │   ├── BaseLayout.astro   # Core HTML shell with OpenGraph and JSON-LD
│   │   └── BlogPostLayout.astro # Article view with reading time & tags
│   ├── pages/
│   │   ├── index.astro        # Portfolio landing page
│   │   ├── blog/              # Blog index & dynamic post renderer
│   │   ├── api/contact.ts     # Edge API endpoint for contact dispatch
│   │   ├── robots.txt.ts      # Dynamic robots.txt
│   │   └── sitemap-index.xml.ts # Dynamic sitemap generator
│   └── styles/
│       └── global.css         # Theme tokens & background grid patterns
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── wrangler.toml
```

---

## Local Development

### Prerequisites

- Node.js >= 20
- pnpm >= 9

### Setup

```bash
# Clone the repository
git clone git@github.com:subhan-sd/subhan-web.git
cd subhan-web

# Install dependencies
pnpm install

# Start local dev server (default http://localhost:4321)
pnpm dev
```

### Quality & Build Verification

```bash
# Type check and diagnostic review
pnpm check

# Production build
pnpm build

# Preview production build locally
pnpm preview
```

---

## Cloudflare Pages Deployment

1. Go to **Cloudflare Dashboard** &rarr; **Compute (Workers & Pages)** &rarr; **Create application** &rarr; **Pages**.
2. Connect your GitHub repository: `subhan-sd/subhan-web`.
3. Configure the build settings:
   - **Framework preset:** `Astro`
   - **Build command:** `pnpm build`
   - **Build output directory:** `dist`
4. Add environment variables under **Settings > Environment variables**:
   - `NODE_VERSION`: `22` (or `24`)
   - `TURNSTILE_SECRET_KEY`: *(Optional)* Your Cloudflare Turnstile private secret key for contact form spam defense.
5. Trigger deployment. Any subsequent push to `main` will automatically build and deploy.

---

## License

MIT &copy; [Subhan Fadz Kamil Singandaru](https://github.com/subhan-sd)
