"use client";

import { useEffect, useState } from "react";

/**
 * Returns a 0→1 progress value representing how far the hero section
 * has been scrolled. 0 = at the top, 1 = hero fully scrolled past.
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      const p = Math.min(scrollY / heroHeight, 1);
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
}
