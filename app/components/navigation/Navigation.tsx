"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { sections } from "@/app/data/sections";
import { useScrollProgress } from "@/app/lib/useScrollProgress";

export function Navigation() {
  const progress = useScrollProgress();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Show navbar after scrolling ~60% past the hero
  const visible = progress > 0.6;

  return (
    <>
      {/* Desktop + Mobile header bar */}
      <motion.header
        initial={false}
        animate={{
          opacity: visible ? 1 : 0,
          y: visible ? 0 : -20,
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-8 py-4"
        style={{
          pointerEvents: visible ? "auto" : "none",
          backdropFilter: visible ? "blur(12px)" : "none",
          WebkitBackdropFilter: visible ? "blur(12px)" : "none",
          backgroundColor: visible ? "rgba(251, 251, 251, 0.85)" : "transparent",
          borderBottom: visible ? "1px solid rgba(0,0,0,0.05)" : "none",
        }}
      >
        <div className="flex items-center justify-between max-w-5xl mx-auto">
          {/* Logo */}
          <a
            href="#hero"
            className="font-mono text-xs tracking-widest text-gray-500 select-none uppercase"
          >
            AS.DEV
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-7">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-sm tracking-wide text-gray-500 hover:text-gray-900 transition-colors duration-200 select-none"
              >
                {section.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-1 text-gray-500 hover:text-gray-900 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && visible && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-14 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
          >
            <div className="flex flex-col px-6 py-4 gap-3">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm tracking-wide text-gray-500 hover:text-gray-900 transition-colors duration-200 py-1"
                >
                  {section.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
