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
    dateRange: "Sept 2025 — Current",
    location: "New Brunswick, NJ",
    bullets: [
      "Leading a class of 50 students in CS344: Design and Analysis of Algorithms.",
      "Holding weekly in-person recitations to reinforce theoretical concepts and algorithm design paradigms.",
      "Conducting consistent office hours to provide technical assistance, debug student logic, and explain grading rubrics.",
    ],
  },
  {
    role: "Student Tutor",
    company: "Rutgers Learning Center",
    dateRange: "Jan 2024 — Current",
    location: "New Brunswick, NJ",
    bullets: [
      "Tutored 100+ students in various software and technology skills including AI, Python, Data Analytics, Numerical Analytics, R, C, and DSA.",
      "Conducted one-on-one appointments to adapt teaching methods for different foundational skill levels.",
    ],
  },
  {
    role: "Data Analyst",
    company: "Enigma Technical Society",
    dateRange: "Sept 2022 — Aug 2023",
    location: "Manipal, KA",
    bullets: [
      "Collaborated with the data analytics team to leverage predictive models assessing organizational resource distribution.",
      "Employed Data Mining techniques to cut event resource waste by 25% and reduce overall expenses by 18%.",
      "Improved decision-making speed by 40% with interactive Power BI dashboards.",
    ],
  },
  {
    role: "Web Developer",
    company: "Medilance Healthcare",
    dateRange: "May 2022 — Aug 2022",
    location: "Chandigarh, PB",
    bullets: [
      "Worked within the Web Development team to enhance overall frontend performance and user experience.",
      "Reduced page load times by 10-15% through strategic lazy loading and asset optimization.",
      "Organized product catalog infrastructure for better navigation across a large-scale website system.",
    ],
  },
];
