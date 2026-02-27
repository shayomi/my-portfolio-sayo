"use client";

import { useState } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const sections = {
  plans: {
    label: "Plans",
    icon: "◈",
    color: "#6EE7B7",
    description: "Strategic roadmaps and execution timelines",
    items: [
      {
        title: "Q1 2025 Roadmap",
        status: "active",
        tags: ["strategy", "product"],
        summary:
          "Full-stack portfolio launch with AI integrations, client-facing case studies, and personal brand positioning.",
        details: [
          "Launch portfolio v2 with AI workflow section",
          "Publish 3 technical case studies",
          "Integrate Supabase for dynamic content",
          "Set up CI/CD with GitHub Actions",
        ],
      },
      {
        title: "AI Integration Sprint",
        status: "in-progress",
        tags: ["ai", "dev"],
        summary:
          "Embed AI-powered features into client projects and document the workflow for repeatability.",
        details: [
          "Build context system (skills, plans, docs)",
          "Set up OpenCode / agent workflow",
          "Document prompting patterns",
          "Create reusable AI component library",
        ],
      },
      {
        title: "Content Strategy",
        status: "planned",
        tags: ["marketing", "content"],
        summary:
          "Thought leadership through writing, showcasing the intersection of design, code, and AI.",
        details: [
          "Weekly dev notes / build logs",
          "LinkedIn technical posts",
          "Open source a small tool",
          "Newsletter launch",
        ],
      },
    ],
  },
  skills: {
    label: "Skills",
    icon: "◎",
    color: "#93C5FD",
    description: "Technical capabilities and knowledge domains",
    items: [
      {
        title: "Frontend Engineering",
        status: "expert",
        tags: ["react", "next.js", "typescript"],
        summary:
          "Building production-grade interfaces with Next.js, React, TypeScript, and modern CSS.",
        details: [
          "Next.js App Router & Server Components",
          "TypeScript & advanced patterns",
          "Tailwind CSS + design systems",
          "Performance optimization",
        ],
      },
      {
        title: "AI Workflow Design",
        status: "active",
        tags: ["llm", "agents", "prompting"],
        summary:
          "Designing and implementing AI-assisted development workflows using LLMs, agents, and context systems.",
        details: [
          "Prompt engineering & context design",
          "Agent orchestration (OpenCode, Claude)",
          "RAG and knowledge base architecture",
          "AI-assisted code review pipelines",
        ],
      },
      {
        title: "Backend & Data",
        status: "proficient",
        tags: ["supabase", "postgres", "api"],
        summary:
          "Supabase, PostgreSQL, REST/GraphQL APIs, and database migrations.",
        details: [
          "Supabase Auth + RLS policies",
          "Database schema design",
          "Edge functions & serverless",
          "CI/CD migration pipelines",
        ],
      },
      {
        title: "DevOps & Infrastructure",
        status: "proficient",
        tags: ["github-actions", "vercel", "docker"],
        summary:
          "Automated deployment pipelines, containerization, and cloud infrastructure.",
        details: [
          "GitHub Actions workflows",
          "Vercel deployments",
          "Docker containerization",
          "Environment management",
        ],
      },
    ],
  },
  architecture: {
    label: "Architecture",
    icon: "⬡",
    color: "#FCA5A5",
    description: "System design decisions and technical patterns",
    items: [
      {
        title: "Portfolio Platform",
        status: "shipped",
        tags: ["next.js", "supabase", "vercel"],
        summary:
          "Monorepo architecture with Next.js App Router, Supabase backend, and Vercel deployment.",
        details: [
          "Monorepo with pnpm workspaces",
          "Next.js 14 App Router",
          "Supabase for auth & data",
          "Edge-first deployment on Vercel",
        ],
      },
      {
        title: "AI Context System",
        status: "in-progress",
        tags: ["rag", "embeddings", "context"],
        summary:
          "Structured context files (plans, skills, docs) consumed by AI agents for project-aware assistance.",
        details: [
          "Markdown-based context files",
          "Hierarchical knowledge structure",
          "Agent-readable schemas",
          "Version-controlled via Git",
        ],
      },
      {
        title: "Component Design System",
        status: "planned",
        tags: ["design-tokens", "storybook"],
        summary:
          "Unified design token system and component library shared across projects.",
        details: [
          "Design tokens with CSS variables",
          "Storybook documentation",
          "Accessibility-first approach",
          "Multi-theme support",
        ],
      },
    ],
  },
  docs: {
    label: "Docs & Specs",
    icon: "⊡",
    color: "#FDE68A",
    description: "Technical documentation and project specifications",
    items: [
      {
        title: "Supabase Migration Spec",
        status: "complete",
        tags: ["database", "ci-cd"],
        summary:
          "Full specification for automated Supabase schema migrations via GitHub Actions.",
        details: [
          "Migration file conventions",
          "Staging vs production flows",
          "Rollback procedures",
          "Secret management",
        ],
      },
      {
        title: "API Design Guidelines",
        status: "active",
        tags: ["api", "rest", "conventions"],
        summary:
          "Conventions for building consistent, well-documented REST APIs across all projects.",
        details: [
          "Naming conventions",
          "Error response schemas",
          "Versioning strategy",
          "Auth patterns",
        ],
      },
      {
        title: "AI Prompting Patterns",
        status: "in-progress",
        tags: ["ai", "prompting", "patterns"],
        summary:
          "Documented patterns for effective AI-assisted development across different contexts.",
        details: [
          "Context file formats",
          "Task decomposition prompts",
          "Code review prompts",
          "Debugging prompts",
        ],
      },
    ],
  },
  goals: {
    label: "Goals & Decisions",
    icon: "◉",
    color: "#C4B5FD",
    description: "Key decisions made and goals being tracked",
    items: [
      {
        title: "Bet on AI-native workflows",
        status: "decided",
        tags: ["strategy", "ai"],
        summary:
          "Decision: Build everything with AI-assistance as a first-class citizen, not an afterthought.",
        details: [
          "Use AI agents for code, docs, and planning",
          "Document AI workflow publicly",
          "Build tools that showcase this approach",
          "Differentiate by shipping faster with AI",
        ],
      },
      {
        title: "Ship > Perfect",
        status: "active",
        tags: ["principle", "execution"],
        summary:
          "Goal: Bias toward shipping and iterating rather than perfecting in isolation.",
        details: [
          "Weekly deployment cadence",
          "Public build logs",
          "Fast feedback loops",
          "Version everything",
        ],
      },
      {
        title: "Open Source One Tool Per Quarter",
        status: "planned",
        tags: ["oss", "community"],
        summary:
          "Goal: Give back to the community by open sourcing at least one useful tool per quarter.",
        details: [
          "Q1: AI context system template",
          "Q2: Supabase migration starter",
          "Package and document properly",
          "Write accompanying blog post",
        ],
      },
    ],
  },
};

const statusConfig = {
  active: { label: "Active", dot: "#6EE7B7" },
  "in-progress": { label: "In Progress", dot: "#FDE68A" },
  planned: { label: "Planned", dot: "#93C5FD" },
  expert: { label: "Expert", dot: "#6EE7B7" },
  proficient: { label: "Proficient", dot: "#FCA5A5" },
  shipped: { label: "Shipped", dot: "#6EE7B7" },
  complete: { label: "Complete", dot: "#6EE7B7" },
  decided: { label: "Decided", dot: "#C4B5FD" },
};

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function AIWorkflowSection() {
  const [activeSection, setActiveSection] = useState("plans");
  const [activeItem, setActiveItem] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const section = sections[activeSection];
  const item = section.items[activeItem];
  const status = statusConfig[item.status] || { label: item.status, dot: "#888" };

  return (
    <section
      style={{
        fontFamily: "'Berkeley Mono', 'JetBrains Mono', 'Fira Code', monospace",
        background: "#0A0A0B",
        color: "#E2E8F0",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ── Top bar ── */}
      <div
        style={{
          borderBottom: "1px solid #1E1E2E",
          padding: "12px 20px",
          display: "flex",
          alignItems: "center",
          gap: 12,
          background: "#0D0D14",
        }}
      >
        <button
          onClick={() => setSidebarOpen((v) => !v)}
          style={{
            background: "none",
            border: "none",
            color: "#555",
            cursor: "pointer",
            fontSize: 16,
            padding: "2px 6px",
            borderRadius: 4,
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#aaa")}
          onMouseLeave={(e) => (e.target.style.color = "#555")}
        >
          ☰
        </button>
        <span style={{ fontSize: 11, color: "#333", letterSpacing: "0.15em" }}>
          ◈ CONTEXT /
        </span>
        <span style={{ fontSize: 11, color: "#666", letterSpacing: "0.1em" }}>
          {section.label.toLowerCase()} / {item.title}
        </span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          {Object.entries(sections).map(([key, s]) => (
            <button
              key={key}
              onClick={() => {
                setActiveSection(key);
                setActiveItem(0);
              }}
              style={{
                background: activeSection === key ? "#1A1A2E" : "none",
                border: `1px solid ${activeSection === key ? s.color + "44" : "transparent"}`,
                color: activeSection === key ? s.color : "#444",
                cursor: "pointer",
                fontSize: 10,
                padding: "4px 10px",
                borderRadius: 4,
                letterSpacing: "0.12em",
                transition: "all 0.2s",
              }}
            >
              {s.icon} {s.label.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* ── Body ── */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {/* ── Left sidebar ── */}
        {sidebarOpen && (
          <div
            style={{
              width: 220,
              borderRight: "1px solid #1E1E2E",
              background: "#0D0D14",
              overflowY: "auto",
              flexShrink: 0,
            }}
          >
            {/* Section header */}
            <div
              style={{
                padding: "14px 16px 8px",
                fontSize: 10,
                color: section.color,
                letterSpacing: "0.18em",
                borderBottom: "1px solid #1A1A2E",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span>{section.icon}</span>
              {section.label.toUpperCase()}
            </div>
            {/* Items list */}
            {section.items.map((it, i) => {
              const st = statusConfig[it.status] || { dot: "#555" };
              return (
                <div
                  key={i}
                  onClick={() => setActiveItem(i)}
                  style={{
                    padding: "10px 16px",
                    cursor: "pointer",
                    background:
                      activeItem === i ? "#14142A" : "transparent",
                    borderLeft: `2px solid ${activeItem === i ? section.color : "transparent"}`,
                    transition: "all 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    if (activeItem !== i)
                      e.currentTarget.style.background = "#111120";
                  }}
                  onMouseLeave={(e) => {
                    if (activeItem !== i)
                      e.currentTarget.style.background = "transparent";
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      color: activeItem === i ? "#E2E8F0" : "#888",
                      marginBottom: 4,
                      lineHeight: 1.3,
                    }}
                  >
                    {it.title}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <span
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: st.dot,
                        display: "inline-block",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: 9,
                        color: "#444",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {it.status.toUpperCase()}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* All sections mini-nav */}
            <div
              style={{
                marginTop: 20,
                borderTop: "1px solid #1A1A2E",
                padding: "12px 0",
              }}
            >
              <div
                style={{
                  padding: "4px 16px 8px",
                  fontSize: 9,
                  color: "#333",
                  letterSpacing: "0.18em",
                }}
              >
                SECTIONS
              </div>
              {Object.entries(sections).map(([key, s]) => (
                <div
                  key={key}
                  onClick={() => {
                    setActiveSection(key);
                    setActiveItem(0);
                  }}
                  style={{
                    padding: "7px 16px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    color: activeSection === key ? s.color : "#444",
                    fontSize: 11,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color =
                      activeSection === key ? s.color : "#888";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color =
                      activeSection === key ? s.color : "#444";
                  }}
                >
                  <span style={{ fontSize: 13 }}>{s.icon}</span>
                  {s.label}
                  <span
                    style={{
                      marginLeft: "auto",
                      fontSize: 9,
                      color: "#333",
                    }}
                  >
                    {s.items.length}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Main content ── */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "32px 40px",
            maxWidth: 800,
          }}
        >
          {/* Item header */}
          <div style={{ marginBottom: 28 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 12,
              }}
            >
              <span
                style={{
                  fontSize: 20,
                  color: section.color,
                }}
              >
                {section.icon}
              </span>
              <h2
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  margin: 0,
                  color: "#F0F0F8",
                  letterSpacing: "-0.02em",
                }}
              >
                {item.title}
              </h2>
              <div
                style={{
                  marginLeft: "auto",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  background: "#14142A",
                  border: `1px solid ${status.dot}33`,
                  padding: "4px 10px",
                  borderRadius: 4,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: status.dot,
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    fontSize: 9,
                    color: status.dot,
                    letterSpacing: "0.15em",
                  }}
                >
                  {status.label.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Tags */}
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: 10,
                    color: "#555",
                    background: "#111118",
                    border: "1px solid #222",
                    padding: "2px 8px",
                    borderRadius: 3,
                    letterSpacing: "0.08em",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Summary card */}
          <div
            style={{
              background: "#0F0F1C",
              border: `1px solid ${section.color}22`,
              borderLeft: `3px solid ${section.color}`,
              borderRadius: 6,
              padding: "16px 20px",
              marginBottom: 28,
            }}
          >
            <div
              style={{
                fontSize: 10,
                color: section.color + "88",
                letterSpacing: "0.15em",
                marginBottom: 8,
              }}
            >
              SUMMARY
            </div>
            <p
              style={{
                fontSize: 14,
                color: "#A0AABF",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {item.summary}
            </p>
          </div>

          {/* Details */}
          <div>
            <div
              style={{
                fontSize: 10,
                color: "#333",
                letterSpacing: "0.18em",
                marginBottom: 14,
              }}
            >
              DETAILS
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {item.details.map((detail, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    padding: "12px 16px",
                    background: "#0D0D14",
                    border: "1px solid #1A1A28",
                    borderRadius: 5,
                    fontSize: 13,
                    color: "#8892A4",
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      color: section.color + "66",
                      fontSize: 10,
                      marginTop: 2,
                      flexShrink: 0,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {detail}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right mini-panel: section overview ── */}
        <div
          style={{
            width: 200,
            borderLeft: "1px solid #1E1E2E",
            background: "#0D0D14",
            padding: "20px 16px",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              fontSize: 9,
              color: "#333",
              letterSpacing: "0.18em",
              marginBottom: 14,
            }}
          >
            SECTION OVERVIEW
          </div>
          <div
            style={{
              fontSize: 11,
              color: section.color,
              marginBottom: 6,
            }}
          >
            {section.icon} {section.label}
          </div>
          <div
            style={{
              fontSize: 11,
              color: "#444",
              lineHeight: 1.6,
              marginBottom: 20,
            }}
          >
            {section.description}
          </div>

          {/* Status breakdown */}
          <div
            style={{
              fontSize: 9,
              color: "#333",
              letterSpacing: "0.15em",
              marginBottom: 10,
            }}
          >
            STATUS BREAKDOWN
          </div>
          {section.items.map((it, i) => {
            const st = statusConfig[it.status] || { dot: "#555", label: it.status };
            return (
              <div
                key={i}
                onClick={() => setActiveItem(i)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  marginBottom: 7,
                  cursor: "pointer",
                  opacity: activeItem === i ? 1 : 0.5,
                  transition: "opacity 0.2s",
                }}
              >
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: st.dot,
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: 10, color: "#666" }}>{it.title}</span>
              </div>
            );
          })}

          {/* Global counts */}
          <div
            style={{
              marginTop: 24,
              paddingTop: 16,
              borderTop: "1px solid #1A1A2E",
            }}
          >
            <div
              style={{
                fontSize: 9,
                color: "#333",
                letterSpacing: "0.15em",
                marginBottom: 10,
              }}
            >
              ALL CONTEXT
            </div>
            {Object.entries(sections).map(([key, s]) => (
              <div
                key={key}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 6,
                  fontSize: 10,
                  color: activeSection === key ? s.color : "#333",
                }}
              >
                <span>
                  {s.icon} {s.label}
                </span>
                <span>{s.items.length}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
