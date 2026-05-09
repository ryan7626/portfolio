"use client";

import { useState } from "react";
import { SectionWrapper } from "./SectionWrapper";
import { SectionHeader } from "./SectionHeader";
import { Download, FileText, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { profile } from "@/app/data/profile";

export function Resume() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <SectionWrapper id="resume" className="bg-[#fafafa] dark:bg-zinc-950/50">
      <div className="max-w-4xl w-full flex flex-col items-center">
        <SectionHeader title="Resume" description="Download the full PDF version" />

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left: Action CTA */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 px-4">
            <h3 className="text-2xl font-medium text-gray-900 dark:text-zinc-100 mb-4">
              Keep a Copy of My Resume
            </h3>
            <p className="text-gray-500 dark:text-zinc-400 mb-8 max-w-sm leading-relaxed">
              Grab a polished PDF version with my experience, technical
              projects, and academic background for recruiting or hiring
              review.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href={profile.resumePath}
                download
                className="flex items-center justify-center gap-2 px-8 py-3.5 bg-gray-900 dark:bg-zinc-100 hover:bg-gray-800 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 rounded-full text-sm font-medium transition-colors shadow-sm w-full sm:w-auto"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
              <a
                href={profile.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-3.5 bg-white dark:bg-zinc-800/50 border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 hover:bg-gray-50 dark:hover:bg-zinc-800 text-gray-700 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-zinc-100 rounded-full text-sm font-medium transition-colors shadow-xs w-full sm:w-auto"
              >
                <FileText className="w-4 h-4" />
                View in Browser
              </a>
            </div>
          </div>

          {/* Right: Actual Resume Snapshot */}
          <div className="order-1 lg:order-2 flex justify-center w-full px-4">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[320px] sm:max-w-xs md:max-w-sm aspect-[8.5/11] bg-white dark:bg-zinc-900 rounded-lg shadow-xl border border-gray-100 dark:border-white/5 overflow-hidden cursor-pointer group"
              onClick={() => setIsModalOpen(true)}
            >
              <Image 
                src="/resume.png" 
                alt={`${profile.name} resume preview`}
                fill 
                sizes="(min-width: 1024px) 384px, 320px"
                className="object-contain object-top transition-transform duration-500 group-hover:scale-[1.02] p-2" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
            </motion.div>
          </div>

        </div>
      </div>

      {/* Full-Screen Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setIsModalOpen(false)}
          >
            <button 
              className="absolute top-4 right-4 md:top-6 md:right-6 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-all z-[101]"
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(false);
              }}
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl h-[85vh] md:h-[95vh] rounded-xl overflow-hidden shadow-2xl bg-white dark:bg-zinc-900"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src="/resume.png" 
                alt={`${profile.name} resume full view`}
                fill 
                sizes="(min-width: 768px) 1024px, 100vw"
                className="object-contain"
                quality={100}
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
