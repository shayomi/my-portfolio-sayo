/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EASE, INTRO_DELAY } from "../ui/motion";
import HeroWords from "./HeroWords";
import EmberStar from "./EmberStar";
import ScrollBadge from "./ScrollBadge";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: EASE, delay: INTRO_DELAY + delay },
});

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const wordsY = useTransform(scrollYProgress, [0, 1], ["0%", "-45%"]);
  const portraitY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const starRotate = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const starScale = useTransform(scrollYProgress, [0, 1], [1, 1.35]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-[100svh] min-h-[640px] overflow-hidden bg-cream text-ink"
    >
      {/* Checker texture */}
      <div aria-hidden className="absolute right-[5%] top-[12%] hidden grid-cols-4 md:grid">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className={`h-[4.5vw] w-[4.5vw] ${(i + Math.floor(i / 4)) % 2 ? "bg-ink/[0.05]" : ""}`}
          />
        ))}
      </div>

      {/* Back words */}
      <motion.div style={{ y: wordsY }} className="absolute inset-x-0 top-[30%] z-0 md:top-[25%]">
        <HeroWords />
      </motion.div>

      {/* Ember star */}
      <div className="absolute left-1/2 top-[50%] z-[5] w-[70vw] -translate-x-[85%] md:top-[38%] md:w-[24vw]">
        <motion.div
          style={{ rotate: starRotate, scale: starScale }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: EASE, delay: INTRO_DELAY + 0.2 }}
        >
          <EmberStar className="h-full w-full" />
        </motion.div>
      </div>

      {/* Portrait */}
      <div className="absolute bottom-0 left-1/2 z-10 h-[62svh] -translate-x-1/2 md:h-[84svh]">
        <motion.div style={{ y: portraitY }} className="h-full">
          <motion.img
            src="/images/sayo.png"
            alt="Portrait of Sayo Adegoroye"
            className="h-full w-auto max-w-none object-contain object-bottom grayscale contrast-[1.05]"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, ease: EASE, delay: INTRO_DELAY + 0.1 }}
          />
        </motion.div>
      </div>

      {/* Front outlined words */}
      <motion.div
        style={{ y: wordsY }}
        className="pointer-events-none absolute inset-x-0 top-[30%] z-20 md:top-[25%]"
      >
        <HeroWords outline />
      </motion.div>

      {/* Top-left intro */}
      <div className="absolute left-5 top-20 z-30 flex flex-col items-start gap-3 md:left-10 md:top-24">
        <motion.span
          {...fadeUp(0.4)}
          className="flex items-center gap-2 rounded-full border border-ink/15 bg-bone/70 px-3 py-1.5 font-sans text-[11px] uppercase tracking-[0.2em] backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
          </span>
          Available for new builds
        </motion.span>
        <motion.p {...fadeUp(0.5)} className="font-serif text-3xl italic md:text-5xl">
          Hey, I&apos;m Sayo —
        </motion.p>
      </div>

      {/* Top-right roles */}
      <motion.ul
        {...fadeUp(0.6)}
        className="absolute right-10 top-24 z-30 hidden text-right font-sans text-xs uppercase leading-6 tracking-[0.2em] text-ink/70 md:block"
      >
        <li>Founding Engineer &amp; CTO — Toviri</li>
        <li>Full-stack Next.js</li>
        <li>Agentic AI systems</li>
      </motion.ul>

      {/* Bottom row */}
      <div className="absolute inset-x-0 bottom-0 z-30 flex items-end justify-between px-5 pb-6 md:px-10 md:pb-10">
        <motion.p
          {...fadeUp(0.7)}
          className="hidden max-w-xs font-sans text-sm leading-relaxed text-ink/80 md:block"
        >
          Five years shipping AI-native platforms. I design, build, test and automate
          products end to end — from first prototype to production.
        </motion.p>
        <motion.div {...fadeUp(0.8)} className="ml-auto">
          <ScrollBadge />
        </motion.div>
      </div>
    </section>
  );
}
