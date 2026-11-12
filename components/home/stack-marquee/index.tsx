"use client";

import Marquee from "react-fast-marquee";
import { stack } from "@/lib/siteData";

/** Single tilted ember tape band listing the stack. */
export default function StackMarquee() {
  return (
    <section aria-label="Tech stack" className="relative overflow-hidden bg-ink py-20">
      <div className="-rotate-2 scale-105 bg-ember py-4">
        <Marquee autoFill speed={70}>
          {stack.map((item) => (
            <span
              key={item}
              className="mx-6 flex items-center gap-12 font-display text-4xl uppercase text-ink md:text-6xl"
            >
              {item}
              <span aria-hidden className="font-serif text-3xl italic text-bone">
                ✳
              </span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
