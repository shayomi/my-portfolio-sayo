export const projects = [
  {
    id: 1,
    name: "Coach",
    category: "End-to-End Startup Ecosystem Platform",
    year: "2026",
    image: "/images/vc.webp",
    website: "http://acceler8.africa",
    github: "https://github.com/shayomi/accelerate-website-develop",
    slug: "coach",
    problem:
      "Founders lose momentum because the journey from idea to a real, fundable company is fragmented across dozens of disconnected tools and providers. They need coaching in one place, business registration (CAC) and licensing somewhere else, visa and immigration help through another channel, and investors and vendors nowhere near their day-to-day workflow. There was no single environment that could take a founder from early stage all the way to full establishment and $1M ARR.",
    approach:
      "I built Coach as an end-to-end startup ecosystem platform that unifies every actor in one place. Founders get agentic coaching, an onboarding questionnaire, a mentor directory, milestone tracking, AI analysis, and metrics and results dashboards, plus built-in access to the operational milestones that make a company real: business licence and company registration (CAC), compliance and regulatory filings, and visa and immigration support. A service-provider marketplace lets vetted legal, accounting, and operations partners plug directly into founder workflows, while a dedicated investor portal gives investors structured visibility into founder progress, traction, and deal flow. Workflows are assisted by OpenCode and Claude Code agents, browser-level quality checks were automated with Playwright, OpenClaw handled autonomous orchestration, Sentry covered production monitoring, and Supabase powered structured data, auth, role-based access, and realtime updates across founders, coaches, providers, and investors.",
    result:
      "Coach turns a scattered startup journey into a single, guided path from early stage to full establishment. Founders can incorporate, stay compliant, sort immigration, get coached, hit milestones, and connect with the right service providers and investors, all in one platform, with a measurable execution rhythm aimed squarely at reaching $1M ARR, while coaches, providers, and investors each get purpose-built views into the same ecosystem.",
    techStack: [
      "Next.js",
      "OpenCode",
      "Claude Code Agent",
      "Playwright",
      "OpenClaw",
      "Sentry",
      "Supabase",
    ],
    gallery: [
      "/images/vision-capital/1.jpg",
      "/images/vision-capital/2.jpg",
      "/images/vision-capital/3.jpg",
      "/images/vision-capital/4.jpg",
    ],
  },
  {
    id: 5,
    name: "Orion",
    category: "AI Legal Platform for Founders",
    year: "2026",
    image: "/images/orion.jpg",
    website: "https://orionadvisorylimited.com",
    github: "",
    slug: "orion",
    problem:
      "Early-stage founders routinely make high-stakes legal decisions without affordable guidance. They can't tell which issues are urgent, when a template is safe to use, or when they genuinely need a lawyer, so risks around structure, IP, and contracts go unnoticed until they become expensive.",
    approach:
      "I built Orion around a single founder journey: sign up, complete a guided legal health check, see prioritised issues, ask an AI assistant to explain them, then generate a document or request expert help. Each issue maps to one of three resolution paths, self-serve guidance, document generation, or a human expert referral. A context-aware AI chatbot is linked to the startup profile and assessment results with built-in disclaimers and escalation for high-risk matters, backed by a document generator for NDAs, founder agreements, contractor agreements, and IP assignments.",
    result:
      "Founders can complete the health check unaided, understand their real legal exposure, and take a concrete next step, whether that is generating a document or escalating to an expert, turning scattered, intimidating legal questions into a structured, auditable readiness workflow.",
    techStack: ["Next.js", "TypeScript", "Drizzle ORM", "AI / LLM", "Tailwind CSS"],
    gallery: [
      "/images/orion/1.jpg",
      "/images/orion/2.jpg",
      "/images/orion/3.jpg",
      "/images/orion/4.jpg",
    ],
  },
  {
    id: 6,
    name: "Capita-Lens",
    category: "Capital Readiness SaaS for SMEs",
    year: "2026",
    image: "/images/capita-lens.png",
    website: "https://capita-lens.com",
    github: "",
    slug: "capita-lens",
    problem:
      "Most SMEs apply for funding without understanding how lenders actually assess them. They assume a good credit score and healthy statements are enough, while lenders weigh a much broader mix of financial, operational, governance, and compliance factors, so businesses get rejected without knowing why.",
    approach:
      "I built Capita-Lens as a cloud SaaS platform for continuous self-due diligence. Businesses assess themselves against the broad range of factors commonly considered in commercial funding decisions, going beyond a single credit indicator to a holistic view of capital readiness. The platform surfaces weaknesses, highlights evidence gaps, and guides businesses to close them before submitting a funding application, without ever promising approval.",
    result:
      "SMEs get a clear, honest picture of where they stand, a prioritised list of gaps to close, and a structured path to improve readiness before approaching lenders or investors, replacing guesswork with a repeatable diligence process.",
    techStack: ["Next.js", "TypeScript", "SaaS", "Tailwind CSS", "Supabase"],
    gallery: [
      "/images/capita-lens/1.jpg",
      "/images/capita-lens/2.jpg",
      "/images/capita-lens/3.jpg",
      "/images/capita-lens/4.jpg",
    ],
  },
  {
    id: 7,
    name: "Renuir",
    category: "B2B Lost & Found Recovery Platform",
    year: "2026",
    image: "/images/renuir.jpg",
    website: "https://renuir.com",
    github: "",
    slug: "renuir",
    problem:
      "Traditional lost-and-found is chaotic and unauditable. Hotels, airports, restaurants, and institutions have no reliable way to log found items, match them to the people who lost them, and return them securely, which erodes trust and wastes staff time.",
    approach:
      "I built Renuir as a modern B2B recovery platform that connects people who have lost items with verified venues through smart matching and secure returns. It serves three audiences, individuals recovering items, businesses managing found inventory, and developers integrating via the Renuir API. The web platform was built with Next.js 16 App Router, TypeScript in strict mode, Tailwind CSS v4 and shadcn/ui, with Framer Motion for motion and react-hook-form plus Zod for validated intake flows.",
    result:
      "Renuir replaces disorganised lost-and-found processes with an intelligent, auditable recovery system, giving venues operational control and individuals a trustworthy, verifiable path back to their belongings.",
    techStack: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS v4",
      "shadcn/ui",
      "Framer Motion",
      "Zod",
    ],
    gallery: [
      "/images/renuir/1.jpg",
      "/images/renuir/2.jpg",
      "/images/renuir/3.jpg",
      "/images/renuir/4.jpg",
    ],
  },
  {
    id: 2,
    name: "Cine",
    category: "Video Conference Platform",
    year: "2023",
    image: "/images/sm.jpg",
    website: "http://cinevideo.vercel.app",
    github: "https://github.com/shayomi/cine",
    slug: "cine-tech",
    problem:
      "As remote collaboration became standard, users lacked a focused, lightweight video communication tool that offered real-time video streaming, authentication, and customization—all without bloated enterprise overhead.",
    approach:
      "I designed Cine as a lean, scalable video communication platform. Leveraging Stream.io for real-time video infrastructure and Clerk for seamless authentication, I used Next.js and TailwindCSS to build a highly responsive, modern UI. The app architecture emphasizes component modularity and real-time state management for smooth video sessions.",
    result:
      "Cine delivers seamless video conferencing with low-latency performance, secure user access, and customizable room configurations—ideal for teams, educators, and small organizations.",
    techStack: ["Next.js", "TailwindCSS", "Clerk", "Stream.io"],
    gallery: [
      "/images/social-mesh/1.jpg",
      "/images/social-mesh/2.jpg",
      "/images/social-mesh/3.jpg",
      "/images/social-mesh/4.jpg",
    ],
  },
  {
    id: 3,
    name: "Savetown",
    category: "Fintech",
    year: "2023",
    image: "/images/savetown.jpg",
    website: "https://savetown.com",
    github: "https://github.com/Savetown/savetown-website-fe",
    slug: "save-town",
    problem:
      "Many families aiming for homeownership face fragmented tools for financial planning, lack of collaborative features, and minimal access to expert guidance in one centralized platform.",
    approach:
      "I built Savetown as a digital cooperative using Next.js, TailwindCSS, and AWS. The platform allows users to create or join saving groups, track shared financial goals, and access verified insights from experts. Special attention was given to accessibility and user trust, with clear dashboards and shared financial visibility.",
    result:
      "Savetown empowers families to collaboratively plan, save, and make informed decisions toward homeownership. It fosters community trust and improves financial discipline through shared milestones.",
    techStack: ["Next.js", "JavaScript", "TailwindCSS", "AWS"],
    gallery: [
      "/images/nimble-media/1.jpg",
      "/images/nimble-media/2.jpg",
      "/images/nimble-media/3.jpg",
      "/images/nimble-media/4.jpg",
    ],
  },
  {
    id: 4,
    name: "Founders Resource",
    category: "Founder Enablement Platform",
    year: "2025",
    image: "/images/founderresource.jpeg",
    website: "https://founderzresource.com",
    github: "",
    slug: "founderz-resource",
    problem:
      "Founders often lose momentum because critical startup guidance is scattered across fragmented docs, legal resources, and disconnected tools. They need one trusted environment to access structured playbooks, templates, and execution guidance.",
    approach:
      "I built a centralized founder knowledge platform with a Next.js frontend, structured resource architecture, and scalable content delivery. The system supports stage-based navigation, practical templates, and curated implementation guides so teams can move from learning to execution quickly.",
    result:
      "Founders gain faster decision velocity, clearer operating guidance, and a repeatable structure for high-stakes startup tasks. The platform improves confidence, execution quality, and readiness for growth conversations with mentors, operators, and investors.",
    techStack: ["Framer", "Javascript"],
    gallery: [
      "/images/nimble-media/1.jpg",
      "/images/nimble-media/2.jpg",
      "/images/nimble-media/3.jpg",
      "/images/nimble-media/4.jpg",
    ],
  },

];
