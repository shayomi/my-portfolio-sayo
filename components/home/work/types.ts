import { projects } from "@/lib/projectData";

export type Project = (typeof projects)[number];

// Grid placement for each card by index. Position 0 is the full-width feature.
export const CARD_LAYOUT = [
  "md:col-span-12 h-[520px] md:h-[86vh]",
  "md:col-span-7 h-[460px] md:h-[72vh]",
  "md:col-span-5 h-[460px] md:h-[72vh]",
  "md:col-span-5 h-[460px] md:h-[72vh]",
  "md:col-span-7 h-[460px] md:h-[72vh]",
  "md:col-span-4 h-[460px] md:h-[60vh]",
  "md:col-span-4 h-[460px] md:h-[60vh]",
  "md:col-span-4 h-[460px] md:h-[60vh]",
];
export const DEFAULT_CARD_LAYOUT = "md:col-span-6 h-[460px] md:h-[64vh]";
