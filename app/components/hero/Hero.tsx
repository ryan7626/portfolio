"use client";

import Image from "next/image";
import { StarBackground } from "./StarBackground";
import { HeroContent } from "./HeroContent";
import { SocialLinks } from "./SocialLinks";
import { useScrollProgress } from "@/app/lib/useScrollProgress";

export function Hero() {
  const progress = useScrollProgress();

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
          className="object-cover opacity-80"
          priority
          unoptimized
        />
      </div>
      
      <StarBackground />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pointer-events-none">
        <div className="pointer-events-auto">
          <HeroContent />
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
