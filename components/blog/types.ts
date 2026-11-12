import { blogListData } from "./BlogData";

export type Post = (typeof blogListData)[number];

/** Rough minutes-to-read at 220 words per minute. */
export function readTime(post: Post): number {
  const text = [post.paragraph1, post.paragraph2, post.paragraph3, post.conclusion].join(" ");
  return Math.max(1, Math.round(text.split(/\s+/).length / 220));
}

export const pad = (n: number) => String(n).padStart(2, "0");
