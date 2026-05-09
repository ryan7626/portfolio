"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";
import { SocialLinks } from "../hero/SocialLinks";
import { profile } from "@/app/data/profile";
import { fadeUp, staggerContainer, viewportOnce } from "@/app/lib/motion";

export function Contact() {
  return (
    <SectionWrapper id="contact">
      <motion.div
        className="flex w-full max-w-2xl flex-col items-center text-center"
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        <motion.h2
          variants={fadeUp}
          className="mb-4 text-3xl font-medium text-gray-900 dark:text-zinc-100"
        >
          Let&rsquo;s Connect
        </motion.h2>
        
        <motion.p
          variants={fadeUp}
          className="mx-auto mb-10 max-w-lg leading-relaxed text-gray-500 dark:text-zinc-400"
        >
          I&rsquo;m open to software engineering, AI/ML, and data-focused
          opportunities. If you&rsquo;d like to collaborate, recruit, or simply
          connect, I&rsquo;d be glad to hear from you.
        </motion.p>

        {/* Primary Email CTA */}
        <motion.a
          href={`mailto:${profile.email}`}
          variants={fadeUp}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.98 }}
          className="mb-16 inline-flex items-center justify-center rounded-full bg-gray-900 px-8 py-4 text-sm font-medium text-white shadow-xs transition-colors hover:bg-gray-800 hover:shadow-md dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Email Me
        </motion.a>

        {/* Reusing SocialLinks for consistency with Hero */}
        <motion.div variants={fadeUp} className="flex flex-col items-center">
          <p className="text-xs font-mono text-gray-400 dark:text-zinc-500 uppercase tracking-widest mb-4">
            Connect
          </p>
          <SocialLinks className="mt-0 gap-8" showThemeToggle={false} />
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
