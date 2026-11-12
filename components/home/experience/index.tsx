"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/siteData";
import RevealText from "../ui/RevealText";
import SectionLabel from "../ui/SectionLabel";
import { EASE } from "../ui/motion";

export default function Experience() {
  return (
    <section id="experience" className="bg-ink px-5 py-28 text-bone md:px-10 md:py-40">
      <SectionLabel index="04" label="Experience" className="mb-8 text-bone/60" />
      <h2 className="mb-16 font-display uppercase leading-[0.86] text-[16vw] md:mb-24 md:text-[10vw]">
        <RevealText text="Where I've" />
        <br />
        <RevealText text="built" delay={0.1} />{" "}
        <span className="font-serif normal-case italic text-ember">
          <RevealText text="lately" delay={0.2} />
        </span>
      </h2>

      <ul className="border-t border-bone/15">
        {experience.map((job, i) => (
          <motion.li
            key={`${job.company}-${job.role}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5% 0px" }}
            transition={{ duration: 0.8, ease: EASE, delay: i * 0.05 }}
            className="group relative overflow-hidden border-b border-bone/15"
          >
            <span className="absolute inset-0 origin-bottom scale-y-0 bg-ember transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" />
            <div className="relative grid gap-3 py-8 transition-colors duration-500 group-hover:text-ink md:grid-cols-12 md:items-center md:gap-6 md:px-4 md:py-10">
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-bone/50 transition-colors group-hover:text-ink/70 md:col-span-2">
                {job.period}
              </span>
              <div className="md:col-span-5">
                <p className="font-display text-4xl uppercase leading-none md:text-5xl">{job.company}</p>
                <p className="mt-1 font-serif text-xl italic">{job.role}</p>
              </div>
              <p className="font-sans text-sm leading-relaxed text-bone/70 transition-colors group-hover:text-ink/80 md:col-span-5 md:text-base">
                {job.summary}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
