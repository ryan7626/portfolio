"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { StarBackground } from "./StarBackground";
import { HeroContent } from "./HeroContent";
import { SocialLinks } from "./SocialLinks";
import { useScrollProgress } from "@/app/lib/useScrollProgress";

export function Hero() {
  const progress = useScrollProgress();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-black text-gray-900 dark:text-zinc-50 selection:bg-gray-200 dark:selection:bg-zinc-800 selection:text-gray-900 dark:selection:text-zinc-50 transition-colors duration-300"
      style={{
        opacity: 1 - progress,
        transform: `translateY(-${progress * 40}px)`,
      }}
    >
      <div className="absolute inset-0 z-0 pointer-events-none dark:block hidden">
        <Image
          src="/galaxy.jpg"
          alt="Galaxy Background"
          fill
          sizes="100vw"
          className="object-cover opacity-80"
          priority
        />
      </div>
      
      <StarBackground />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pointer-events-none">
        <div className="pointer-events-auto">
          <HeroContent />
          <SocialLinks />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
        <motion.a
          href="#education"
          aria-label="Scroll to education"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200/80 bg-white/50 text-gray-500 shadow-sm backdrop-blur-md transition-colors hover:border-gray-300 hover:text-gray-900 dark:border-white/10 dark:bg-black/25 dark:text-zinc-400 dark:hover:border-white/20 dark:hover:text-zinc-100"
          initial={{ opacity: 0 }}
          animate={
            shouldReduceMotion
              ? { opacity: 0.75 }
              : { opacity: [0.45, 1, 0.45], y: [0, 8, 0] }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0.2 }
              : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <ChevronDown className="h-5 w-5" />
        </motion.a>
      </div>
    </section>
  );
}
