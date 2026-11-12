"use client";

import { useCallback, useEffect, useState } from "react";

const PARAM = "p";

/**
 * Keeps the open project in the URL (`/?p=slug`) so case studies are
 * shareable and the browser back button closes the overlay.
 */
export function useProjectRoute(slugs: string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const read = () => {
      const slug = new URLSearchParams(window.location.search).get(PARAM);
      setActive(slug && slugs.includes(slug) ? slug : null);
    };
    read();
    window.addEventListener("popstate", read);
    return () => window.removeEventListener("popstate", read);
  }, [slugs]);

  const open = useCallback((slug: string) => {
    window.history.pushState({ project: slug }, "", `?${PARAM}=${slug}`);
    setActive(slug);
  }, []);

  const close = useCallback(() => {
    if (window.history.state?.project) {
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
