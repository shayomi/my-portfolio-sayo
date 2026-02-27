# AGENTS.md — Codebase Guide for AI Coding Agents

## Project Overview

Next.js 14 (App Router) personal portfolio site. TypeScript + Tailwind CSS + shadcn/ui + Framer Motion.
Deployed on Vercel. Static data-driven — no backend or database.

---

## Commands

```bash
# Development
pnpm dev          # Start dev server (preferred package manager)
npm run dev       # Alternative

# Build
pnpm build
npm run build

# Start production server
pnpm start

# Lint
pnpm lint         # Runs next lint (eslint-config-next/core-web-vitals)
npm run lint
```

**No test framework is configured.** There are no test files or test commands. Do not create test
infrastructure unless explicitly requested.

---

## Package Manager

**pnpm is the primary package manager** (`pnpm-lock.yaml` is present). Use `pnpm add <pkg>` to
install dependencies. A `package-lock.json` also exists but is secondary.

---

## Project Structure

```
app/                  # Next.js App Router pages (Server Components by default)
  layout.tsx          # Root layout — font, metadata, global wrappers
  page.tsx            # Home page
  about/page.tsx
  blog/[slug]/page.tsx
  work/[slug]/page.tsx
  globals.scss        # Global styles: Tailwind layers, CSS variables, custom utility classes
  font.ts             # next/font/local config for Kodchasan typeface

components/
  about/              # About page components
  blog/               # Blog listing + data
  custom/             # Main page section components (Hero, Contact, Portfolio, etc.)
  project/            # Work/project page components
  shared/             # Shared utilities: Navbar, Footer, animation variants
  ui/                 # shadcn/ui primitives (button, form, input, etc.)
  AIWorkflowSection.jsx  # Only .jsx file — prefer .tsx for all new files

lib/
  data.ts             # All static site data (nav, socials, portfolio items, reviews)
  projectData.ts      # Detailed project case study objects
  utils.ts            # cn() helper (clsx + tailwind-merge)

public/
  images/             # Static images — referenced as /images/filename.ext
  fonts/              # Local font files
```

---

## Code Style

### Language & Files

- **TypeScript strictly** — `strict: true` in tsconfig. All new files must be `.tsx` (components)
  or `.ts` (logic/data). Do not create `.jsx` or `.js` files.
- Path alias `@/` maps to the project root. Use it for all non-relative imports.

### Component Structure

- **Server Components by default.** Only add `"use client"` at the top of a file when the component
  uses browser APIs, React hooks (`useState`, `useEffect`), or Framer Motion animations.
- Page files under `app/` are conventionally named with a lowercase function: `const page = () =>`.
- Section/feature components use PascalCase function names matching their filename.

### Naming Conventions

| Item | Convention | Example |
|---|---|---|
| Component files | PascalCase | `SelectedWorks.tsx` |
| Data/utility files | camelCase | `projectData.ts`, `utils.ts` |
| Component functions | PascalCase | `export default function Hero()` |
| Page functions | lowercase | `const page = () =>` |
| CSS custom classes | kebab-case | `.hero-banner-bg`, `.background-text` |

### Import Order

Follow this ordering within files (no enforced linter rule, but maintain consistency):

1. React and Next.js (`react`, `next/link`, `next/image`)
2. Third-party libraries (`framer-motion`, `react-icons/...`, `lucide-react`)
3. Internal UI components (`@/components/ui/...`)
4. Internal feature components (`@/components/shared/...`, `@/components/custom/...`)
5. Data and utilities (`@/lib/data`, `@/lib/utils`)

### TypeScript

- Prefer explicit return types on exported functions.
- Use inline `interface` or `type` definitions near the component or in `lib/data.ts`.
- Do not use `any` — use `unknown` and narrow, or define a proper type.
- The `cn()` utility (`@/lib/utils`) must be used whenever combining conditional Tailwind classes:
  ```ts
  import { cn } from "@/lib/utils";
  className={cn("base-class", condition && "conditional-class")}
  ```

### Styling

- **Tailwind CSS first** — use utility classes for all layout, spacing, typography, and color.
- **CSS variables** drive the color system (defined in `app/globals.scss`). Use semantic tokens
  (`bg-background`, `text-foreground`, `text-primary`, etc.) rather than raw colors.
- Dark background theme — `bg-black` / dark surfaces with white text is the site-wide default.
- Custom utility classes (background images, decorative watermark text, etc.) go in `globals.scss`
  using SCSS syntax (nesting is allowed — sass is installed).
- Do **not** use CSS Modules. Do not add `*.module.css` or `*.module.scss` files.
- `class-variance-authority` (CVA) is used in shadcn/ui components. Use CVA for any new component
  that requires multiple style variants.

### Animation

Framer Motion is the animation library. All section components should follow this pattern:

```tsx
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/components/shared/Variant";

<motion.section
  variants={staggerContainer(0.1, 0.2)}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
>
  <motion.div variants={fadeIn("up", "tween", 0.2, 1)}>
    ...
  </motion.div>
</motion.section>
```

- Animation variants live in `components/shared/Variant.ts` and `components/shared/Motion.ts`.
- Add new variant helpers to `Variant.ts` — do not create new variant files.
- Always use `viewport={{ once: true }}` on section-level `whileInView` triggers.

### Images

- Use native `<img>` tags (not `next/image`) to match the existing codebase pattern.
- Suppress the ESLint warning at the file top: `/* eslint-disable @next/next/no-img-element */`
- Store images in `public/images/` and reference via `/images/filename.ext`.

### Data

- All static site content belongs in `lib/data.ts`. Export named arrays/objects.
- Detailed per-project data belongs in `lib/projectData.ts` with typed objects.
- Do not hardcode data inline inside components — import from `lib/`.

### Forms

- Use `react-hook-form` with `zod` validation. See `components/custom/ContactForm.tsx` for the
  canonical pattern.
- shadcn/ui `<Form>`, `<Input>`, `<Textarea>`, `<Label>` components are available.

### shadcn/ui

- Component source lives in `components/ui/`. Extend these files rather than overriding with
  wrappers when possible.
- Add new shadcn components via `pnpm dlx shadcn-ui@latest add <component>`.

---

## ESLint

Config: `next/core-web-vitals` (standard Next.js rules). No custom rules.

To suppress a rule for a file: `/* eslint-disable rule-name */` at the top.
To suppress inline: `// eslint-disable-next-line rule-name`.

Run the linter before committing: `pnpm lint`.

---

## Key Dependencies

| Package | Purpose |
|---|---|
| `next` 14 | Framework (App Router) |
| `framer-motion` | Animations |
| `tailwindcss` + `sass` | Styling |
| `shadcn/ui` (Radix + CVA) | UI primitives |
| `react-hook-form` + `zod` | Form validation |
| `react-icons` + `lucide-react` | Icons |
| `react-fast-marquee` | Scrolling marquee |
| `swiper` | Carousel/slider |
| `clsx` + `tailwind-merge` | Class merging via `cn()` |
