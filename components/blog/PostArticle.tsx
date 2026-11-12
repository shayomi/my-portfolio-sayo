/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { EASE, LAYOUT_TRANSITION } from "../home/ui/motion";
import { pad, readTime, type Post } from "./types";

interface PostArticleProps {
  post: Post;
  index: number;
  next: Post;
  onNext: () => void;
}

const contentIn = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE, delay } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
});

export default function PostArticle({ post, index, next, onNext }: PostArticleProps) {
  const body = [post.paragraph1, post.paragraph2, post.paragraph3];

  return (
    <article>
      {/* Cover */}
      <header className="relative h-[52svh] min-h-[360px] w-full overflow-hidden bg-ink">
        <motion.div
          layoutId={`post-img-${post.slug}`}
          transition={LAYOUT_TRANSITION}
          className="absolute inset-0 overflow-hidden"
          style={{ borderRadius: 0 }}
        >
          <motion.img layout transition={LAYOUT_TRANSITION} src={post.image} alt="" className="h-full w-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-bone via-bone/10 to-transparent" />
      </header>

      <div className="relative -mt-24 px-5 md:-mt-32 md:px-12">
        <motion.div {...contentIn(0.4)} className="mx-auto max-w-5xl">
          <p className="mb-5 flex flex-wrap items-center gap-3 font-sans text-xs uppercase tracking-[0.3em] text-ink/60">
            <span className="font-serif text-base normal-case italic tracking-normal text-ember">
              (No. {pad(index + 1)})
            </span>
            <span className="h-px w-10 bg-current opacity-40" />
            {post.date} · {readTime(post)} min read
          </p>
          <h1 className="font-display text-5xl uppercase leading-[0.9] md:text-7xl">{post.title}</h1>
        </motion.div>

        <motion.div {...contentIn(0.55)} className="mx-auto mt-14 max-w-3xl md:mt-20">
          {body.map((para, i) => (
            <p
              key={i}
              className={`mb-8 font-sans text-lg leading-relaxed text-ink/85 md:text-xl ${
                i === 0
                  ? "first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-ember md:first-letter:text-8xl"
                  : ""
              }`}
            >
              {para}
            </p>
          ))}

          <aside className="my-14 rounded-[28px] bg-ink p-8 text-bone md:p-12">
            <p className="mb-5 font-sans text-xs uppercase tracking-[0.3em] text-ember">The takeaway</p>
            <p className="font-serif text-2xl italic leading-snug md:text-4xl">{post.conclusion}</p>
          </aside>
        </motion.div>

        {/* Next read */}
        <div className="mx-auto max-w-5xl pb-10">
          <button
            type="button"
            onClick={onNext}
            data-cursor="Next"
            className="group flex w-full items-center justify-between gap-6 overflow-hidden rounded-[28px] bg-cream p-4 text-left md:p-6"
          >
            <div className="flex min-w-0 items-center gap-5">
              <img src={next.image} alt="" className="h-20 w-24 shrink-0 rounded-2xl object-cover grayscale md:h-28 md:w-40" />
              <div className="min-w-0">
                <p className="font-sans text-xs uppercase tracking-[0.3em] text-ink/50">Next read</p>
                <p className="font-display text-2xl uppercase leading-[0.95] md:text-5xl">{next.title}</p>
              </div>
            </div>
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-ember text-2xl text-ink transition-transform duration-500 group-hover:translate-x-2 md:h-20 md:w-20">
              <FiArrowRight />
            </span>
          </button>
        </div>
      </div>
    </article>
  );
}
