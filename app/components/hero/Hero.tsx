"use client";

import { NeuralBackground } from "./NeuralBackground";
import { HeroContent } from "./HeroContent";
import { SocialLinks } from "./SocialLinks";
import { useScrollProgress } from "@/app/lib/useScrollProgress";

export function Hero() {
  const progress = useScrollProgress();

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-[#fbfbfb] text-gray-900 selection:bg-gray-200 selection:text-gray-900"
      style={{
        opacity: 1 - progress,
        transform: `translateY(-${progress * 40}px)`,
      }}
    >
      <NeuralBackground />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pointer-events-none">
        <div className="pointer-events-auto">
          <HeroContent />
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
