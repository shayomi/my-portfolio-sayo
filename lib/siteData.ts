// Content for the single-page home. Sourced from CV.md, the Toviri team bio,
// and existing site copy. Projects live in lib/projectData.ts.

export const EMAIL = "adegoroyesayo@gmail.com";
export const WHATSAPP = "https://wa.link/37lp8a";

export const stats = [
  { value: 5, suffix: "+", label: "Years shipping products and AI-native platforms" },
  { value: 8, suffix: "", label: "Production case studies" },
  { value: 1500, suffix: "+", label: "Toviri waitlist, grown organically" },
  { value: 40, suffix: "%", label: "Faster investor onboarding via AI automation" },
];

export const stack = [
  "Next.js",
  "TypeScript",
  "AI Agents",
  "Claude Code",
  "OpenCode",
  "Supabase",
  "PostgreSQL",
  "Playwright",
  "Sentry",
  "AWS",
  "Gemini AI",
  "OpenAI API",
  "Tailwind CSS",
  "Figma",
];

// Nodes for the orchestration graph. `side` places them left/right of the hub.
export const capabilities = [
  { title: "AI & Agents", detail: "Multi-agent coaching, Gemini assessment engines, subagent orchestration", side: "left" },
  { title: "Full-Stack", detail: "Next.js, TypeScript, multi-tenant SaaS, public APIs, RBAC", side: "left" },
  { title: "Product & UX", detail: "User-centred interfaces people actually adopt", side: "left" },
  { title: "Data & Backend", detail: "Supabase, PostgreSQL, GraphQL, realtime, headless CMS", side: "right" },
  { title: "Testing", detail: "Playwright browser automation and AI regression checks", side: "right" },
  { title: "Infra & Security", detail: "AWS, CI/CD, Sentry observability, secure auth flows", side: "right" },
] as const;

export const experience = [
  {
    role: "Founding Engineer & CTO",
    company: "Toviri",
    period: "Now",
    summary: "Building the core platform and AI from architecture to production. Leading engineering, AI, infrastructure and security.",
  },
  {
    role: "Associate Engineer",
    company: "Itana",
    period: "Now",
    summary: "Multi-tenant B2B SaaS with a public API and role-based access control.",
  },
  {
    role: "Tech & Design Specialist",
    company: "Future Africa",
    period: "2023 — Now",
    summary: "Co-built SaveTown; AI automations that made investor onboarding 40% faster; a Strapi CMS that freed marketing from dev dependency.",
  },
  {
    role: "Frontend Engineer",
    company: "Vroom Technologies",
    period: "2024",
    summary: "Ride-hailing web app and admin dashboard with real-time vehicle tracking.",
  },
  {
    role: "Frontend Developer & Designer",
    company: "Techclout Africa",
    period: "2021 — 2022",
    summary: "Performant UIs across client products; standardised component patterns.",
  },
  {
    role: "Frontend Developer & Designer",
    company: "Run Technologies",
    period: "2020 — 2021",
    summary: "Redesigned the product UI — site visitors up 45% in six months.",
  },
];
