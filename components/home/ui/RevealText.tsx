"use client";

import { motion } from "framer-motion";
import { EASE } from "./motion";

interface RevealTextProps {
  text: string;
  delay?: number;
  className?: string;
}

/**
 * Splits text into words that slide up from a mask when scrolled into view.
 * The in-view trigger sits on the wrapper: the words themselves start fully
 * clipped, so observing them directly would never fire.
 */
export default function RevealText({ text, delay = 0, className = "" }: RevealTextProps) {
  const words = text.split(" ");
  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-5% 0px" }}
      transition={{ staggerChildren: 0.05, delayChildren: delay }}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.06em] align-bottom">
          <motion.span
            className="inline-block"
            variants={{ hidden: { y: "110%" }, show: { y: "0%" } }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
