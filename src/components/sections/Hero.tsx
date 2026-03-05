'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div ref={ref} className="text-center px-6 max-w-4xl">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Engineering Intelligent Systems
          <br />
          <span className="text-[#6c5ce7]">Across Complex Universes</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        >
          AI • Distributed Systems • High-Performance Architectures
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-[#6c5ce7] text-white rounded-full font-semibold hover:bg-[#5a4fcf] transition-colors duration-300"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-[#6c5ce7] text-[#6c5ce7] rounded-full font-semibold hover:bg-[#6c5ce7] hover:text-white transition-all duration-300"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}