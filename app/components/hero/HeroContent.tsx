"use client";

import { motion } from "framer-motion";

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
        className="text-4xl md:text-6xl font-medium tracking-tight text-gray-900 mb-3"
        style={{ letterSpacing: "-0.02em" }}
      >
        Your Name
      </motion.h1>

      {/* Divider */}
      <motion.div
        variants={itemVariants}
        className="h-px w-10 bg-gray-300 mb-5 mx-auto"
      />

      {/* Quote */}
      <motion.p
        variants={itemVariants}
        className="text-sm md:text-base text-gray-400 font-light italic tracking-wide mb-6"
      >
        &ldquo;Building things that matter.&rdquo;
      </motion.p>

      {/* Recruiter-facing description */}
      <motion.p
        variants={itemVariants}
        className="text-base md:text-lg text-gray-500 font-light tracking-wide max-w-lg mx-auto leading-relaxed"
      >
        Software engineer focused on building clean, scalable products.
        Currently studying Computer Science and exploring full-stack development.
      </motion.p>
    </motion.div>
  );
}
