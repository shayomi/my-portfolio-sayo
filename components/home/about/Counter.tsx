"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { EASE } from "../ui/motion";

export default function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const count = useMotionValue(0);
  const text = useTransform(count, (v) => `${Math.round(v).toLocaleString("en-GB")}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration: 2, ease: EASE });
    return () => controls.stop();
  }, [inView, count, value]);

  return <motion.span ref={ref}>{text}</motion.span>;
}
