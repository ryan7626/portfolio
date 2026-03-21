export interface EducationEntry {
  institution: string;
  degree: string;
  dateRange: string;
  gpa?: string;
  coursework?: string[];
  notes?: string;
}

export const education: EducationEntry[] = [
  {
    institution: "Rutgers University-New Brunswick",
    degree: "B.S. in Computer Science, Minor in Mathematics",
    dateRange: "Sept 2023 — Dec 2025",
    gpa: "3.8/4.0",
    coursework: [
      "Artificial Intelligence",
      "Machine Learning",
      "Computer Security",
      "Computer Graphics",
      "Artificial Neural Networks",
      "Operating Systems",
      "Data Structures and Algorithms",
    ],
    notes: "Dean's List every semester · Magna Cum Laude",
  },
];
