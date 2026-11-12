"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useOverlayRoute } from "../home/ui/use-overlay-route";
import { useScrollLock } from "../home/ui/use-scroll-lock";
import { blogListData } from "./BlogData";
import PostCard from "./PostCard";
import PostOverlay from "./PostOverlay";

export default function PostGrid() {
  const slugs = useMemo(() => blogListData.map((p) => p.slug), []);
  const { active, open, close } = useOverlayRoute(slugs, "post");
  // The last-opened card stays raised while it animates back into the grid.
  const [raised, setRaised] = useState<string | null>(null);
  const nextTimer = useRef<ReturnType<typeof setTimeout>>();

  useScrollLock(active !== null);
  useEffect(() => {
    if (active) setRaised(active);
  }, [active]);
  useEffect(() => () => clearTimeout(nextTimer.current), []);

  const index = blogListData.findIndex((p) => p.slug === active);
  const post = index >= 0 ? blogListData[index] : null;
  const next = blogListData[(index + 1) % blogListData.length];

  const goNext = () => {
    close();
    nextTimer.current = setTimeout(() => open(next.slug), 800);
  };

  return (
    <section aria-label="Posts" className="bg-ink px-5 py-16 text-bone md:px-10 md:py-24">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4">
        {blogListData.map((p, i) => (
          <PostCard
            key={p.slug}
            post={p}
            index={i}
            featured={i === 0}
            raised={raised === p.slug}
            onOpen={open}
          />
        ))}
      </div>

      <AnimatePresence>
        {post && (
          <PostOverlay key={post.slug} post={post} index={index} next={next} onClose={close} onNext={goNext} />
        )}
      </AnimatePresence>
    </section>
  );
}
