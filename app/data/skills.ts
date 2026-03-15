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
  { id: "ts", label: "TypeScript", category: "Core", x: 35, y: 50 },
  { id: "python", label: "Python", category: "Core", x: 60, y: 50 },
  { id: "react", label: "React", category: "Frontend", x: 15, y: 50 },
  { id: "next", label: "Next.js", category: "Frontend", x: 25, y: 30 },
  { id: "tailwind", label: "Tailwind CSS", category: "Frontend", x: 25, y: 70 },
  { id: "node", label: "Node.js", category: "Backend", x: 45, y: 30 },
  { id: "go", label: "Go", category: "Backend", x: 75, y: 30 },
  { id: "postgres", label: "PostgreSQL", category: "Backend", x: 80, y: 50 },
  { id: "redis", label: "Redis", category: "Backend", x: 75, y: 70 },
  { id: "docker", label: "Docker", category: "Infra", x: 60, y: 15 },
  { id: "aws", label: "AWS", category: "Infra", x: 80, y: 15 },
  { id: "pytorch", label: "PyTorch", category: "Data", x: 50, y: 75 },
  { id: "pandas", label: "Pandas", category: "Data", x: 70, y: 75 },
  { id: "ml", label: "Machine Learning", category: "Data", x: 60, y: 90 },
];

export const skillLinks: SkillLink[] = [
  // Core connections
  { source: "ts", target: "react" },
  { source: "ts", target: "next" },
  { source: "ts", target: "node" },
  { source: "react", target: "next" },
  { source: "react", target: "tailwind" },
  
  { source: "python", target: "pytorch" },
  { source: "python", target: "pandas" },
  { source: "python", target: "node" },
  { source: "python", target: "go" },
  
  { source: "node", target: "postgres" },
  { source: "node", target: "redis" },
  { source: "go", target: "postgres" },
  { source: "go", target: "redis" },
  
  { source: "pytorch", target: "ml" },
  { source: "pandas", target: "ml" },
  
  { source: "docker", target: "node" },
  { source: "docker", target: "go" },
  { source: "aws", target: "docker" },
  { source: "aws", target: "postgres" },
];
