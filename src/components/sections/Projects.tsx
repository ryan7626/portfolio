'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Credit Card Fraud Detection',
    description: 'XGBoost-LSTM ensemble model achieving 99.2% accuracy',
    metrics: ['99.2% Accuracy', '1000+ TPS', '40% Fewer False Positives'],
    tech: ['Python', 'XGBoost', 'LSTM', 'Scikit-learn'],
    github: 'https://github.com/ryan7626/fraud-detection',
    color: 'from-blue-500 to-purple-600',
  },
  {
    id: 2,
    title: 'AutoResearcher Pro',
    description: 'GPT-4 powered research assistant with RAG pipeline',
    metrics: ['LangChain Integration', 'HuggingFace Models', 'Agentic AI'],
    tech: ['Python', 'LangChain', 'GPT-4', 'HuggingFace'],
    github: 'https://github.com/ryan7626/autoresearcher',
    color: 'from-purple-500 to-pink-600',
  },
  {
    id: 3,
    title: 'Real-Time Gesture Recognition',
    description: 'GPU-accelerated PyTorch model with 60% faster inference',
    metrics: ['60% Faster Inference', 'OpenCV Integration', 'MediaPipe'],
    tech: ['PyTorch', 'OpenCV', 'MediaPipe', 'CUDA'],
    github: 'https://github.com/ryan7626/gesture-recognition',
    color: 'from-green-500 to-blue-600',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 px-6">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          Planetary Systems
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
            >
              <div className={`w-full aspect-square rounded-full bg-gradient-to-br ${project.color} p-1 shadow-2xl`}>
                <div className="w-full h-full rounded-full bg-[#070b14] flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <div className="text-center p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </div>

              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 rounded-full bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              >
                <div className="text-center p-4">
                  <div className="space-y-2 mb-4">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="text-sm text-[#6c5ce7] font-medium">
                        {metric}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-[#6c5ce7] bg-opacity-20 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-[#6c5ce7] text-white rounded-full text-sm font-medium hover:bg-[#5a4fcf] transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View on GitHub →
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}