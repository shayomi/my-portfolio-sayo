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

**`lib/projectData.ts`** — Case-study projects (detail pages + home Selected Works)
- Powers `/work`, `/work/[slug]`, and the home page Selected Works section
- `SelectedWorks.tsx` hard-indexes `projects.slice(0, 4)` by position — the first 4 array entries map to specific card positions on the home page. Order matters.
- Each entry needs: `id`, `name`, `category`, `year`, `image`, `website`, `github`, `slug`, `problem`, `approach`, `result`, `techStack[]`, `gallery[]`
- `slug` must be unique, lowercase kebab-case (becomes the URL `/work/<slug>`)

**`lib/data.ts`** — Portfolio grid items (home page filterable tabs, no detail pages)
- `portfolioData` → "Website Portfolio" tab (`Portfolio.tsx`)
- `UIUXData` → "UI/UX / Design" tab
- Items link directly to external URLs; they have no individual case-study pages

### Image Conventions

- All images live in `public/images/`, referenced as `/images/filename.ext`
- The codebase uses native `<img>` tags, not `next/image`
- Gallery images for project detail pages: `/images/project-name/1.jpg`, etc.

### Routing

| Route | Component | Data source |
|---|---|---|
| `/` | `app/page.tsx` | `lib/data.ts`, `lib/projectData.ts` |
| `/work` | `components/project/MyWorks.tsx` | `lib/projectData.ts` |
| `/work/[slug]` | `app/work/[slug]/page.tsx` | `lib/projectData.ts` (matched by `slug`) |
| `/blog` | `components/blog/Blogs.tsx` | `components/blog/BlogData.ts` |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` | `components/blog/BlogData.ts` |
| `/about` | `components/about/AboutMe.tsx` | static |

### Adding or Removing a Project

1. Edit `lib/projectData.ts` — add/remove the entry (keep the 4 most important projects first)
2. If it should also appear in the home portfolio grid, edit `lib/data.ts`
3. Place images in `public/images/`
4. Run `pnpm build` to catch TypeScript errors, then verify manually with `pnpm dev`
