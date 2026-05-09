"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";
import { SectionHeader } from "./SectionHeader";
import { experience } from "@/app/data/experience";
import {
  smoothEase,
  staggerContainer,
  timelineItem,
  viewportOnce,
} from "@/app/lib/motion";

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="max-w-2xl w-full">
        <SectionHeader
          title="Experience"
          description="Teaching, analytics, and product engineering experience"
        />

        {/* Timeline */}
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {/* Vertical line */}
          <motion.div
            className="absolute left-[7px] top-2 bottom-2 w-px origin-top bg-gray-200 dark:bg-zinc-800 md:left-1/2 md:-translate-x-px"
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.9, ease: smoothEase }}
          />

          <div className="flex flex-col gap-14">
            {experience.map((entry, index) => (
              <motion.div
                key={`${entry.company}-${entry.role}`}
                variants={timelineItem}
                className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-10"
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-0 top-1.5 z-10 h-[15px] w-[15px] rounded-full border-2 border-gray-300 bg-white dark:border-zinc-700 dark:bg-zinc-950 md:left-1/2 md:-translate-x-1/2"
                  initial={{ scale: 0.4, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={viewportOnce}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                    ease: smoothEase,
                  }}
                />

                {/* Left column — dates & location (desktop) */}
                <div className="hidden md:flex md:flex-col md:items-end md:pt-0.5">
                  <span className="text-sm text-gray-400 dark:text-zinc-500 font-mono tracking-wide">
                    {entry.dateRange}
                  </span>
                  {entry.location && (
                    <span className="text-xs text-gray-300 dark:text-zinc-600 mt-0.5">
                      {entry.location}
                    </span>
                  )}
                </div>

                {/* Right column — content */}
                <div>
                  {/* Mobile date & location */}
                  <div className="md:hidden">
                    <span className="text-xs text-gray-400 dark:text-zinc-500 font-mono tracking-wide">
                      {entry.dateRange}
                    </span>
                    {entry.location && (
                      <span className="text-xs text-gray-300 dark:text-zinc-600 ml-2">
                        · {entry.location}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-medium text-gray-900 dark:text-zinc-100 mt-1 md:mt-0 leading-tight">
                    {entry.role}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-zinc-400 mt-0.5">
                    {entry.company}
                  </p>

                  {entry.bullets.length > 0 && (
                    <ul className="mt-3 space-y-1.5">
                      {entry.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="text-sm text-gray-500 dark:text-zinc-400 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-px before:bg-gray-300 dark:before:bg-zinc-700"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
