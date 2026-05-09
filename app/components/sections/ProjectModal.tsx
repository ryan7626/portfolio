"use client";

import { useEffect, useId, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import type { ProjectEntry } from "@/app/data/projects";

interface ProjectModalProps {
  project: ProjectEntry | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  // Close on Escape key
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [project]);

  // Handle overlay click
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          ref={overlayRef}
          onClick={handleOverlayClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl bg-white dark:bg-zinc-950 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-black/5 dark:border-white/10"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md rounded-full text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-zinc-100 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all focus:outline-hidden focus:ring-2 focus:ring-gray-300 dark:focus:ring-zinc-700"
              aria-label="Close project details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Scrollable content area */}
            <div className="overflow-y-auto w-full">
              {/* Hero Image */}
              <div className="relative w-full h-48 sm:h-80 bg-gray-100">
                <Image
                  src={project.thumbnailUrl}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 768px, 100vw"
                  className="object-cover"
                />
              </div>

              {/* Body */}
              <div className="p-6 sm:p-10">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-8">
                  <div>
                    <span className="text-xs font-mono text-primary uppercase tracking-wider mb-2 block">
                      {project.category}
                    </span>
                    <h2 
                      id={titleId}
                      className="text-2xl sm:text-3xl font-medium text-gray-900 dark:text-zinc-100 leading-tight mb-2"
                    >
                      {project.title}
                    </h2>
                    <p className="text-sm font-medium text-gray-500 dark:text-zinc-400">
                      {project.role}
                    </p>
                  </div>

                  {/* Action Links */}
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-zinc-900 hover:bg-gray-200 dark:hover:bg-zinc-800 text-gray-700 dark:text-zinc-300 rounded-full text-sm font-medium transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-zinc-100 hover:bg-gray-800 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 rounded-full text-sm font-medium transition-colors shadow-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                <div className="mb-10 grid gap-3 sm:grid-cols-2">
                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="rounded-lg border border-gray-100 bg-gray-50 px-4 py-3 dark:border-white/10 dark:bg-white/5"
                    >
                      <p className="text-sm font-medium text-gray-900 dark:text-zinc-100">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>

                {/* About Project */}
                <div className="mb-10">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-zinc-100 mb-4">Project Overview</h3>
                  <p className="text-gray-600 dark:text-zinc-400 leading-relaxed whitespace-pre-line">
                    {project.longDescription}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-10">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-zinc-100 mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-white/10 text-gray-600 dark:text-zinc-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Optional Additional Screenshots */}
                {project.screenshots && project.screenshots.length > 0 && (
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-zinc-100 mb-4">Gallery</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {project.screenshots.map((src, i) => (
                        <div key={src} className="relative h-48 rounded-xl overflow-hidden border border-gray-100 dark:border-white/10 shadow-xs">
                          <Image
                            src={src}
                            alt={`${project.title} screenshot ${i + 1}`}
                            fill
                            sizes="(min-width: 640px) 384px, 100vw"
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
