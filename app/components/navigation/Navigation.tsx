"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { sections } from "@/app/data/sections";
import { profile } from "@/app/data/profile";
import { useScrollProgress } from "@/app/lib/useScrollProgress";
import { ThemeToggle } from "./ThemeToggle";

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

  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
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
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-8 py-4 h-16 flex items-center transition-colors duration-300 ${
          visible
            ? "bg-white/65 dark:bg-black/50 backdrop-blur-[20px] saturate-[1.8] border-b border-black/10 dark:border-white/10"
            : "bg-transparent border-transparent"
        }`}
        style={{
          pointerEvents: visible ? "auto" : "none",
        }}
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <a
            href="#hero"
            onClick={() => setMobileOpen(false)}
            className="font-mono text-xs tracking-widest text-gray-500 select-none uppercase"
          >
            {profile.navLabel}
          </a>

          {/* Desktop nav & Theme */}
          <div className="hidden md:flex items-center gap-7">
            <nav className="flex gap-7">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-sm tracking-wide text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200 select-none"
                >
                  {section.label}
                </a>
              ))}
            </nav>
            <div className="w-px h-4 bg-gray-200 dark:bg-zinc-800" />
            <ThemeToggle />
          </div>

          {/* Mobile hamburger & Theme */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileOpen((isOpen) => !isOpen)}
              className="p-1 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && visible && (
          <motion.nav
            id="mobile-navigation"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden bg-white/65 dark:bg-black/70 border-b border-gray-200/50 dark:border-white/10 shadow-sm"
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
                  className="text-sm tracking-wide text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200 py-1"
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
