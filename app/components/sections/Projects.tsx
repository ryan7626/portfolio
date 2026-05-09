"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";
import { SectionHeader } from "./SectionHeader";
import { projects, projectCategories } from "@/app/data/projects";
import type { ProjectEntry, ProjectFilter } from "@/app/data/projects";
import { ProjectModal } from "./ProjectModal";
import { cn } from "@/app/lib/utils";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import {
  fadeUp,
  smoothEase,
  staggerContainer,
  viewportOnce,
} from "@/app/lib/motion";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectFilter>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectEntry | null>(null);

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory,
  );

  return (
    <SectionWrapper id="projects">
      <div className="max-w-6xl w-full">
        <SectionHeader
          title="Projects"
          description="Selected engineering and machine learning work"
        />

        {/* Category Selector */}
        <motion.div
          className="mb-12 flex flex-wrap items-center justify-center gap-2"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {projectCategories.map((category) => (
            <motion.button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              variants={fadeUp}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              layout
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category
                  ? "bg-gray-900 dark:bg-zinc-100 text-white dark:text-zinc-900 shadow-md"
                  : "bg-gray-100 dark:bg-zinc-800/50 text-gray-500 dark:text-zinc-400 hover:bg-gray-200 dark:hover:bg-zinc-800 hover:text-gray-900 dark:hover:text-zinc-100",
              )}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.button
                type="button"
                layout
                initial={{ opacity: 0, scale: 0.94, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 16 }}
                transition={{ duration: 0.35, ease: smoothEase }}
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.985 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                aria-label={`Open case study for ${project.title}`}
                className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-lg border border-gray-200/70 bg-white text-left shadow-sm transition-all duration-500 hover:border-gray-300 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 dark:border-white/10 dark:bg-zinc-950/70 dark:shadow-none dark:hover:border-white/20 dark:focus-visible:ring-zinc-700"
              >
                {/* Thumbnail container */}
                <div className="relative h-44 w-full overflow-hidden bg-gray-100 dark:bg-zinc-900">
                  <Image
                    src={project.thumbnailUrl}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full border border-white/20 bg-black/35 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs font-medium text-white/75">
                      {project.role}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-zinc-100 leading-tight">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3 dark:text-zinc-400">
                    {project.shortDescription}
                  </p>

                  <div className="mt-5 space-y-2">
                    {project.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-2 rounded-md border border-gray-100 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gray-900 dark:bg-zinc-100" />
                        <span className="leading-snug">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-gray-100 px-2.5 py-1 text-[11px] font-medium text-gray-500 dark:border-white/10 dark:text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="rounded-full border border-gray-100 px-2.5 py-1 text-[11px] font-medium text-gray-400 dark:border-white/10 dark:text-zinc-500">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div
                    className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4 text-xs font-medium text-gray-400 transition-colors group-hover:text-gray-900 dark:border-white/5 dark:text-zinc-500 dark:group-hover:text-zinc-300"
                  >
                    <span>View case study</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </motion.button>
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
