"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/siteData";
import SectionLabel from "../ui/SectionLabel";
import { EASE } from "../ui/motion";
import ScrollHighlight from "./ScrollHighlight";
import Counter from "./Counter";

const STATEMENT =
  "I'm a founding engineer who turns rough ideas into shipped, tested, AI-native products. I architect the system, build the interface, wire up the agents, and own the details that keep teams moving fast without breaking what already works.";

export default function About() {
  return (
    <section id="about" className="relative bg-ink px-5 py-28 text-bone md:px-10 md:py-40">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-3">
          <SectionLabel index="01" label="About" className="text-bone/60" />
        </div>
        <ScrollHighlight
          text={STATEMENT}
          className="font-sans text-3xl font-medium leading-[1.15] tracking-tight md:col-span-9 md:text-[3.6vw]"
        />
      </div>

      <div className="mt-24 grid grid-cols-2 border-t border-bone/15 md:mt-36 md:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, ease: EASE, delay: i * 0.08 }}
            className={`flex flex-col gap-3 border-bone/15 py-8 pr-4 md:py-10 ${i % 2 ? "border-l pl-4" : ""} ${i > 0 ? "md:border-l md:pl-8" : ""}`}
          >
            <span className="font-display text-6xl text-ember md:text-8xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </span>
            <span className="max-w-[16rem] font-sans text-sm text-bone/60">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
