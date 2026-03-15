"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { ProjectEntry } from "@/app/data/projects";

interface ProjectModalProps {
  project: ProjectEntry | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
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
            className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all focus:outline-hidden focus:ring-2 focus:ring-gray-300"
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
                  className="object-cover"
                  unoptimized
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
                      id="modal-title"
                      className="text-2xl sm:text-3xl font-medium text-gray-900 leading-tight mb-2"
                    >
                      {project.title}
                    </h2>
                    <p className="text-sm font-medium text-gray-500">
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
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm font-medium transition-colors"
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
                        className="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-full text-sm font-medium transition-colors shadow-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* About Project */}
                <div className="mb-10">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">About the Project</h3>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {project.longDescription}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-10">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-gray-50 border border-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Optional Additional Screenshots */}
                {project.screenshots && project.screenshots.length > 0 && (
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Gallery</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {project.screenshots.map((src, i) => (
                        <div key={i} className="relative h-48 rounded-xl overflow-hidden border border-gray-100 shadow-xs">
                          <Image
                            src={src}
                            alt={`${project.title} screenshot ${i + 1}`}
                            fill
                            className="object-cover"
                            unoptimized
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
