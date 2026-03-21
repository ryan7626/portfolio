"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";
import { projects, ProjectCategory, ProjectEntry } from "@/app/data/projects";
import { ProjectModal } from "./ProjectModal";
import { cn } from "@/app/lib/utils";
import Image from "next/image";

const categories: ProjectCategory[] = ["All", "AI/ML", "Full Stack"];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectEntry | null>(null);

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory,
  );

  return (
    <SectionWrapper id="projects">
      <div className="max-w-5xl w-full">
        {/* Section header */}
        <h2 className="text-3xl font-medium tracking-tight text-gray-900 dark:text-zinc-100 mb-2 text-center">
          Projects
        </h2>
        <p className="text-sm text-gray-400 dark:text-zinc-400 text-center mb-10 tracking-wide">
          Selected engineering and machine learning work
        </p>

        {/* Category Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category
                  ? "bg-gray-900 dark:bg-zinc-100 text-white dark:text-zinc-900 shadow-md"
                  : "bg-gray-100 dark:bg-zinc-800/50 text-gray-500 dark:text-zinc-400 hover:bg-gray-200 dark:hover:bg-zinc-800 hover:text-gray-900 dark:hover:text-zinc-100",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-white dark:bg-zinc-900/50 border border-gray-100 dark:border-white/5 rounded-2xl overflow-hidden hover:shadow-xl dark:shadow-none transition-all duration-500 hover:-translate-y-1 cursor-pointer"
              >
                {/* Thumbnail container */}
                <div className="relative h-48 w-full bg-gray-100 dark:bg-zinc-800/50 overflow-hidden">
                  <Image
                    src={project.thumbnailUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized // using unsplash placeholders for now to avoid next config domains
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-gray-400 dark:text-zinc-500 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-zinc-100 mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-zinc-400 leading-relaxed line-clamp-2">
                    {project.shortDescription}
                  </p>
                  
                  {/* Subtle indication it's clickable (for future modal) */}
                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-white/5 flex items-center text-xs font-medium text-gray-400 dark:text-zinc-500 group-hover:text-gray-900 dark:group-hover:text-zinc-300 transition-colors">
                    Open Case Study &rarr;
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </SectionWrapper>
  );
}
