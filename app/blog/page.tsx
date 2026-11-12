import type { Metadata } from "next";
import BlogPage from "@/components/blog";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes on AI workflows, agent systems, and shipping production software.",
};

export default function Page() {
  return <BlogPage />;
}
