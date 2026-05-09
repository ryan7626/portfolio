"use client";

import { useEffect, useState } from "react";

/**
 * Returns a 0→1 progress value representing how far the hero section
 * has been scrolled. 0 = at the top, 1 = hero fully scrolled past.
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frameId = 0;

    const updateProgress = () => {
      frameId = 0;

      const heroHeight = Math.max(window.innerHeight, 1);
      const nextProgress = Math.min(window.scrollY / heroHeight, 1);

      setProgress((currentProgress) =>
        Math.abs(currentProgress - nextProgress) < 0.001
          ? currentProgress
          : nextProgress,
      );
    };

    const scheduleUpdate = () => {
      if (frameId === 0) {
        frameId = requestAnimationFrame(updateProgress);
      }
    };

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    scheduleUpdate();

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return progress;
}
