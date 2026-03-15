import React from 'react';
import { NeuralBackground } from './components/NeuralBackground';
import { Navigation } from './components/Navigation';
import { HeroContent } from './components/HeroContent';
import { SocialLinks } from './components/SocialLinks';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#fbfbfb] font-sans text-gray-900 selection:bg-gray-200 selection:text-gray-900">
      <NeuralBackground />
      <Navigation />
      
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pointer-events-none">
        <div className="pointer-events-auto">
          <HeroContent />
          <SocialLinks />
        </div>
      </main>

      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="fixed bottom-8 w-full text-center text-[10px] text-gray-400 font-mono tracking-widest z-10 mix-blend-difference select-none uppercase pointer-events-none"
      >
        © {new Date().getFullYear()} — SYSTEM ONLINE
      </motion.footer>
    </div>
  );
}
