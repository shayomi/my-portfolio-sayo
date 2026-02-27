# Skill: Remove a Project

Use this skill whenever the user asks to remove, delete, hide, or archive a project from
the portfolio.

Before starting, read `.opencode/context/projects.md` for full data-shape and component-map
context. The steps below are authoritative.

---

## Decision: Soft hide vs hard delete

Confirm the user's intent before making changes:

| Intent | Action |
|---|---|
| Temporarily hide (can restore later) | Comment out the object with `//` |
| Permanently remove | Delete the object entirely from the array |

The existing codebase already uses comment-out style for one project in `lib/data.ts`
(the `LEGION` inventory entry is commented out). This is the preferred approach unless
the user explicitly wants a permanent deletion.

---

## Step 1 — Identify the project

Ask the user for the project name or slug if not already provided. Then:

1. Read `lib/projectData.ts` and `lib/data.ts`.
2. Search both files for the project by `name`, `slug`, or `title`.
3. Note **every location** where the project appears (it may be in both files).

---

## Step 2 — Check Selected Works impact

Open `components/custom/SelectedWorks.tsx`. It renders `projects.slice(0, 4)` by index:

- Index 0 → left tall card (top row)
- Index 1 → right wide card (top row)
- Index 2 → left wide card (bottom row)
- Index 3 → right tall card (bottom row)

If the project being removed is currently at index 0, 1, 2, or 3 in `lib/projectData.ts`,
**warn the user** before proceeding:

> "This project is currently shown in the home page Selected Works section. Removing it will
> shift the remaining projects up by one index, changing the home page layout. The next
> project in the array will take its place. Do you want to continue?"

Get confirmation before proceeding.

---

## Step 3 — Remove from `lib/projectData.ts`

**Soft hide (comment out):**
Wrap the entire object in a block comment. Keep alignment intact.

```ts
// Removed on <date> — user request
// {
//   id: 3,
//   name: "Savetown",
//   ...
// },
```

**Hard delete:**
Delete the entire object literal (from `{` to the closing `},`) and the blank line above it
if one exists. Do not leave a dangling comma on the previous entry.

---

## Step 4 — Remove from `lib/data.ts` (if present)

If the project also appears in `portfolioData` or `UIUXData` in `lib/data.ts`:

**Soft hide:** Comment out the object the same way as above.

**Hard delete:** Remove the object literal completely. Ensure the array remains syntactically
valid (no trailing comma issues in older TS targets — though Next.js 14 + bundler resolution
tolerates trailing commas).

---

## Step 5 — Reindex `id` values (hard delete only)

If doing a hard delete and the user cares about contiguous `id` values, renumber the
remaining entries in `lib/projectData.ts`. If the user did not ask for reindexing, leave
the `id` values as-is — gaps are harmless since `id` is not used for routing (slugs are).

**Do not reindex for soft hides** — the commented-out entry still "owns" its id.

---

## Step 6 — Verify no broken references

After removing the project, check that nothing else in the codebase references the removed
project by name or slug:

- Search for the `slug` string across `app/` and `components/`.
- If `SelectedWorks.tsx` now has fewer than 4 projects in the array (after removal), it will
  throw a runtime error because it hard-indexes `topProjects[3]`. In that case:
  - Either ensure at least 4 projects remain in the array, OR
  - Edit `SelectedWorks.tsx` to render only the available projects dynamically.

```tsx
// Safe dynamic version (edit SelectedWorks.tsx if needed):
const topProjects = projects.slice(0, Math.min(4, projects.length));
```

---

## Step 7 — Verify

Run the following and fix any errors before declaring success:

```bash
pnpm build
pnpm lint
```

Then instruct the user to:
1. `pnpm dev`
2. Open `http://localhost:3000` — confirm the project no longer appears in Selected Works
   (if it was in the top 4) and that no layout is broken.
3. Open `http://localhost:3000/work` — confirm the project card is gone.
4. Attempt to navigate to `/work/<removed-slug>` — confirm it returns a 404 (Next.js
   `notFound()` is already called when no matching slug is found).
5. If the project was in `lib/data.ts`, check the home page Portfolio tabs to confirm
   the card is removed from the correct tab.

---

## Common mistakes to avoid

- **Breaking the Selected Works 4-slot assumption** — `SelectedWorks.tsx` accesses
  `topProjects[0]` through `topProjects[3]` directly. If fewer than 4 projects remain,
  the page will throw. Always keep at least 4 entries OR update the component.
- **Leaving a dangling comma** — after deleting an object that was the last item in an
  array, ensure there is no trailing comma left on the new last item if targeting strict
  JSON-like contexts (TypeScript is fine with trailing commas, but verify `pnpm build` passes).
- **Forgetting `lib/data.ts`** — a project may appear in both `lib/projectData.ts` AND
  `lib/data.ts`. Always check both files.
- **Not warning about home page impact** — always surface the Selected Works index impact
  to the user before removing projects at index 0–3.
