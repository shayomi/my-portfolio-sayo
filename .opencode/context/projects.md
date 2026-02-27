# Project Data — Context for AI Agents

This document describes every data source, file, and component involved in displaying
portfolio projects. Read this before adding, editing, or removing any project.

---

## Two Separate Data Sources

The portfolio uses **two independent data stores**. They serve different UI sections and
must be kept in sync when a project should appear in both.

### 1. `lib/projectData.ts` — Case-Study Projects (primary)

Drives the **Work/Portfolio pages** and the **home page "Selected Works" section**.

```
/work             → lists all projects  (components/project/MyWorks.tsx)
/work/[slug]      → individual detail page (app/work/[slug]/page.tsx)
Home page         → first 4 projects shown as cards (components/custom/SelectedWorks.tsx)
```

**Shape of each object:**

```ts
{
  id: number,           // Unique integer. Increment from the last entry.
  name: string,         // Display name, e.g. "Janes Auction"
  category: string,     // Short descriptor, e.g. "Art auction"
  year: string,         // 4-digit string, e.g. "2024"
  image: string,        // Path: "/images/filename.ext"  (file must exist in public/images/)
  website: string,      // Full URL to live site
  github: string,       // Full URL to repo, or "" if private/none
  slug: string,         // URL-safe kebab-case, e.g. "janes-auction" → /work/janes-auction
  problem: string,      // 1-3 paragraph description of the problem the project solved
  approach: string,     // 1-3 paragraph description of the technical approach taken
  result: string,       // 1-2 paragraph description of the outcome
  techStack: string[],  // Array of technology names, e.g. ["Next.js", "TailwindCSS"]
  gallery: string[],    // Array of image paths shown on the detail page (can be placeholder paths)
}
```

**Critical ordering rule for SelectedWorks:**
`components/custom/SelectedWorks.tsx` hard-indexes `projects.slice(0, 4)` by position:
- `topProjects[0]` → left tall card (top row)
- `topProjects[1]` → right wide card (top row)
- `topProjects[2]` → left wide card (bottom row)
- `topProjects[3]` → right tall card (bottom row)

**Changing the order of objects in the `projects` array directly changes the home page layout.**
Place the 4 most important projects first in the array.

---

### 2. `lib/data.ts` — Portfolio Grid Items (secondary)

Drives the **home page Portfolio tab section** (`components/custom/Portfolio.tsx`), which
shows a filterable grid split into two tabs:

- `portfolioData` → "Website Portfolio" tab
- `UIUXData`      → "UI/UX / Design" tab

**Shape of each object (both arrays share the same shape):**

```ts
{
  icon: string,        // Path: "/images/filename.ext"
  title: string,       // Display title shown below the card
  tags: string,        // Single tag label, e.g. "Fintech", "Social App"
  website: string,     // Full URL (card links directly to live site — no slug/detail page)
  github: string,      // Full URL or "" for UI/UX items
  description: string, // Short paragraph shown in the hover overlay
}
```

**No slug/detail page.** Items in `lib/data.ts` link directly to external URLs.
They do NOT have individual case-study pages on this site.

---

## Component Map

| Component | File | Data source | Notes |
|---|---|---|---|
| Home: Selected Works | `components/custom/SelectedWorks.tsx` | `lib/projectData.ts` | Shows `projects[0..3]` by index |
| Home: Portfolio tabs | `components/custom/Portfolio.tsx` | `lib/data.ts` | Filterable grid; external links |
| Work list page | `components/project/MyWorks.tsx` | `lib/projectData.ts` | All projects, grid layout |
| Work detail page | `app/work/[slug]/page.tsx` | `lib/projectData.ts` | Matched by `slug` field |
| Portfolio tab logic | `components/custom/Portfoliotab.tsx` | props | Tab switcher UI only |

---

## Image Conventions

- All images live in `public/images/`.
- Reference them as `/images/filename.ext` (no `public/` prefix).
- The codebase uses native `<img>` tags, not `next/image`.
- Gallery images on the detail page are stored under subdirectories:
  `/images/project-name/1.jpg`, `/images/project-name/2.jpg`, etc.
  If real screenshots are not available, reuse any existing placeholder path from another project.

---

## Slug Rules

- Must be unique across all entries in `lib/projectData.ts`.
- Use lowercase kebab-case only: letters, digits, hyphens.
- No spaces, underscores, or special characters.
- The slug becomes the URL: `/work/<slug>`.
- Examples: `"event-spaces"`, `"janes-auction"`, `"accelerate-africa"`

---

## Verifying Changes

After editing either data file, run:

```bash
pnpm build    # catches TypeScript errors and missing required fields
pnpm lint     # runs next/core-web-vitals eslint rules
```

There is no test suite. Manual verification:
1. `pnpm dev` → open `http://localhost:3000` and check the home page Selected Works section.
2. Navigate to `/work` and verify the new card appears.
3. Click the card → verify the `/work/<slug>` detail page renders correctly.
4. Check the home page Portfolio tabs if you also edited `lib/data.ts`.
