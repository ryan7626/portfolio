"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { cn } from "@/app/lib/utils";

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const links: SocialLink[] = [
  {
    icon: <Github className="w-[18px] h-[18px]" />,
    href: "https://github.com",
    label: "GitHub",
  },
  {
    icon: <Linkedin className="w-[18px] h-[18px]" />,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: <Mail className="w-[18px] h-[18px]" />,
    href: "mailto:hello@example.com",
    label: "Email",
  },
  {
    icon: <FileText className="w-[18px] h-[18px]" />,
    href: "/resume.pdf",
    label: "Resume",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.8,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 300 },
  },
};

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className={cn(
        "flex gap-5 mt-10 items-center justify-center relative z-10",
        className,
      )}
    >
      {links.map((link) => (
        <motion.a
          key={link.label}
          variants={itemVariants}
          href={link.href}
          target={link.href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noopener noreferrer"
          aria-label={link.label}
          className="text-gray-400 hover:text-gray-800 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {link.icon}
        </motion.a>
      ))}
    </motion.div>
  );
}
