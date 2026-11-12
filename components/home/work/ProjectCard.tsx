/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { EASE, LAYOUT_TRANSITION } from "../ui/motion";
import type { Project } from "./types";

interface ProjectCardProps {
  project: Project;
  index: number;
  featured: boolean;
  raised: boolean;
  className: string;
  onOpen: (slug: string) => void;
}

export default function ProjectCard({ project, index, featured, raised, className, onOpen }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1, ease: EASE, delay: (index % 2) * 0.12 }}
      className={`relative col-span-12 ${raised ? "z-40" : "z-0"} ${className}`}
    >
      <motion.button
        type="button"
        layoutId={`card-${project.slug}`}
        transition={LAYOUT_TRANSITION}
        onClick={() => onOpen(project.slug)}
        data-cursor="Open"
        aria-label={`Open ${project.name} case study`}
        initial="rest"
        animate="rest"
        whileHover="hover"
        className="group relative block h-full w-full overflow-hidden bg-coal text-left text-bone outline-none focus-visible:ring-4 focus-visible:ring-ember"
        style={{ borderRadius: 28 }}
      >
        <motion.div layoutId={`img-${project.slug}`} transition={LAYOUT_TRANSITION} className="absolute inset-0 overflow-hidden">
          <motion.img
            layout
            transition={LAYOUT_TRANSITION}
            variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
            src={project.image}
            alt=""
            className="h-full w-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />

        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 md:p-7">
          <span className="rounded-full bg-bone/10 px-3 py-1 font-sans text-xs uppercase tracking-[0.2em] backdrop-blur-md">
            {featured ? "Featured — now building" : String(index + 1).padStart(2, "0")}
          </span>
          <span className="rounded-full bg-bone/10 px-3 py-1 font-sans text-xs tracking-[0.2em] backdrop-blur-md">
            {project.year}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-5 md:p-8">
          <div>
            <p className="mb-2 font-sans text-xs uppercase tracking-[0.25em] text-bone/70">{project.category}</p>
            <h3 className={`font-display uppercase leading-[0.9] ${featured ? "text-6xl md:text-[9vw]" : "text-5xl md:text-6xl"}`}>
              {project.name}
            </h3>
          </div>
          <motion.span
            variants={{ rest: { rotate: 0, scale: 1 }, hover: { rotate: 45, scale: 1.1 } }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-bone text-2xl text-ink md:h-16 md:w-16"
          >
            <FiArrowUpRight />
          </motion.span>
        </div>
      </motion.button>
    </motion.article>
  );
}
