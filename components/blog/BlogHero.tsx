"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import EmberStar from "../home/hero/EmberStar";
import RevealText from "../home/ui/RevealText";
import SectionLabel from "../home/ui/SectionLabel";
import { EASE } from "../home/ui/motion";
import { blogListData } from "./BlogData";
import { pad } from "./types";

export default function BlogHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative overflow-hidden bg-cream px-5 pb-16 pt-36 text-ink md:px-10 md:pb-24 md:pt-44"
    >
      <motion.div
        style={{ rotate, y }}
        className="pointer-events-none absolute -right-[18vw] top-[8%] w-[60vw] opacity-90 md:-right-[6vw] md:w-[30vw]"
      >
        <EmberStar className="h-full w-full animate-spin-slow" />
      </motion.div>

      <SectionLabel index="01" label="Writing" className="relative mb-8 text-ink/60" />
      <h1 className="relative font-display uppercase leading-[0.82] text-[24vw] md:text-[16vw]">
        <RevealText text="Field" />
        <br />
        <RevealText text="Notes" className="text-outline-ink" delay={0.1} />
        <span className="ml-[0.1em] align-top font-serif text-[0.35em] normal-case italic text-ember">
          ({pad(blogListData.length)})
        </span>
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.9, ease: EASE }}
        className="relative mt-12 flex flex-col gap-6 border-t border-ink/15 pt-8 md:flex-row md:items-end md:justify-between"
      >
        <p className="max-w-xl font-sans text-lg leading-snug md:text-2xl">
          Notes from the build: AI workflows, agent systems, and shipping products that hold up in
          production.
        </p>
        <p className="font-sans text-xs uppercase tracking-[0.3em] text-ink/60">
          Tap a note — it opens right here.
        </p>
      </motion.div>
    </section>
  );
}
