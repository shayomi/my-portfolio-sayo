import type { Metadata, Viewport } from "next";

import "./globals.scss";
import { kodchasan } from "./font";

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
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
    <html lang="en" className="bg-black w-full mx-auto">
      <body className={kodchasan.className}>
        <div className="w-full  bg-black mx-auto overflow-hidden">
          {/* <Header /> */}

          <main className="mx-auto w-full">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
