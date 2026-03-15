import React from 'react';
import { motion } from 'motion/react';

export function HeroContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center justify-center relative z-10 text-center select-none"
    >
      <motion.h1
        variants={itemVariants}
        className="text-4xl md:text-6xl font-medium tracking-tight text-gray-900 mb-4"
        style={{ letterSpacing: '-0.02em' }}
      >
        Alexander Smith
      </motion.h1>
      
      <motion.div
        variants={itemVariants}
        className="h-px w-12 bg-gray-300 mb-6 mx-auto"
      />
      
      <motion.p
        variants={itemVariants}
        className="text-lg md:text-xl text-gray-500 font-light tracking-wide max-w-lg mx-auto leading-relaxed"
      >
        Crafting elegant software solutions with precision, 
        minimalism, and intelligent design.
      </motion.p>
    </motion.div>
  );
}
