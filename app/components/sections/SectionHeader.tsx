"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  smoothEase,
  staggerContainer,
  viewportOnce,
} from "@/app/lib/motion";

interface SectionHeaderProps {
  title: string;
  description?: string;
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <motion.header
      className="mb-10 text-center"
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={staggerContainer}
    >
      <motion.h2
        variants={fadeUp}
        className="text-3xl font-medium text-gray-900 dark:text-zinc-100"
      >
        {title}
      </motion.h2>
      <motion.div
        className="mx-auto mt-3 h-px w-8 origin-center bg-gray-300 dark:bg-zinc-700"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.55, ease: smoothEase }}
      />
      {description && (
        <motion.p
          variants={fadeUp}
          className="mt-3 text-sm text-gray-400 dark:text-zinc-400"
        >
          {description}
        </motion.p>
      )}
    </motion.header>
  );
}
