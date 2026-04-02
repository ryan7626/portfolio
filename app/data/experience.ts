export interface ExperienceEntry {
  role: string;
  company: string;
  dateRange: string;
  location?: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "Teaching Assistant",
    company: "Rutgers University",
    dateRange: "August 2025 — January 2026",
    location: "New Brunswick, NJ",
    bullets: [
      "Lead weekly recitations and office hours for 50 students in CS344: Design and Analysis of Algorithms.",
      "Reinforce algorithm design, complexity analysis, and problem-solving strategies through guided review and discussion.",
      "Support students with debugging, conceptual clarification, and exam preparation in a rigorous upper-level computer science course.",
    ],
  },
  {
    role: "Student Tutor",
    company: "Rutgers Learning Center",
    dateRange: "January 2024 — January 2026",
    location: "New Brunswick, NJ",
    bullets: [
      "Provide one-on-one tutoring to 100+ students across AI, Python, data analytics, numerical methods, R, C, and data structures and algorithms.",
      "Adapt instruction to varied learning styles and skill levels, helping students strengthen technical fluency and academic confidence.",
    ],
  },
  {
    role: "Data Analyst",
    company: "Enigma Technical Society",
    dateRange: "September 2022 — August 2023",
    location: "Manipal, KA",
    bullets: [
      "Applied predictive analytics and data mining techniques to optimize event planning and resource allocation.",
      "Reduced resource waste by 25% and operating expenses by 18% through data-informed recommendations.",
      "Built interactive Power BI dashboards that improved planning visibility and accelerated decision-making by 40%.",
    ],
  },
  {
    role: "Web Developer",
    company: "Medilance Healthcare",
    dateRange: "May 2022 — August 2022",
    location: "Chandigarh, PB",
    bullets: [
      "Improved frontend performance for a large-scale healthcare platform by implementing lazy loading and asset optimization.",
      "Reduced page load times by 10-15% and improved overall browsing responsiveness.",
      "Restructured product catalog navigation to create a more intuitive user journey and increase engagement.",
    ],
  },
];
