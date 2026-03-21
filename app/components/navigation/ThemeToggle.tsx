"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-full text-gray-500 dark:text-gray-400 transition-colors duration-200 outline-hidden"
        aria-label="Toggle theme"
      >
        <div className="relative w-4 h-4 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <Moon className="w-4 h-4" />
          </div>
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-zinc-800 dark:hover:text-gray-100 transition-colors duration-200 outline-hidden"
      aria-label="Toggle theme"
    >
      <div className="relative w-4 h-4 overflow-hidden">
        <motion.div
          animate={{
            y: theme === "dark" ? 0 : 20,
            opacity: theme === "dark" ? 1 : 0,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="w-4 h-4" />
        </motion.div>
        
        <motion.div
          animate={{
            y: theme === "light" ? 0 : -20,
            opacity: theme === "light" ? 1 : 0,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="w-4 h-4" />
        </motion.div>
        
        {/* Fallback for system if needed, although simple toggle between light/dark is usually better */}
      </div>
    </button>
  );
}
