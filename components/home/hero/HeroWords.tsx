"use client";

import { motion } from "framer-motion";
import { EASE, INTRO_DELAY } from "../ui/motion";

const LINES = ["AI Product", "Engineer"];

/**
 * The hero headline. Rendered twice with identical geometry: a solid layer
 * behind the portrait and an outlined layer in front of it, so the words
 * appear to wrap around the photo.
 */
export default function HeroWords({ outline = false }: { outline?: boolean }) {
  const className = `select-none text-center font-display uppercase leading-[0.84] tracking-tight text-[19vw] md:text-[14vw] ${
    outline ? "text-outline-bone" : "text-ink"
  }`;

  const lines = LINES.map((line, i) => (
    <span key={line} className="block overflow-hidden pt-[0.04em]">
      <motion.span
        className="block"
        initial={{ y: "105%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.1, ease: EASE, delay: INTRO_DELAY + i * 0.12 }}
      >
        {line}
      </motion.span>
    </span>
  ));

  if (outline) {
    return (
      <div aria-hidden className={className}>
        {lines}
      </div>
    );
  }
  return (
    <h1 className={className}>
      <span className="sr-only">Sayo Adegoroye, </span>
      {lines}
    </h1>
  );
}
