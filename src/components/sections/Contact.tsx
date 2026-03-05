'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-32 px-6">
      <div ref={ref} className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          Let's Build Something That Scales Beyond Gravity
        </motion.h2>

        <motion.p
          className="text-xl text-gray-300 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ready to explore new technological frontiers together?
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#6c5ce7] text-white rounded-full font-semibold hover:bg-[#5a4fcf] transition-colors duration-300"
          >
            Download Resume
          </a>
          <a
            href="https://github.com/ryan7626"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-[#6c5ce7] text-[#6c5ce7] rounded-full font-semibold hover:bg-[#6c5ce7] hover:text-white transition-all duration-300"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/aryan-raut"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-[#6c5ce7] text-[#6c5ce7] rounded-full font-semibold hover:bg-[#6c5ce7] hover:text-white transition-all duration-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:aryan.raut@rutgers.edu"
            className="px-8 py-4 border border-[#6c5ce7] text-[#6c5ce7] rounded-full font-semibold hover:bg-[#6c5ce7] hover:text-white transition-all duration-300"
          >
            Email
          </a>
        </motion.div>

        <motion.div
          className="mt-16 pt-8 border-t border-gray-700"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-gray-400">
            Aryan Raut • Rutgers University Computer Science • 3.8 GPA Magna Cum Laude
          </p>
        </motion.div>
      </div>
    </section>
  );
}