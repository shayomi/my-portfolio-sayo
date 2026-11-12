"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { projects } from "@/lib/projectData";
import RevealText from "../ui/RevealText";
import SectionLabel from "../ui/SectionLabel";
import ProjectCard from "./ProjectCard";
import ProjectOverlay from "./ProjectOverlay";
import { CARD_LAYOUT, DEFAULT_CARD_LAYOUT } from "./types";
import { useProjectRoute } from "./use-project-route";
import { useScrollLock } from "./use-scroll-lock";

export default function Work() {
  const slugs = useMemo(() => projects.map((p) => p.slug), []);
  const { active, open, close } = useProjectRoute(slugs);
  // The last-opened card stays raised while it animates back into the grid.
  const [raised, setRaised] = useState<string | null>(null);
  const nextTimer = useRef<ReturnType<typeof setTimeout>>();

  useScrollLock(active !== null);
  useEffect(() => {
    if (active) setRaised(active);
  }, [active]);
  useEffect(() => () => clearTimeout(nextTimer.current), []);

  const index = projects.findIndex((p) => p.slug === active);
  const project = index >= 0 ? projects[index] : null;
  const next = projects[(index + 1) % projects.length];

  const goNext = () => {
    close();
    nextTimer.current = setTimeout(() => open(next.slug), 800);
  };

  return (
    <section id="work" className="relative bg-ink px-5 pb-28 text-bone md:px-10 md:pb-40">
      <div className="mb-14 flex flex-col gap-10 md:mb-20 md:flex-row md:items-end md:justify-between">
        <div>
          <SectionLabel index="02" label="Selected work" className="mb-8 text-bone/60" />
          <h2 className="font-display uppercase leading-[0.84] text-[20vw] md:text-[13vw]">
            <RevealText text="Selected" />
            <br />
            <RevealText text="Works" className="text-outline-bone" delay={0.1} />
          </h2>
        </div>
        <div className="flex flex-col items-start gap-4 md:items-end md:text-right">
          <span className="font-serif text-7xl italic text-ember md:text-9xl">
            ({String(projects.length).padStart(2, "0")})
          </span>
          <p className="max-w-xs font-sans text-sm text-bone/60">
            Production case studies. Open any project — it zooms into the full story, and
            folds right back when you&apos;re done.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {projects.map((p, i) => (
          <ProjectCard
            key={p.slug}
            project={p}
            index={i}
            featured={i === 0}
            raised={raised === p.slug}
            className={CARD_LAYOUT[i] ?? DEFAULT_CARD_LAYOUT}
            onOpen={open}
          />
        ))}
      </div>

      <AnimatePresence>
        {project && (
          <ProjectOverlay key={project.slug} project={project} next={next} onClose={close} onNext={goNext} />
        )}
      </AnimatePresence>
    </section>
  );
}
