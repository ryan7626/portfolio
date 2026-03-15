import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function SocialLinks() {
  const links = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:hello@example.com" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex gap-6 mt-12 items-center justify-center relative z-10"
    >
      {links.map((link, index) => (
        <motion.a
          key={index}
          variants={itemVariants}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-900 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {link.icon}
        </motion.a>
      ))}
    </motion.div>
  );
}
