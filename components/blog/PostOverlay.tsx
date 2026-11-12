"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FiX } from "react-icons/fi";
import { LAYOUT_TRANSITION } from "../home/ui/motion";
import PostArticle from "./PostArticle";
import type { Post } from "./types";

interface PostOverlayProps {
  post: Post;
  index: number;
  next: Post;
  onClose: () => void;
  onNext: () => void;
}

/** The card grows into a full-screen reader; closing folds it back into the grid. */
export default function PostOverlay({ post, index, next, onClose, onNext }: PostOverlayProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const { scrollYProgress } = useScroll({ container: panelRef });
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 30, mass: 0.3 });

  // Escape to close; move focus in, then back to whatever opened it.
  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    closeRef.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      opener?.focus?.({ preventScroll: true });
    };
  }, [onClose]);

  return (
    <>
      <motion.div
        aria-hidden
        className="fixed inset-0 z-[55] bg-ink/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      />

      <motion.div
        ref={panelRef}
        layoutId={`post-${post.slug}`}
        transition={LAYOUT_TRANSITION}
        role="dialog"
        aria-modal="true"
        aria-label={post.title}
        className="fixed inset-0 z-[60] overflow-y-auto overscroll-contain bg-bone text-ink"
        style={{ borderRadius: 0 }}
      >
        <PostArticle post={post} index={index} next={next} onNext={onNext} />
      </motion.div>

      {/* Reading progress */}
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.6 } }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
        className="fixed inset-x-0 top-0 z-[70] h-1 origin-left bg-ember"
      />

      <motion.button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close article"
        data-cursor="Close"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1, transition: { delay: 0.5, type: "spring", stiffness: 300, damping: 22 } }}
        exit={{ opacity: 0, scale: 0.6, transition: { duration: 0.15 } }}
        className="fixed right-4 top-4 z-[70] flex items-center gap-2 rounded-full bg-ink px-5 py-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-bone shadow-2xl md:right-8 md:top-8"
      >
        Close <FiX className="text-base" />
      </motion.button>
    </>
  );
}
