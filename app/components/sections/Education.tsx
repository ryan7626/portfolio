"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";
import { SectionHeader } from "./SectionHeader";
import { education } from "@/app/data/education";
import Image from "next/image";
import {
  smoothEase,
  staggerContainer,
  timelineItem,
  viewportOnce,
} from "@/app/lib/motion";

export function Education() {
  return (
    <SectionWrapper id="education">
      <div className="max-w-4xl w-full">
        <SectionHeader
          title="Education"
          description="Computer science and mathematics foundation"
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
            className="absolute left-[7px] top-2 bottom-2 w-px origin-top bg-gray-200 dark:bg-zinc-800 md:left-[240px] md:-translate-x-px"
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.9, ease: smoothEase }}
          />

          <div className="flex flex-col gap-12">
            {education.map((entry, index) => (
              <motion.div
                key={`${entry.institution}-${entry.degree}`}
                variants={timelineItem}
                className="relative pl-8 md:pl-0 md:grid md:grid-cols-[220px_1fr] md:gap-10"
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-0 top-1.5 z-10 h-[15px] w-[15px] rounded-full border-2 border-gray-300 bg-white dark:border-zinc-700 dark:bg-zinc-950 md:left-[240px] md:-translate-x-1/2"
                  initial={{ scale: 0.4, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={viewportOnce}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                    ease: smoothEase,
                  }}
                />

                {/* Left column (dates — visible on desktop) */}
                <div className="hidden md:flex md:justify-end md:items-start md:pt-0.5">
                  <span className="text-sm text-gray-400 dark:text-zinc-500 font-mono tracking-wide">
                    {entry.dateRange}
                  </span>
                </div>

                {/* Right column (content) */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
                  <div className="flex-1 w-full">
                    {/* Mobile date */}
                    <span className="text-xs text-gray-400 dark:text-zinc-500 font-mono tracking-wide md:hidden">
                      {entry.dateRange}
                    </span>

                    <h3 className="text-xl font-medium text-gray-900 dark:text-zinc-100 mt-1 md:mt-0 leading-tight">
                      {entry.institution}
                    </h3>

                    <p className="text-sm text-gray-500 dark:text-zinc-400 mt-0.5">
                      {entry.degree}
                      {entry.gpa && (
                        <span className="text-gray-400 dark:text-zinc-500">
                          {" "}
                          · {entry.gpa}
                        </span>
                      )}
                    </p>

                    {entry.coursework && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {entry.coursework.map((course) => (
                          <span
                            key={course}
                            className="text-xs text-gray-500 dark:text-zinc-400 bg-gray-100 dark:bg-zinc-800/50 px-2.5 py-1 rounded-full border border-transparent dark:border-white/5"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    )}

                    {entry.notes && (
                      <p className="text-xs text-gray-400 dark:text-zinc-600 mt-3 italic">
                        {entry.notes}
                      </p>
                    )}
                  </div>

                  {/* In-line Image Area */}
                  {(entry.darkImage || entry.lightImage) && (
                    <motion.div
                      className="relative hidden aspect-square w-[220px] shrink-0 overflow-hidden rounded-[1.5rem] lg:block xl:w-[260px]"
                      whileHover={{ y: -6, rotate: -1.5 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    >
                      {entry.darkImage && (
                        <Image
                          src={entry.darkImage}
                          alt={`${entry.institution} mascot on a dark background`}
                          fill
                          sizes="260px"
                          className={
                            entry.lightImage
                              ? "hidden dark:block object-cover"
                              : "object-cover"
                          }
                        />
                      )}
                      {entry.lightImage && (
                        <Image
                          src={entry.lightImage}
                          alt={`${entry.institution} mascot on a light background`}
                          fill
                          sizes="260px"
                          className={
                            entry.darkImage
                              ? "block dark:hidden object-cover"
                              : "object-cover"
                          }
                        />
                      )}
                    </motion.div>
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
