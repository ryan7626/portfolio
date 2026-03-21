"use client";

import { SectionWrapper } from "./SectionWrapper";
import { Download, FileText } from "lucide-react";
import { motion } from "framer-motion";

export function Resume() {
  return (
    <SectionWrapper id="resume" className="bg-[#fafafa]">
      <div className="max-w-4xl w-full flex flex-col items-center">
        <h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-2 text-center">
          Resume
        </h2>
        <p className="text-sm text-gray-400 text-center mb-12 tracking-wide">
          Download the full PDF version
        </p>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left: Action CTA */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 px-4">
            <h3 className="text-2xl font-medium text-gray-900 mb-4">
              Keep a Copy of My Resume
            </h3>
            <p className="text-gray-500 mb-8 max-w-sm leading-relaxed">
              Grab a polished PDF version with my experience, technical
              projects, and academic background for recruiting or hiring
              review.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="/resume.pdf"
                download
                className="flex items-center justify-center gap-2 px-8 py-3.5 bg-gray-900 hover:bg-gray-800 text-white rounded-full text-sm font-medium transition-colors shadow-sm w-full sm:w-auto"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-3.5 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 rounded-full text-sm font-medium transition-colors shadow-xs w-full sm:w-auto"
              >
                <FileText className="w-4 h-4" />
                View in Browser
              </a>
            </div>
          </div>

          {/* Right: Stylized Preview Document */}
          <div className="order-1 lg:order-2 flex justify-center w-full px-4">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[320px] sm:max-w-xs md:max-w-sm aspect-[1/1.414] bg-white rounded-lg shadow-xl border border-gray-100 p-6 sm:p-8 flex flex-col gap-4 overflow-hidden select-none pointer-events-none"
            >
              {/* Decorative document header lines */}
              <div className="w-full flex justify-between items-start mb-2">
                <div className="space-y-2">
                  <div className="h-3 sm:h-4 w-24 sm:w-32 bg-gray-800 rounded-sm" />
                  <div className="h-2 w-24 sm:w-28 bg-gray-300 rounded-sm" />
                </div>
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gray-100" />
              </div>

              {/* Decorative body blocks */}
              <div className="w-full h-px bg-gray-100 my-1" />
              
              <div className="space-y-3 mt-2">
                <div className="h-2 w-1/4 bg-gray-200 rounded-sm" />
                <div className="space-y-2">
                  <div className="h-1.5 w-full bg-gray-100 rounded-sm" />
                  <div className="h-1.5 w-5/6 bg-gray-100 rounded-sm" />
                  <div className="h-1.5 w-4/6 bg-gray-100 rounded-sm" />
                </div>
              </div>

              <div className="space-y-3 mt-4">
                <div className="h-2 w-1/3 bg-gray-200 rounded-sm" />
                <div className="space-y-2">
                  <div className="h-1.5 w-full bg-gray-100 rounded-sm" />
                  <div className="h-1.5 w-full bg-gray-100 rounded-sm" />
                  <div className="h-1.5 w-3/4 bg-gray-100 rounded-sm" />
                </div>
              </div>

              <div className="space-y-3 mt-4">
                <div className="h-2 w-1/4 bg-gray-200 rounded-sm" />
                <div className="space-y-2 flex gap-2">
                  <div className="h-4 w-12 bg-gray-100 rounded-full" />
                  <div className="h-4 w-16 bg-gray-100 rounded-full" />
                  <div className="h-4 w-14 bg-gray-100 rounded-full" />
                </div>
              </div>

              {/* Faded bottom gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-white to-transparent" />
            </motion.div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}
