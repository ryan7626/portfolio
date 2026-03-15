import React from 'react';
import { motion } from 'motion/react';

export function Navigation() {
  const navItems = ["Work", "About", "Contact"];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 mix-blend-difference"
    >
      <div className="font-mono text-xs tracking-widest text-gray-400 select-none uppercase">
        AS.DEV
      </div>
      
      <nav className="flex gap-8">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm tracking-wide text-gray-500 hover:text-gray-900 transition-colors duration-300 select-none cursor-pointer"
          >
            {item}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
