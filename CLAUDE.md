# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev      # Start development server at http://localhost:3000
pnpm build    # Production build — also validates TypeScript
pnpm start    # Run production server
pnpm lint     # ESLint (next/core-web-vitals rules)
```

There is no test suite. After data or component changes, manually verify at `http://localhost:3000`.

## Architecture

Next.js 14 App Router portfolio site. Styling uses Tailwind CSS + SCSS (`app/globals.scss`). Animations are driven by framer-motion with shared variant definitions in `components/shared/Variant.ts` and `Variants2.ts`. UI primitives come from shadcn/ui (Radix-based, in `components/ui/`).

### Content Data — Two Independent Stores

All content is static TypeScript — no CMS, no API calls.

**`lib/projectData.ts`** — Case-study projects (home Work grid + zoom overlay)
- Every entry renders in `components/home/work/`; clicking a card expands it (framer-motion `layoutId`) into a full-screen case study at `/?p=<slug>`
- Order matters: entry 1 is the full-width featured card; grid spans per position live in `CARD_LAYOUT` in `components/home/work/types.ts`
- Each entry needs: `id`, `name`, `category`, `year`, `image`, `website`, `github`, `slug`, `problem`, `approach`, `result`, `techStack[]`, `gallery[]`
- `slug` must be unique, lowercase kebab-case (becomes `/?p=<slug>`; old `/work/<slug>` links redirect there via `next.config.mjs`)

**`lib/siteData.ts`** — Home copy: stats, stack marquee, capabilities graph nodes, experience, contact email

**`lib/data.ts`** — `reviewData` (testimonials) and `socialData` (contact icons) are used by the home page; `portfolioData`/`UIUXData` are currently unused

### Image Conventions

- All images live in `public/images/`, referenced as `/images/filename.ext`
- The codebase uses native `<img>` tags, not `next/image`
- `gallery[]` paths in projectData are not rendered anywhere yet (most files do not exist)

### Routing

| Route | Component | Data source |
|---|---|---|
| `/` | `components/home/` (single page, sections in domain folders) | `lib/projectData.ts`, `lib/siteData.ts`, `lib/data.ts` |
| `/blog` | `components/blog/Blogs.tsx` | `components/blog/BlogData.ts` |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` | `components/blog/BlogData.ts` |

`/work`, `/work/<slug>` and `/about` are redirects (see `next.config.mjs`). The blog keeps its own layout and old footer (`app/blog/layout.tsx`).

Home design tokens (Tailwind): `ink`, `coal`, `cream`, `bone`, `ember`; fonts `font-display` (Anton), `font-serif` (Instrument Serif), `font-sans` (Inter). Shared motion easing/timings are in `components/home/ui/motion.ts`.

### Adding or Removing a Project

1. Edit `lib/projectData.ts` — add/remove the entry (the first entry is the featured card)
2. Place images in `public/images/`
3. Run `pnpm build` to catch TypeScript errors, then verify manually with `pnpm dev`
