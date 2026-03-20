export const projects = [
  {
    id: 1,
    name: "Accelerate Africa",
    category: "Agentic Founder Coaching Platform",
    year: "2026",
    image: "/images/vc.webp",
    website: "http://acceler8.africa",
    github: "https://github.com/shayomi/accelerate-website-develop",
    slug: "accelerate-africa",
    problem:
      "Founders needed a consistent way to get high-quality coaching, submit weekly progress updates, and map their startup story over time, while coaches needed better visibility, structure, and accountability tools to mentor effectively.",
    approach:
      "I evolved Accelerate Africa into an agentic platform where workflows are assisted by OpenCode and Claude Code agents. The system supports coach-founder collaboration loops for weekly submissions, feedback cycles, and story mapping. Browser-level quality checks were automated with Playwright, OpenClaw was integrated for autonomous orchestration, Sentry handled production monitoring, and Supabase powered structured data, auth flows, and realtime updates.",
    result:
      "The platform now delivers a more actionable mentoring experience: founders get clearer momentum tracking and strategic guidance, while coaches get operational leverage through agent-assisted workflows, better visibility, and a measurable weekly execution rhythm.",
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
