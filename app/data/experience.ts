export interface ExperienceEntry {
  role: string;
  company: string;
  dateRange: string;
  location?: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "Software Engineering Intern",
    company: "Acme Technologies",
    dateRange: "Jun 2025 — Aug 2025",
    location: "San Francisco, CA",
    bullets: [
      "Built and shipped a real-time analytics dashboard used by 50+ internal stakeholders",
      "Reduced API response times by 40% through query optimization and caching strategies",
      "Collaborated with the design team to implement responsive, accessible UI components",
    ],
  },
  {
    role: "Undergraduate Research Assistant",
    company: "AI & Systems Lab",
    dateRange: "Jan 2024 — May 2025",
    location: "Berkeley, CA",
    bullets: [
      "Developed data pipelines for processing large-scale NLP datasets",
      "Co-authored a paper on efficient transformer inference submitted to a top venue",
      "Maintained experiment tracking infrastructure using Python and Docker",
    ],
  },
  {
    role: "Teaching Assistant",
    company: "Department of Computer Science",
    dateRange: "Aug 2023 — Dec 2023",
    bullets: [
      "Led weekly discussion sections of 30+ students for introductory CS course",
      "Held office hours and graded assignments with constructive feedback",
    ],
  },
];
