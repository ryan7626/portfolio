'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const metrics = [
  { label: 'Fraud Detection Accuracy', value: 99.2, suffix: '%', duration: 2000 },
  { label: 'Transactions per Second', value: 1000, suffix: '+', duration: 1500 },
  { label: 'CNN Accuracy', value: 98.7, suffix: '%', duration: 1800 },
  { label: 'GPA', value: 3.8, suffix: '', duration: 1000 },
  { label: 'Students Mentored', value: 100, suffix: '+', duration: 1200 },
];

function AnimatedCounter({
  value,
  suffix,
  duration,
  isVisible
}: {
  value: number;
  suffix: string;
  duration: number;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(value * progress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration, isVisible]);

  return (
    <span className="text-4xl md:text-5xl font-bold text-[#6c5ce7]">
      {count.toFixed(value % 1 === 0 ? 0 : 1)}{suffix}
    </span>
  );
}

export default function Metrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-transparent to-[#0a0a0a]">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          Cosmic Signals
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="mb-4">
                <AnimatedCounter
                  value={metric.value}
                  suffix={metric.suffix}
                  duration={metric.duration}
                  isVisible={isInView}
                />
              </div>
              <p className="text-gray-300 text-lg">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}