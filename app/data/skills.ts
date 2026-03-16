export type SkillCategory = "Core" | "Frontend" | "Backend" | "Data" | "Infra";

export interface SkillNode {
  id: string;
  label: string;
  category: SkillCategory;
  x: number; // 0-100 percentage
  y: number; // 0-100 percentage
}

export interface SkillLink {
  source: string;
  target: string;
}

// Nodes spread out logically for a nice responsive layout
export const skillNodes: SkillNode[] = [
  // Core Languages
  { id: "python", label: "Python", category: "Core", x: 50, y: 50 },
  { id: "c", label: "C/C++", category: "Core", x: 35, y: 65 },
  { id: "java", label: "Java", category: "Core", x: 70, y: 35 },
  { id: "ts", label: "TypeScript", category: "Core", x: 25, y: 40 },
  { id: "js", label: "JavaScript", category: "Core", x: 35, y: 25 },
  
  // Web Dev
  { id: "react", label: "React", category: "Frontend", x: 15, y: 30 },
  { id: "next", label: "Next.js", category: "Frontend", x: 10, y: 50 },
  { id: "node", label: "Node.js", category: "Backend", x: 20, y: 15 },
  { id: "express", label: "Express", category: "Backend", x: 35, y: 10 },
  { id: "mongo", label: "MongoDB", category: "Backend", x: 55, y: 20 },
  { id: "mysql", label: "MySQL", category: "Data", x: 75, y: 20 },

  // Machine Learning / AI
  { id: "ml", label: "Machine Learning", category: "Data", x: 70, y: 70 },
  { id: "pytorch", label: "PyTorch", category: "Data", x: 85, y: 80 },
  { id: "tf", label: "TensorFlow", category: "Data", x: 60, y: 85 },
  { id: "cv", label: "Computer Vision", category: "Data", x: 80, y: 55 },
  { id: "opencv", label: "OpenCV", category: "Data", x: 90, y: 40 },
  { id: "scikit", label: "scikit-learn", category: "Data", x: 45, y: 75 },

  // Math/Other
  { id: "r", label: "R", category: "Data", x: 30, y: 85 },
  { id: "matlab", label: "MATLAB", category: "Data", x: 15, y: 75 },
];

export const skillLinks: SkillLink[] = [
  // Web ecosystem
  { source: "js", target: "ts" },
  { source: "js", target: "react" },
  { source: "ts", target: "react" },
  { source: "react", target: "next" },
  { source: "js", target: "node" },
  { source: "ts", target: "node" },
  { source: "node", target: "express" },
  { source: "express", target: "mongo" },
  
  // Data/Backend
  { source: "python", target: "mysql" },
  { source: "java", target: "mysql" },
  { source: "python", target: "mongo" },

  // ML/AI Core
  { source: "python", target: "ml" },
  { source: "python", target: "pytorch" },
  { source: "python", target: "tf" },
  { source: "python", target: "scikit" },
  { source: "python", target: "cv" },
  
  // ML frameworks & domains
  { source: "ml", target: "pytorch" },
  { source: "ml", target: "tf" },
  { source: "ml", target: "cv" },
  { source: "ml", target: "scikit" },
  { source: "cv", target: "opencv" },
  { source: "c", target: "cv" },
  { source: "c", target: "opencv" },
  
  // Math / Stats
  { source: "r", target: "ml" },
  { source: "matlab", target: "ml" },
  { source: "r", target: "python" },
];
