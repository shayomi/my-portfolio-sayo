/* eslint-disable @next/next/no-img-element */
"use client";

import Marquee from "react-fast-marquee";
import { reviewData } from "@/lib/data";
import RevealText from "../ui/RevealText";
import SectionLabel from "../ui/SectionLabel";

type Review = (typeof reviewData)[number];

function Card({ review }: { review: Review }) {
  return (
    <figure className="mx-3 flex w-[340px] flex-col justify-between gap-8 rounded-[28px] border border-bone/10 bg-coal p-7 md:w-[420px]">
      <blockquote className="font-serif text-xl italic leading-snug text-bone/90 md:text-2xl">
        &ldquo;{review.review}&rdquo;
      </blockquote>
      <figcaption className="flex items-center gap-3">
        <img src={review.avatar} alt="" className="h-11 w-11 rounded-full object-cover grayscale" />
        <div>
          <p className="font-sans text-sm font-semibold text-bone">{review.name}</p>
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-bone/50">{review.title}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const half = Math.ceil(reviewData.length / 2);
  return (
    <section aria-labelledby="kind-words" className="overflow-hidden bg-ink pb-28 text-bone md:pb-40">
      <div className="px-5 md:px-10">
        <SectionLabel index="05" label="Testimonials" className="mb-8 text-bone/60" />
        <h2 id="kind-words" className="mb-16 font-display uppercase leading-[0.86] text-[16vw] md:text-[10vw]">
          <RevealText text="Kind" /> <RevealText text="words" className="text-outline-bone" delay={0.1} />
        </h2>
      </div>
      <div className="flex flex-col gap-6">
        <Marquee speed={35} pauseOnHover gradient gradientColor="#0B0B0C" gradientWidth={120}>
          {reviewData.slice(0, half).map((r) => (
            <Card key={r.name} review={r} />
          ))}
          {reviewData.slice(0, half).map((r) => (
            <Card key={`${r.name}-b`} review={r} />
          ))}
        </Marquee>
        <Marquee speed={35} direction="right" pauseOnHover gradient gradientColor="#0B0B0C" gradientWidth={120}>
          {reviewData.slice(half).map((r) => (
            <Card key={r.name} review={r} />
          ))}
          {reviewData.slice(half).map((r) => (
            <Card key={`${r.name}-b`} review={r} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
