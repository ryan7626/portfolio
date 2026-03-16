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
    institution: "Rutgers NB, State University of New Jersey",
    degree: "BSc Computer Science, Minor in Mathematics",
    dateRange: "Sept 2023 — Dec 2025",
    gpa: "3.8 / 4.0",
    coursework: [
      "Artificial Intelligence",
      "Machine Learning",
      "Computer Security",
      "Graphics",
      "Artificial Neural Networks",
      "Operating Systems",
      "Data Structures and Algorithms"
    ],
    notes: "Dean's List in all semesters · Magna Cum Laude",
  },
];
