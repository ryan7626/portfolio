"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";
import { skillNodes, skillLinks } from "@/app/data/skills";
import { cn } from "@/app/lib/utils";

export function Skills() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle outside click to deselect on mobile
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setHoveredNode(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // Pre-calculate connected nodes when hovering
  const connectedNodes = hoveredNode
    ? skillLinks
        .filter((l) => l.source === hoveredNode || l.target === hoveredNode)
        .map((l) => (l.source === hoveredNode ? l.target : l.source))
    : [];

  return (
    <SectionWrapper id="skills">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-medium tracking-tight text-gray-900 dark:text-zinc-100 mb-2 text-center">
          Skills
        </h2>
        <p className="text-sm text-gray-400 dark:text-zinc-400 text-center mb-10 tracking-wide">
          Core stack across software, AI/ML, and analytics
        </p>

        {/* Responsive graph container */}
        <div 
          ref={containerRef}
          className="relative w-full aspect-square md:aspect-4/3 lg:aspect-video bg-white dark:bg-zinc-900/40 rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm overflow-hidden select-none"
        >
          
          {/* SVG layer for edges */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {skillLinks.map((link, i) => {
              const sourceNode = skillNodes.find((n) => n.id === link.source)!;
              const targetNode = skillNodes.find((n) => n.id === link.target)!;
              
              const isActive =
                hoveredNode &&
                (link.source === hoveredNode || link.target === hoveredNode);
              const isFaded = hoveredNode && !isActive;

              return (
                <motion.line
                  key={`${link.source}-${link.target}-${i}`}
                  x1={`${sourceNode.x}%`}
                  y1={`${sourceNode.y}%`}
                  x2={`${targetNode.x}%`}
                  y2={`${targetNode.y}%`}
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.05 }}
                  className={cn(
                    "transition-all duration-300",
                    isActive
                      ? "stroke-gray-900 dark:stroke-zinc-300 stroke-[2px]"
                      : isFaded
                      ? "stroke-gray-100 dark:stroke-zinc-800/30 stroke-[1px] opacity-30"
                      : "stroke-gray-200 dark:stroke-zinc-800 stroke-[1.5px]"
                  )}
                />
              );
            })}
          </svg>

          {/* HTML layer for nodes & text labels */}
          {skillNodes.map((node, i) => {
            const isHovered = hoveredNode === node.id;
            const isConnected = connectedNodes.includes(node.id);
            const isFaded = hoveredNode && !isHovered && !isConnected;

            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="absolute z-10"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                // Support touch devices
                onClick={() => setHoveredNode(node.id)}
              >
                {/* Hit area padding & centering */}
                <div className="group relative -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center p-6 cursor-pointer">
                  
                  {/* The dot */}
                  <div
                    className={cn(
                      "w-2.5 h-2.5 rounded-full transition-all duration-300",
                      isHovered || isConnected
                        ? "bg-gray-900 dark:bg-zinc-100 scale-125 shadow-[0_0_12px_rgba(0,0,0,0.15)] dark:shadow-[0_0_12px_rgba(255,255,255,0.15)]"
                        : isFaded
                        ? "bg-gray-200 dark:bg-zinc-800 opacity-50"
                        : "bg-white dark:bg-zinc-950 border-2 border-gray-300 dark:border-zinc-700"
                    )}
                  />
                  
                  {/* The label */}
                  <span
                    className={cn(
                      "absolute top-6 whitespace-nowrap text-xs transition-all duration-300 pointer-events-none",
                      isHovered || isConnected
                        ? "text-gray-900 dark:text-zinc-100 font-semibold"
                        : isFaded
                        ? "text-gray-300 dark:text-zinc-600 opacity-50"
                        : "text-gray-500 dark:text-zinc-400 font-medium"
                    )}
                  >
                    {node.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
