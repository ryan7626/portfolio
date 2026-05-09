"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

function subscribeToHydration(onStoreChange: () => void) {
  const frame = requestAnimationFrame(onStoreChange);

  return () => cancelAnimationFrame(frame);
}

function getMountedSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

function useHasMounted() {
  return useSyncExternalStore(
    subscribeToHydration,
    getMountedSnapshot,
    getServerSnapshot,
  );
}

export function ThemeToggle() {
  const hasMounted = useHasMounted();
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  if (!hasMounted) {
    return (
      <button
        type="button"
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
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-zinc-800 dark:hover:text-gray-100 transition-colors duration-200 outline-hidden"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      <div className="relative w-4 h-4 overflow-hidden">
        <motion.div
          animate={{
            y: isDark ? 0 : 20,
            opacity: isDark ? 1 : 0,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="w-4 h-4" />
        </motion.div>
        
        <motion.div
          animate={{
            y: isDark ? -20 : 0,
            opacity: isDark ? 0 : 1,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="w-4 h-4" />
        </motion.div>
      </div>
    </button>
  );
}
