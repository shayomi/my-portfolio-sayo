"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiArrowUp, FiArrowUpRight } from "react-icons/fi";
import { socialData } from "@/lib/data";
import { WHATSAPP } from "@/lib/siteData";
import RevealText from "../ui/RevealText";
import SectionLabel from "../ui/SectionLabel";
import CopyEmail from "./CopyEmail";

export default function Contact() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-ember px-5 pt-28 text-ink md:px-10 md:pt-40">
      <SectionLabel index="06" label="Contact" className="mb-8 text-ink/70" />
      <h2 className="font-display uppercase leading-[0.82] text-[24vw] md:text-[17vw]">
        <RevealText text="Let's" />
        <br />
        <RevealText text="build" delay={0.1} />
        <span className="ml-[0.15em] font-serif text-[0.4em] normal-case italic">
          <RevealText text="something." delay={0.25} />
        </span>
      </h2>

      <div className="mt-16 grid gap-12 border-t border-ink/20 pt-10 md:mt-24 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="mb-5 max-w-md font-sans text-base text-ink/80">
            Founding engineer, CTO, or the person who takes your AI product from idea to
            production. Tell me what you&apos;re building.
          </p>
          <CopyEmail />
        </div>
        <div className="flex flex-col gap-6 md:col-span-5 md:items-end">
          <motion.a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            data-cursor="Chat"
            className="flex items-center gap-3 rounded-full bg-ink px-7 py-4 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-bone"
          >
            WhatsApp me <FiArrowUpRight />
          </motion.a>
          <ul className="flex gap-3">
            {socialData.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={new URL(s.href).hostname.replace("www.", "")}
                  className="grid h-12 w-12 place-items-center rounded-full border border-ink/30 text-lg transition-colors hover:bg-ink hover:text-ember"
                >
                  {React.createElement(s.icon)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-20 flex flex-col gap-4 border-t border-ink/20 py-6 font-sans text-xs uppercase tracking-[0.2em] text-ink/70 md:flex-row md:items-center md:justify-between">
        <span>© 2026 Sayo Adegoroye</span>
        <a href="/blog" className="hover:text-ink">Writing</a>
        <a href="#top" className="flex items-center gap-2 hover:text-ink">
          Back to top <FiArrowUp />
        </a>
      </div>
    </footer>
  );
}
