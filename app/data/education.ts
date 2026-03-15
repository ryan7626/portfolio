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
    institution: "University of California, Berkeley",
    degree: "B.S. Computer Science",
    dateRange: "Aug 2022 — May 2026",
    gpa: "3.8 / 4.0",
    coursework: [
      "Data Structures",
      "Algorithms",
      "Operating Systems",
      "Machine Learning",
    ],
  },
  {
    institution: "Springfield High School",
    degree: "High School Diploma",
    dateRange: "Aug 2018 — Jun 2022",
    gpa: "4.0 / 4.0",
    notes: "Valedictorian · AP Scholar with Distinction",
  },
];
