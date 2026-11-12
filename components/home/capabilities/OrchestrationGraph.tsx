"use client";

import { motion } from "framer-motion";
import { capabilities } from "@/lib/siteData";
import { EASE } from "../ui/motion";

// Geometry in a 1200×600 viewBox. Hub sits at (600, 300) with r = 120.
const ROWS = [110, 300, 490];
const leftPath = (y: number, i: number) =>
  i === 1 ? `M480 300 L330 300` : `M505 ${y < 300 ? 235 : 365} C420 ${y < 300 ? 235 : 365}, 420 ${y}, 330 ${y}`;
const rightPath = (y: number, i: number) =>
  i === 1 ? `M720 300 L870 300` : `M695 ${y < 300 ? 235 : 365} C780 ${y < 300 ? 235 : 365}, 780 ${y}, 870 ${y}`;

const left = capabilities.filter((c) => c.side === "left");
const right = capabilities.filter((c) => c.side === "right");

function Node({ title, detail, n, side, y }: { title: string; detail: string; n: number; side: "left" | "right"; y: number }) {
  return (
    // Plain wrapper owns the centering transform; framer animates the inner x.
    <div className="absolute w-[27.5%] -translate-y-1/2" style={{ top: `${(y / 600) * 100}%`, [side]: 0 }}>
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay: 0.6 + n * 0.08 }}
    >
      <div className="rounded-2xl border border-ink/10 bg-bone p-5 shadow-[0_20px_50px_-20px_rgba(11,11,12,0.25)] transition-transform duration-500 hover:-translate-y-1">
        <div className="mb-2 flex items-center gap-3">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-ember font-sans text-[11px] font-bold text-ink">
            {String(n + 1).padStart(2, "0")}
          </span>
          <h3 className="font-display text-xl uppercase lg:text-2xl">{title}</h3>
        </div>
        <p className="font-sans text-sm leading-snug text-ink/60">{detail}</p>
      </div>
    </motion.div>
    </div>
  );
}

function Hub() {
  return (
    <div className="absolute left-1/2 top-1/2 aspect-square w-[20%] -translate-x-1/2 -translate-y-1/2">
      <div className="absolute -inset-5 animate-spin-slow rounded-full border border-dashed border-ink/30" />
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: EASE }}
        className="relative grid h-full w-full place-items-center rounded-full bg-ink text-center text-bone shadow-[0_0_0_10px_rgba(255,91,31,0.15),0_30px_80px_-20px_rgba(255,91,31,0.6)]"
      >
        <div>
          <p className="font-display text-4xl uppercase lg:text-5xl">Sayo</p>
          <p className="font-serif text-lg italic text-ember">the orchestrator</p>
        </div>
      </motion.div>
    </div>
  );
}

function Connector({ d, i }: { d: string; i: number }) {
  return (
    <g>
      <motion.path
        d={d}
        fill="none"
        className="stroke-ink/30"
        strokeWidth={1.5}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: EASE, delay: 0.3 + i * 0.05 }}
      />
      <circle r={5} className="fill-ember">
        <animateMotion dur="2.6s" repeatCount="indefinite" begin={`${i * 0.4}s`} path={d} />
      </circle>
    </g>
  );
}

/** Desktop: hub-and-spoke diagram with live pulses. Mobile: stacked list. */
export default function OrchestrationGraph() {
  return (
    <>
      <div className="relative mx-auto hidden aspect-[2/1] w-full max-w-7xl md:block">
        <svg viewBox="0 0 1200 600" className="absolute inset-0 h-full w-full" aria-hidden>
          {ROWS.map((y, i) => (
            <Connector key={`l${y}`} d={leftPath(y, i)} i={i} />
          ))}
          {ROWS.map((y, i) => (
            <Connector key={`r${y}`} d={rightPath(y, i)} i={i + 3} />
          ))}
        </svg>
        <Hub />
        {left.map((c, i) => (
          <Node key={c.title} title={c.title} detail={c.detail} n={i} side="left" y={ROWS[i]} />
        ))}
        {right.map((c, i) => (
          <Node key={c.title} title={c.title} detail={c.detail} n={i + 3} side="right" y={ROWS[i]} />
        ))}
      </div>

      <ol className="relative ml-3 space-y-4 border-l-2 border-ember/60 pl-6 md:hidden">
        {capabilities.map((c, i) => (
          <motion.li
            key={c.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: i * 0.05 }}
            className="relative rounded-2xl bg-bone p-5"
          >
            <span className="absolute -left-[35px] top-6 h-4 w-4 rounded-full border-4 border-cream bg-ember" />
            <h3 className="font-display text-2xl uppercase">{c.title}</h3>
            <p className="mt-1 font-sans text-sm text-ink/60">{c.detail}</p>
          </motion.li>
        ))}
      </ol>
    </>
  );
}
