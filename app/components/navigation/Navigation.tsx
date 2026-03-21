"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { sections } from "@/app/data/sections";
import { useScrollProgress } from "@/app/lib/useScrollProgress";

export function Navigation() {
  const progress = useScrollProgress();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Show navbar after scrolling ~60% past the hero
  const visible = progress > 0.6;

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (mobileOpen) setMobileOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileOpen]);

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
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-8 py-4 h-16 flex items-center"
        style={{
          pointerEvents: visible ? "auto" : "none",
          backdropFilter: visible ? "saturate(180%) blur(20px)" : "none",
          WebkitBackdropFilter: visible ? "saturate(180%) blur(20px)" : "none",
          backgroundColor: visible ? "rgba(255, 255, 255, 0.65)" : "transparent",
          borderBottom: visible ? "1px solid rgba(0,0,0,0.1)" : "none",
        }}
      >
        <div className="flex items-center justify-between w-full max-w-5xl mx-auto">
          {/* Logo */}
          <a
            href="#hero"
            onClick={() => setMobileOpen(false)}
            className="font-mono text-xs tracking-widest text-gray-500 select-none uppercase"
          >
            ARYAN.RAUT
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
            className="fixed top-16 left-0 right-0 z-40 md:hidden bg-white/65 border-b border-gray-200/50 shadow-sm"
            style={{
              backdropFilter: "saturate(180%) blur(20px)",
              WebkitBackdropFilter: "saturate(180%) blur(20px)",
            }}
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
