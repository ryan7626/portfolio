"use client";

import { motion } from "framer-motion";
import { NeuralBackground } from "./NeuralBackground";
import { HeroContent } from "./HeroContent";
import { SocialLinks } from "./SocialLinks";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-[#fbfbfb] font-sans text-gray-900 selection:bg-gray-200 selection:text-gray-900"
    >
      <NeuralBackground />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pointer-events-none">
        <div className="pointer-events-auto">
          <HeroContent />
          <SocialLinks />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 w-full text-center text-[10px] text-gray-400 font-mono tracking-widest z-10 mix-blend-difference select-none uppercase pointer-events-none"
      >
        © {new Date().getFullYear()} — SYSTEM ONLINE
      </motion.div>
    </section>
  );
}
