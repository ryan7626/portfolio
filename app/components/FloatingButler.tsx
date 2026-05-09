"use client";

import { motion } from "framer-motion";
import type { Application } from "@splinetool/runtime";
import { SplineScene } from "@/components/ui/splite";

function enableGlobalCursorTracking(spline: Application) {
  spline.setGlobalEvents(true);
}

export function FloatingButler() {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, x: -18, y: 18, scale: 0.94 }}
      animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="pointer-events-none fixed bottom-0 left-0 z-40 h-36 w-32 overflow-hidden sm:h-48 sm:w-44 md:h-60 md:w-56"
    >
      <SplineScene
        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
        className="h-full w-full"
        onLoad={enableGlobalCursorTracking}
      />
    </motion.div>
  );
}
