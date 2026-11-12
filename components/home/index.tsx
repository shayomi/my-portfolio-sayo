"use client";

import { MotionConfig } from "framer-motion";
import Intro from "./intro";
import Nav from "./nav";
import Hero from "./hero";
import StackMarquee from "./stack-marquee";
import About from "./about";
import Work from "./work";
import Capabilities from "./capabilities";
import Experience from "./experience";
import Testimonials from "./testimonials";
import Contact from "./contact";
import Cursor from "./ui/Cursor";
import ScrollProgress from "./ui/ScrollProgress";

export default function HomePage() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-ink font-sans antialiased selection:bg-ember selection:text-ink">
        <Intro />
        <ScrollProgress />
        <Nav />
        <main>
          <Hero />
          <About />
          <StackMarquee />
          <Work />
          <Capabilities />
          <Experience />
          <Testimonials />
        </main>
        <Contact />
        <Cursor />
      </div>
    </MotionConfig>
  );
}
