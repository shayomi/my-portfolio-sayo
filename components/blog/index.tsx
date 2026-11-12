"use client";

import { MotionConfig } from "framer-motion";
import Nav from "../home/nav";
import Contact from "../home/contact";
import Cursor from "../home/ui/Cursor";
import ScrollProgress from "../home/ui/ScrollProgress";
import BlogHero from "./BlogHero";
import PostGrid from "./PostGrid";

/** Writing page: same chrome as home, posts zoom open into a reader. */
export default function BlogPage() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-ink font-sans antialiased selection:bg-ember selection:text-ink">
        <ScrollProgress />
        <Nav delay={0.15} current="/blog" />
        <main>
          <BlogHero />
          <PostGrid />
        </main>
        <Contact index="02" />
        <Cursor />
      </div>
    </MotionConfig>
  );
}
