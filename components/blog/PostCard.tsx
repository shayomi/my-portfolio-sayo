/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { EASE, LAYOUT_TRANSITION } from "../home/ui/motion";
import { pad, readTime, type Post } from "./types";

interface PostCardProps {
  post: Post;
  index: number;
  featured: boolean;
  raised: boolean;
  onOpen: (slug: string) => void;
}

/** Compact card; the featured (latest) post spans a 2×2 block on large screens. */
export default function PostCard({ post, index, featured, raised, onOpen }: PostCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.9, ease: EASE, delay: (index % 4) * 0.08 }}
      className={`relative ${raised ? "z-40" : "z-0"} ${featured ? "sm:col-span-2 lg:row-span-2" : ""}`}
    >
      <motion.button
        type="button"
        layoutId={`post-${post.slug}`}
        transition={LAYOUT_TRANSITION}
        onClick={() => onOpen(post.slug)}
        data-cursor="Read"
        aria-label={`Read: ${post.title}`}
        initial="rest"
        animate="rest"
        whileHover="hover"
        className="group flex h-full w-full flex-col overflow-hidden bg-coal p-3 text-left text-bone outline-none focus-visible:ring-4 focus-visible:ring-ember"
        style={{ borderRadius: 24 }}
      >
        <motion.div
          layoutId={`post-img-${post.slug}`}
          transition={LAYOUT_TRANSITION}
          className={`relative w-full shrink-0 overflow-hidden ${featured ? "aspect-[4/3] lg:aspect-auto lg:min-h-0 lg:flex-1 lg:shrink" : "aspect-[4/3]"}`}
          style={{ borderRadius: 16 }}
        >
          <motion.img
            layout
            transition={LAYOUT_TRANSITION}
            variants={{ rest: { scale: 1 }, hover: { scale: 1.08 } }}
            src={post.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover grayscale transition-[filter] duration-700 group-hover:grayscale-0"
          />
          <span className="absolute left-3 top-3 rounded-full bg-ink/60 px-3 py-1 font-sans text-[10px] uppercase tracking-[0.2em] backdrop-blur-md">
            {featured ? "Latest" : `No. ${pad(index + 1)}`}
          </span>
        </motion.div>

        <div className={`flex flex-col justify-between gap-5 px-2 pb-2 pt-5 ${featured ? "" : "flex-1"}`}>
          <h2
            className={`font-sans font-medium leading-tight tracking-tight ${
              featured ? "text-2xl md:text-4xl" : "text-lg md:text-xl"
            }`}
          >
            {post.title}
          </h2>
          <div className="flex items-center justify-between font-sans text-[11px] uppercase tracking-[0.2em] text-bone/50">
            <span>
              {post.date} · {readTime(post)} min
            </span>
            <motion.span
              variants={{ rest: { rotate: 0, backgroundColor: "#F7F4EF" }, hover: { rotate: 45, backgroundColor: "#FF5B1F" } }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="grid h-9 w-9 place-items-center rounded-full text-base text-ink"
            >
              <FiArrowUpRight />
            </motion.span>
          </div>
        </div>
      </motion.button>
    </motion.article>
  );
}
