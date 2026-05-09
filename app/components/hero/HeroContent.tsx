"use client";

import { motion } from "framer-motion";
import { profile } from "@/app/data/profile";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function HeroContent() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center justify-center relative z-10 text-center select-none max-w-2xl mx-auto"
    >
      {/* Name */}
      <motion.h1
        variants={itemVariants}
        className="text-4xl md:text-6xl font-medium text-gray-900 dark:text-zinc-100 mb-3"
      >
        {profile.name}
      </motion.h1>

      {/* Divider */}
      <motion.div
        variants={itemVariants}
        className="h-px w-10 bg-gray-300 dark:bg-zinc-700 mb-5 mx-auto"
      />

      {/* Quote */}
      <motion.p
        variants={itemVariants}
        className="text-sm md:text-base text-gray-400 dark:text-zinc-500 font-light italic tracking-wide mb-6"
      >
        AI/ML, full-stack systems, and data-driven product work.
      </motion.p>

      {/* Recruiter-facing description */}
      <motion.p
        variants={itemVariants}
        className="text-base md:text-lg text-gray-500 dark:text-zinc-400 font-light tracking-wide max-w-lg mx-auto leading-relaxed"
      >
        {profile.summary}
      </motion.p>
    </motion.div>
  );
}
