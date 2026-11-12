"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, animate, motion, useMotionValue, useTransform } from "framer-motion";
import { EASE_IN_OUT, INTRO_DURATION } from "../ui/motion";

/** Counter curtain that lifts to reveal the hero on load. */
export default function Intro() {
  const [done, setDone] = useState(false);
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => Math.round(v).toString().padStart(3, "0"));

  useEffect(() => {
    const controls = animate(count, 100, {
      duration: INTRO_DURATION,
      ease: [0.65, 0, 0.35, 1],
      onComplete: () => setDone(true),
    });
    return () => controls.stop();
  }, [count]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="intro"
          aria-hidden
          className="fixed inset-0 z-[90] flex flex-col justify-between bg-ink p-5 text-bone md:p-10"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: EASE_IN_OUT }}
        >
          <div className="flex justify-between font-sans text-xs uppercase tracking-[0.3em] text-bone/60">
            <span>Sayo Adegoroye</span>
            <span>Portfolio ©2026</span>
          </div>
          <div className="flex items-end justify-between gap-6">
            <p className="max-w-sm font-serif text-2xl italic md:text-4xl">
              AI product engineer, loading the good stuff.
            </p>
            <motion.span className="font-display text-[28vw] leading-[0.8] md:text-[18vw]">
              {display}
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
