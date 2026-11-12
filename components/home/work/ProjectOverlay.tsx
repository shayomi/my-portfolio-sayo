/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiArrowUpRight, FiGithub, FiX } from "react-icons/fi";
import { EASE, LAYOUT_TRANSITION } from "../ui/motion";
import type { Project } from "./types";

interface ProjectOverlayProps {
  project: Project;
  next: Project;
  onClose: () => void;
  onNext: () => void;
}

const contentIn = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE, delay } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
});

const SECTIONS = [
  { key: "problem", label: "The problem" },
  { key: "approach", label: "The approach" },
  { key: "result", label: "The result" },
] as const;

export default function ProjectOverlay({ project, next, onClose, onNext }: ProjectOverlayProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  // Escape to close; move focus in, then back to whatever opened it.
  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    closeRef.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      opener?.focus?.({ preventScroll: true });
    };
  }, [onClose]);

  return (
    <>
      <motion.div
        aria-hidden
        className="fixed inset-0 z-[55] bg-ink/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      />

      <motion.div
        layoutId={`card-${project.slug}`}
        transition={LAYOUT_TRANSITION}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.name} case study`}
        className="fixed inset-0 z-[60] overflow-y-auto overscroll-contain bg-ink text-bone"
        style={{ borderRadius: 0 }}
      >
        {/* Cover */}
        <header className="relative h-[78svh] min-h-[480px] w-full overflow-hidden">
          <motion.div layoutId={`img-${project.slug}`} transition={LAYOUT_TRANSITION} className="absolute inset-0 overflow-hidden">
            <motion.img layout transition={LAYOUT_TRANSITION} src={project.image} alt="" className="h-full w-full object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/10" />
          <motion.div {...contentIn(0.45)} className="absolute inset-x-0 bottom-0 px-5 pb-8 md:px-12 md:pb-12">
            <p className="mb-3 font-sans text-xs uppercase tracking-[0.3em] text-bone/70">
              {project.category} — {project.year}
            </p>
            <h2 className="font-display text-[19vw] uppercase leading-[0.82] md:text-[12vw]">{project.name}</h2>
          </motion.div>
        </header>

        {/* Body */}
        <motion.div {...contentIn(0.6)} className="px-5 pb-10 md:px-12">
          <div className="flex flex-col gap-6 border-b border-bone/15 py-8 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-3">
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="Visit"
                  className="flex items-center gap-2 rounded-full bg-ember px-6 py-3 font-sans text-sm font-semibold uppercase tracking-[0.15em] text-ink transition-transform hover:scale-105"
                >
                  Visit live site <FiArrowUpRight />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-bone/30 px-6 py-3 font-sans text-sm uppercase tracking-[0.15em] transition-colors hover:bg-bone hover:text-ink"
                >
                  <FiGithub /> Code
                </a>
              )}
            </div>
            <ul className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <li key={tech} className="rounded-full border border-bone/20 px-4 py-1.5 font-sans text-xs uppercase tracking-[0.15em] text-bone/80">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {SECTIONS.map((section, i) => (
            <section key={section.key} className="grid gap-6 border-b border-bone/15 py-14 md:grid-cols-12 md:py-20">
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-bone/50 md:col-span-3">
                <span className="mr-3 font-serif text-base normal-case italic tracking-normal text-ember">
                  (0{i + 1})
                </span>
                {section.label}
              </p>
              <p
                className={`font-sans leading-snug tracking-tight md:col-span-9 ${
                  section.key === "approach" ? "text-xl text-bone/85 md:text-2xl" : "text-2xl md:text-4xl"
                }`}
              >
                {project[section.key]}
              </p>
            </section>
          ))}

          {/* Next project */}
          <button
            type="button"
            onClick={onNext}
            data-cursor="Next"
            className="group mt-10 flex w-full items-center justify-between gap-6 overflow-hidden rounded-[28px] bg-coal p-4 text-left md:p-6"
          >
            <div className="flex items-center gap-5">
              <img src={next.image} alt="" className="h-20 w-28 rounded-2xl object-cover md:h-28 md:w-44" />
              <div>
                <p className="font-sans text-xs uppercase tracking-[0.3em] text-bone/50">Next project</p>
                <p className="font-display text-4xl uppercase md:text-7xl">{next.name}</p>
              </div>
            </div>
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-ember text-2xl text-ink transition-transform duration-500 group-hover:translate-x-2 md:h-20 md:w-20">
              <FiArrowRight />
            </span>
          </button>
        </motion.div>
      </motion.div>

      <motion.button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close case study"
        data-cursor="Close"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1, transition: { delay: 0.5, type: "spring", stiffness: 300, damping: 22 } }}
        exit={{ opacity: 0, scale: 0.6, transition: { duration: 0.15 } }}
        className="fixed right-4 top-4 z-[70] flex items-center gap-2 rounded-full bg-bone px-5 py-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-ink shadow-2xl md:right-8 md:top-8"
      >
        Close <FiX className="text-base" />
      </motion.button>
    </>
  );
}
