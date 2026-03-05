'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Philosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto text-center">
        <motion.blockquote
          className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          "In complex systems, small forces create massive effects.
          <br />
          I design architectures that scale intelligently."
        </motion.blockquote>

        <motion.div
          className="w-24 h-px bg-gradient-to-r from-transparent via-[#6c5ce7] to-transparent mx-auto"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
    </section>
  );
}