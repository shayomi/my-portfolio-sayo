import type { Metadata, Viewport } from "next";

import "./globals.scss";
import { kodchasan, display, serif, sans } from "./font";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://adegoroyesayo.vercel.app/"),
  title: {
    default: "Sayo Adegoroye | Full-Stack AI Engineer",
    template: "%s | Sayo Adegoroye",
  },
  description:
    "Full-stack Next.js engineer building AI-native products with agent workflows, OpenCode, Claude Code, OpenClaw, Playwright testing, Sentry observability, and Supabase.",
  keywords: [
    "Sayo Adegoroye",
    "Full-stack Next.js engineer",
    "AI workflow",
    "AI agents",
    "Subagents",
    "OpenCode",
    "Claude Code",
    "OpenClaw",
    "Playwright testing",
    "Supabase",
    "Sentry",
    "Automation engineering",
    "Open source packages",
  ],
  authors: [{ name: "Adegoroye Sayo" }],
  openGraph: {
    title: "Sayo Adegoroye | Full-Stack AI Engineer",
    description:
      "I build modern, AI-native platforms with Next.js, agent orchestration, browser automation, and production-grade data and observability stacks.",
    type: "website",
    // @ts-ignore
    local: "en_US",
    siteName: "Adegoroye Sayo",
  },

  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`bg-ink w-full mx-auto ${display.variable} ${serif.variable} ${sans.variable}`}
    >
      <body className={kodchasan.className}>{children}</body>
    </html>
  );
}
