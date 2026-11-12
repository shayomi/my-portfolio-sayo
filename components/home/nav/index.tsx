"use client";

import { motion } from "framer-motion";
import { EASE, INTRO_DELAY } from "../ui/motion";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Experience", href: "#experience" },
  { label: "Writing", href: "/blog" },
];

/** Fixed nav built from dark glass pills so it reads over cream, ink and ember. */
export default function Nav() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: INTRO_DELAY + 0.3, duration: 0.8, ease: EASE }}
      className="fixed inset-x-0 top-0 z-50 text-bone"
    >
      <nav className="flex items-center justify-between px-5 py-5 md:px-10" aria-label="Main">
        <a href="#top" className="rounded-full bg-ink/80 px-4 py-1.5 font-display text-2xl tracking-wide backdrop-blur-md">
          SAYO<span className="font-serif italic">.</span>
        </a>
        <ul className="hidden items-center gap-8 rounded-full bg-ink/70 px-7 py-3 font-sans text-xs uppercase tracking-[0.25em] backdrop-blur-md md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="group relative py-1">
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-ink px-5 py-3 font-sans text-xs uppercase tracking-[0.25em] transition-colors hover:bg-bone hover:text-ink"
        >
          Let&apos;s talk
        </a>
      </nav>
    </motion.header>
  );
}
