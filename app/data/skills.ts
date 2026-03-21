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
  { id: "python", label: "Python", category: "Core", x: 48, y: 52 },
  { id: "c", label: "C/C++", category: "Core", x: 37, y: 68 },
  { id: "java", label: "Java", category: "Core", x: 72, y: 36 },
  { id: "ts", label: "TypeScript", category: "Core", x: 24, y: 39 },
  
  // Web Dev
  { id: "react", label: "React", category: "Frontend", x: 12, y: 30 },
  { id: "next", label: "Next.js", category: "Frontend", x: 9, y: 51 },
  { id: "node", label: "Node.js", category: "Backend", x: 20, y: 17 },
  { id: "express", label: "Express", category: "Backend", x: 34, y: 12 },
  { id: "mongo", label: "MongoDB", category: "Backend", x: 55, y: 19 },

  // Machine Learning / AI
  { id: "ml", label: "Machine Learning", category: "Data", x: 68, y: 73 },
  { id: "pytorch", label: "PyTorch", category: "Data", x: 84, y: 82 },
  { id: "tf", label: "TensorFlow", category: "Data", x: 58, y: 87 },
  { id: "cv", label: "Computer Vision", category: "Data", x: 84, y: 57 },
  { id: "nlp", label: "NLP", category: "Data", x: 68, y: 53 },
  { id: "llm", label: "LLMs", category: "Data", x: 90, y: 35 },
  { id: "rag", label: "RAG", category: "Infra", x: 89, y: 20 },
  { id: "langchain", label: "LangChain", category: "Infra", x: 73, y: 15 },
  { id: "powerbi", label: "Power BI", category: "Data", x: 23, y: 83 },
];

export const skillLinks: SkillLink[] = [
  // Web ecosystem
  { source: "ts", target: "react" },
  { source: "react", target: "next" },
  { source: "ts", target: "node" },
  { source: "node", target: "express" },
  { source: "express", target: "mongo" },
  
  // Data/Backend
  { source: "python", target: "mongo" },
  { source: "node", target: "mongo" },
  { source: "react", target: "node" },

  // ML/AI Core
  { source: "python", target: "ml" },
  { source: "python", target: "pytorch" },
  { source: "python", target: "tf" },
  { source: "python", target: "langchain" },
  { source: "python", target: "powerbi" },
  { source: "python", target: "cv" },
  { source: "python", target: "nlp" },
  
  // ML frameworks & domains
  { source: "ml", target: "pytorch" },
  { source: "ml", target: "tf" },
  { source: "ml", target: "cv" },
  { source: "ml", target: "nlp" },
  { source: "nlp", target: "llm" },
  { source: "llm", target: "rag" },
  { source: "rag", target: "langchain" },
  { source: "c", target: "cv" },
  
  // Math / Stats
  { source: "powerbi", target: "ml" },
  { source: "java", target: "node" },
];
