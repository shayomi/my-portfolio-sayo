"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * Keeps the open overlay in the URL (`?<param>=slug`) so it is shareable and
 * the browser back button closes it. Used by project case studies (`p`) and
 * blog posts (`post`).
 */
export function useOverlayRoute(slugs: string[], param: string) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const read = () => {
      const slug = new URLSearchParams(window.location.search).get(param);
      setActive(slug && slugs.includes(slug) ? slug : null);
    };
    read();
    window.addEventListener("popstate", read);
    return () => window.removeEventListener("popstate", read);
  }, [slugs, param]);

  const open = useCallback(
    (slug: string) => {
      window.history.pushState({ overlay: slug }, "", `?${param}=${slug}`);
      setActive(slug);
    },
    [param],
  );

  const close = useCallback(() => {
    if (window.history.state?.overlay) {
      // Opened from the grid: step back so Back/Forward stay intuitive.
      window.history.back();
    } else {
      // Arrived via a shared link: just drop the param.
      window.history.replaceState(null, "", window.location.pathname);
      setActive(null);
    }
  }, []);

  return { active, open, close };
}
