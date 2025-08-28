export const projects = [
  {
    id: 1,
    name: "Accelerate Africa",
    category: "Asset Management Platform",
    year: "2022",
    image: "/images/vc.webp",
    website: "http://acceler8.africa",
    github: "https://github.com/shayomi/accelerate-website-develop",
    slug: "accelerate-africa",
    problem:
      "Organizations needed a scalable and flexible platform to manage content and deliver streamlined digital experiences backed by reliable infrastructure and modern DevOps.",
    approach:
      "Using Next.js as the frontend, I integrated Strapi as a headless CMS and PostgreSQL for structured data management. The backend used Express.js, deployed via Docker, with secure OAuth authentication and hosting on AWS. The architecture prioritized modularity, CI/CD readiness, and localization support.",
    result:
      "Accelerate provides a robust, scalable digital foundation for businesses looking to manage content dynamically while maintaining security, performance, and adaptability across regions and platforms.",
    techStack: [
      "Next.js",
      "PostgreSQL",
      "Express.js",
      "Strapi",
      "Docker",
      "OAuth",
      "AWS",
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
    name: "Market Expansion Strategist Agent",
    category: "AI Agent",
    year: "2025",
    image: "/images/mesa.jpg",
    website: "https://mesa-ashen.vercel.app/",
    github: "private",
    slug: "mesa",
    problem:
      "Businesses often struggle to evaluate and plan entry into new markets due to fragmented data, lack of structured analysis, and limited in-house expertise. Generating comprehensive reports like SWOT, PESTLE, and competitive analysis usually requires consultants and significant resources.",
    approach:
      "The app automates market expansion strategy creation using a pipeline of Clerk authentication, MongoDB for business data storage, and OpenAI GPT-4.1 for generating structured, consultant-style reports. Each request pulls company details from the database, feeds them into a carefully engineered prompt, and returns a full analysis with sections such as Market Overview, Entry Strategies, PESTLE, SWOT, and Competitive Landscape. Reports are automatically saved and associated with the user for future reference.",
    result:
      "Users gain immediate access to in-depth, personalized market expansion strategy reports without the need for external consultants. This empowers businesses of all sizes to make informed strategic decisions faster, at lower cost, and with a professional, data-backed framework stored in their dashboard for ongoing use.",
    techStack: ["Next.js", "TailwindCSS", "MongoDB", "Clerk", "OpenAI GPT-4.1"],
    gallery: [
      "/images/market-expansion/1.jpg",
      "/images/market-expansion/2.jpg",
      "/images/market-expansion/3.jpg",
    ],
  },
  {
    id: 5,
    name: "Founders Resource",
    category: "Legal Assets / Tech",
    year: "2025",
    image: "/images/founderresource.jpeg",
    website: "https://founderzresource.com",
    github: "",
    slug: "founderz-resource",
    problem:
      "Startup founders consistently face overwhelming legal hurdles when launching and growing their businesses. From incorporation and equity structuring to hiring, compliance, IP protection, and fundraising, legal processes are often scattered across expensive law firms, inaccessible documentation, or unverified forums.Many early-stage founders cannot afford dedicated legal counsel, leading to costly mistakes, slow decision-making, and reduced investor confidence. Existing platforms either lack depth, are US-centric, or don’t scale across jurisdictions and growth stages. This legal information gap significantly hinders innovation and confidence, especially for underrepresented and emerging market founders.",
    approach:
      "To address this, I built Founder Resource Hub, a centralized legal resource platform purpose-built for startup founders. Developed using Next.js, TailwindCSS, and AWS, the platform offers a trusted, user-friendly experience where founders can access verified legal resources across key categories like incorporation, employment, intellectual property, fundraising, and cap tables. It features jurisdiction-specific templates and downloadable legal documents vetted by experienced startup lawyers, alongside advanced filters to browse by stage, sector, or country. Founders can gain legal clarity through expert insights, curated playbooks, and interactive Q&A forums, while also collaborating with co-founders or legal advisors in shared resource folders. With regular updates on regulatory changes and funding compliance, the platform is designed for accessibility and confidence—even for first-time or non-technical founders—ensuring legal decisions are made with clarity, speed, and trust.",
    result:
      "Founder Resource Hub empowers entrepreneurs to take control of their legal journey without the fear, confusion, or cost typically associated with legal work. Founders now have a trusted legal starting point—backed by expert input and real-world startup use cases.By reducing legal ambiguity and democratizing access to high-quality resources, the platform boosts compliance, confidence, and fundraising readiness. It has also become a bridge between founders and startup-focused legal professionals, fostering trust, reducing risk, and helping teams scale more effectively across borders.",
    techStack: ["Framer", "Javascript"],
    gallery: [
      "/images/nimble-media/1.jpg",
      "/images/nimble-media/2.jpg",
      "/images/nimble-media/3.jpg",
      "/images/nimble-media/4.jpg",
    ],
  },

  {
    id: 6,
    name: "Capital State",
    category: "Infoweb",
    year: "2023",
    image: "/images/capstate.jpg",
    website: "https://capitalstatefarm.com",
    github: "https://github.com/shayomi/capital-state-farm",
    slug: "capital-state",
    problem:
      "Agricultural professionals and rural communities lacked an accessible, centralized source for important data—ranging from farming best practices to government programs and financial resources.",
    approach:
      "Capital State Farm was built as a fast, informative web app using Next.js and TailwindCSS, with OAuth for user-specific access to personalized content. It focused on delivering curated data through dynamic content blocks, clean navigation, and mobile-first design.",
    result:
      "Users gained a one-stop portal to access vital farming and financial information, improving their decision-making, productivity, and engagement with public resources.",
    techStack: ["Next.js", "TailwindCSS", "OAuth"],
    gallery: [
      "/images/quantum-hr/1.jpg",
      "/images/quantum-hr/2.jpg",
      "/images/quantum-hr/3.jpg",
      "/images/quantum-hr/4.jpg",
    ],
  },
  {
    id: 7,
    name: "Event Spaces",
    category: "Event management platform",
    year: "2024",
    image: "/images/eventspace.jpg",
    website: "http://eventspaces.vercel.app",
    github: "https://github.com/shayomi/Eventspace",
    slug: "event-spaces",
    problem:
      "Event organizers often face challenges in managing registrations, ticket sales, and payment integration in a single, streamlined platform.",
    approach:
      "I developed Event Spaces as an all-in-one event management solution using Next.js, Node.js, and MongoDB. The platform supports event creation, ticketing, and Stripe payment integration. I used Clerk for authentication and UploadThing for media uploads. The UI is optimized for clarity and conversion.",
    result:
      "The platform simplifies event hosting and attendee management, providing an intuitive experience for organizers and users alike, with real-time updates and secure transactions.",
    techStack: [
      "Next.js",
      "TailwindCSS",
      "Clerk",
      "MongoDB",
      "Node.js",
      "UploadThing",
      "Stripe",
    ],
    gallery: [
      "/images/fitforge/1.jpg",
      "/images/fitforge/2.jpg",
      "/images/fitforge/3.jpg",
      "/images/fitforge/4.jpg",
    ],
  },
  {
    id: 8,
    name: "Janes Auction",
    category: "Art auction",
    year: "2024",
    image: "/images/auction.webp",
    website: "https://janes.vercel.app",
    github: "https://github.com/shayomi/Janes-Auction-webapp",
    slug: "janes-auction",
    problem:
      "Independent artists and collectors needed a secure and scalable platform to host online auctions, manage bids, and facilitate secure transactions—all while offering a refined user experience.",
    approach:
      "Built with Next.js and MongoDB, Janes Auction offers real-time bidding, user authentication via Clerk, secure media uploads with UploadThing, and integrated payments through Stripe. The backend supports live updates, user activity tracking, and fraud prevention measures.",
    result:
      "Janes Auction delivers a premium digital experience for hosting and participating in art auctions. It’s fast, reliable, and designed with both creators and collectors in mind.",
    techStack: [
      "Next.js",
      "TailwindCSS",
      "Clerk",
      "MongoDB",
      "Node.js",
      "UploadThing",
      "Stripe",
    ],
    gallery: [
      "/images/codepilot/1.jpg",
      "/images/codepilot/2.jpg",
      "/images/codepilot/3.jpg",
      "/images/codepilot/4.jpg",
    ],
  },
];
