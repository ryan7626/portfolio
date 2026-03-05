'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const skillClusters = [
  {
    title: 'Backend',
    skills: ['Python', 'C++', 'PostgreSQL', 'OS'],
    position: { x: 20, y: 30 },
  },
  {
    title: 'AI/ML',
    skills: ['PyTorch', 'TensorFlow', 'NLP', 'LLMs'],
    position: { x: 70, y: 20 },
  },
  {
    title: 'Web',
    skills: ['React', 'Next.js', 'Node', 'TypeScript'],
    position: { x: 45, y: 70 },
  },
];

export default function SkillsConstellation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [connections, setConnections] = useState<Array<{ x1: number; y1: number; x2: number; y2: number }>>([]);

  useEffect(() => {
    if (isInView) {
      // Calculate connections between skill clusters
      const newConnections: Array<{ x1: number; y1: number; x2: number; y2: number }> = [];
      for (let i = 0; i < skillClusters.length; i++) {
        for (let j = i + 1; j < skillClusters.length; j++) {
          newConnections.push({
            x1: skillClusters[i].position.x,
            y1: skillClusters[i].position.y,
            x2: skillClusters[j].position.x,
            y2: skillClusters[j].position.y,
          });
        }
      }
      setConnections(newConnections);
    }
  }, [isInView]);

  return (
    <section className="py-32 px-6 relative">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          Skill Constellations
        </motion.h2>

        <div className="relative h-96 md:h-[500px] overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            {/* Animated connections */}
            {connections.map((connection, index) => (
              <motion.line
                key={index}
                x1={`${connection.x1}%`}
                y1={`${connection.y1}%`}
                x2={`${connection.x2}%`}
                y2={`${connection.y2}%`}
                stroke="#6c5ce7"
                strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.3 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 2, delay: index * 0.2 }}
              />
            ))}

            {/* Skill clusters */}
            {skillClusters.map((cluster, index) => (
              <motion.g
                key={cluster.title}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                <circle
                  cx={`${cluster.position.x}%`}
                  cy={`${cluster.position.y}%`}
                  r="8"
                  fill="#6c5ce7"
                  fillOpacity="0.1"
                  stroke="#6c5ce7"
                  strokeWidth="1"
                />
                <circle
                  cx={`${cluster.position.x}%`}
                  cy={`${cluster.position.y}%`}
                  r="3"
                  fill="#6c5ce7"
                  className="animate-pulse"
                />

                {/* Skills orbiting around cluster */}
                {cluster.skills.map((skill, skillIndex) => {
                  const angle = (skillIndex / cluster.skills.length) * 2 * Math.PI;
                  const radius = 12;
                  const x = cluster.position.x + Math.cos(angle) * radius;
                  const y = cluster.position.y + Math.sin(angle) * radius;

                  return (
                    <motion.g
                      key={skill}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.3 + skillIndex * 0.1 }}
                    >
                      <circle
                        cx={`${x}%`}
                        cy={`${y}%`}
                        r="2"
                        fill="#3a86ff"
                        fillOpacity="0.6"
                      />
                      <text
                        x={`${x}%`}
                        y={`${y - 3}%`}
                        textAnchor="middle"
                        className="text-xs fill-white font-medium"
                        style={{ fontSize: '2px' }}
                      >
                        {skill}
                      </text>
                    </motion.g>
                  );
                })}

                {/* Cluster title */}
                <text
                  x={`${cluster.position.x}%`}
                  y={`${cluster.position.y + 12}%`}
                  textAnchor="middle"
                  className="text-sm fill-white font-semibold"
                  style={{ fontSize: '3px' }}
                >
                  {cluster.title}
                </text>
              </motion.g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}