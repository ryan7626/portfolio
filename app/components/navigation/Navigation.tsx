"use client";

import { motion } from "framer-motion";
import { sections } from "@/app/data/sections";

export function Navigation() {
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
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="text-sm tracking-wide text-gray-500 hover:text-gray-900 transition-colors duration-300 select-none cursor-pointer"
          >
            {section.label}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
