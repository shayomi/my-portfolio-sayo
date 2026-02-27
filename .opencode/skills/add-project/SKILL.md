# Skill: Add a New Project

Use this skill whenever the user asks to add, create, or insert a new project into the portfolio.

Before starting, read `.opencode/context/projects.md` for full data-shape and component-map
context. The steps below are authoritative.

---

## Decision: Which data source?

Ask the user (or infer from context) which section(s) the new project should appear in:

| Goal | File(s) to edit |
|---|---|
| Full case-study page at `/work/<slug>` + grid on `/work` + optionally home Selected Works | `lib/projectData.ts` |
| Home page Portfolio tab grid only (external link, no detail page) | `lib/data.ts` (`portfolioData` or `UIUXData`) |
| Both | Both files |

If the user provides a `slug` or mentions a detail page, always use `lib/projectData.ts`.

---

## Step 1 — Gather required information

Collect the following from the user before writing any code. Do not invent values.

**For `lib/projectData.ts` entries:**
- `name` — display name of the project
- `category` — short category label (e.g. "Fintech", "AI Agent", "Ecommerce")
- `year` — 4-digit year string (e.g. "2025")
- `image` — image filename that will be placed in `public/images/` (e.g. `myproject.jpg`)
- `website` — full live URL (use `""` if not yet deployed)
- `github` — full repo URL (use `""` or `"private"` if not public)
- `slug` — kebab-case URL segment (must be unique; e.g. `"my-project"`)
- `problem` — description of the problem the project solved
- `approach` — description of the technical approach
- `result` — description of the outcome
- `techStack` — array of technology names
- `gallery` — array of image paths (can reuse placeholder paths if real images aren't ready)

**For `lib/data.ts` entries (portfolioData or UIUXData):**
- `icon` — image path in `public/images/`
- `title` — display title
- `tags` — single tag string
- `website` — full URL
- `github` — full URL or `""` for UI/UX items
- `description` — short hover description

---

## Step 2 — Determine the next `id`

Read `lib/projectData.ts` and find the highest existing `id`. The new entry's `id` is
`max(existing ids) + 1`.

---

## Step 3 — Add to `lib/projectData.ts`

Append the new object to the END of the `projects` array.

```ts
// lib/projectData.ts
export const projects = [
  // ... existing entries ...
  {
    id: <next_id>,
    name: "<name>",
    category: "<category>",
    year: "<year>",
    image: "/images/<filename>",
    website: "<url>",
    github: "<url>",
    slug: "<slug>",
    problem: "<problem text>",
    approach: "<approach text>",
    result: "<result text>",
    techStack: ["Tech1", "Tech2"],
    gallery: [
      "/images/<slug>/1.jpg",
      "/images/<slug>/2.jpg",
      "/images/<slug>/3.jpg",
      "/images/<slug>/4.jpg",
    ],
  },
];
```

**Do not change the order of existing entries** unless the user explicitly asks to reorder.
Order controls which projects appear in the home page Selected Works section (first 4 by index).

---

## Step 4 (conditional) — Promote to Selected Works on home page

The home page `SelectedWorks` component always shows the **first 4 entries** in the `projects`
array by array index. If the user wants the new project to appear there:

1. Move the new entry to one of positions `[0]`, `[1]`, `[2]`, or `[3]` in the array.
2. Displace whichever existing entry was in that position to a later index.
3. Confirm with the user which slot to use before reordering.

The layout of the 4 slots is fixed in `components/custom/SelectedWorks.tsx`:
- Index 0 → left tall card (top row)
- Index 1 → right wide card (top row)
- Index 2 → left wide card (bottom row)
- Index 3 → right tall card (bottom row)

---

## Step 5 (conditional) — Add to `lib/data.ts` Portfolio tab

If the project should also appear in the home page Portfolio tab grid, append to
`portfolioData` (for web projects) or `UIUXData` (for design/UI work):

```ts
{
  icon: "/images/<filename>",
  title: "<display title>",
  tags: "<tag>",
  website: "<url>",
  github: "<repo url or empty string>",
  description: "<short description for hover overlay>",
},
```

---

## Step 6 — Confirm image file

Check whether the image file already exists in `public/images/`. If not, tell the user:

> "Please add `<filename>` to `public/images/` before running the dev server.
> Until then, the image will appear broken."

Do not create placeholder image files. Images are binary assets that must be provided by
the user.

---

## Step 7 — Verify

Run the following and fix any errors before declaring success:

```bash
pnpm build
pnpm lint
```

If `pnpm build` is not available or would take too long, run `pnpm lint` at minimum.

Then instruct the user to:
1. `pnpm dev`
2. Open `http://localhost:3000` — check Selected Works if the project was added to the top 4.
3. Open `http://localhost:3000/work` — confirm the new card appears.
4. Click the card → confirm `/work/<slug>` renders the full detail page correctly.

---

## Common mistakes to avoid

- **Duplicate slugs** — always check existing slugs before assigning a new one.
- **Missing comma** after the last array entry's closing `}` — TypeScript will catch this on build.
- **Wrong `id`** — must be unique; always read the current max before assigning.
- **Reordering unintentionally** — appending to the end is safe. Only reorder when asked.
- **Using `next/image`** — this codebase uses native `<img>` tags everywhere. Do not import
  or use `Image` from `next/image` in new components.
- **Hardcoding data in components** — all project data must live in `lib/` files, not inlined
  inside component JSX.
