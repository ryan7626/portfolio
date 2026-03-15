export type ProjectCategory = "All" | "Web" | "Machine Learning" | "Systems";

export interface ProjectEntry {
  id: string;
  title: string;
  category: ProjectCategory;
  shortDescription: string;
  longDescription: string;
  role: string;
  thumbnailUrl: string;
  screenshots?: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: ProjectEntry[] = [
  {
    id: "analytics-dashboard",
    title: "Real-time Analytics Dashboard",
    category: "Web",
    shortDescription: "A high-performance dashboard for internal stakeholders.",
    longDescription: "Architected and built a comprehensive analytics dashboard from the ground up to visualize large datasets in real-time. The system aggregates events across microservices and presents them in an interactive, low-latency UI. Focused heavily on client-side state management and canvas-based chart rendering to ensure buttery smooth 60fps performance even with thousands of data points.",
    role: "Lead Frontend Engineer",
    thumbnailUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/example/dashboard",
    liveUrl: "https://example.com/demo",
  },
  {
    id: "transformer-inference",
    title: "Optimized Transformer Inference",
    category: "Machine Learning",
    shortDescription: "Efficient inference framework reducing latency by 30%.",
    longDescription: "Developed a custom inference engine for large language models targeting edge devices. By implementing custom CUDA kernels and applying advanced quantization techniques (INT8 and FP8), achieved a 30% reduction in end-to-end latency and a 50% reduction in memory footprint without significant degradation in model perplexity.",
    role: "Machine Learning Researcher",
    thumbnailUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    technologies: ["Python", "PyTorch", "CUDA", "C++"],
    githubUrl: "https://github.com/example/inference",
  },
  {
    id: "distributed-db",
    title: "Distributed Key-Value Store",
    category: "Systems",
    shortDescription: "A fault-tolerant distributed database leveraging Raft.",
    longDescription: "Designed and implemented a distributed, fault-tolerant key-value store from scratch in Go. The system guarantees linearizable reads and writes under network partitions using the Raft consensus algorithm. Included comprehensive test suites simulating message drops, network partitions, and node crashes to verify correctness.",
    role: "Systems Engineer (Academic Project)",
    thumbnailUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    technologies: ["Go", "gRPC", "Raft Consensus"],
    githubUrl: "https://github.com/example/kvdb",
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    category: "Web",
    shortDescription: "Minimal, developer-focused portfolio designed with Next.js.",
    longDescription: "A fully custom portfolio website built to showcase engineering projects with an emphasis on performance, accessibility, and sleek design. Features custom WebGL/Canvas backgrounds, smooth scroll-triggered animations using Framer Motion, and a highly modular component architecture.",
    role: "Sole Developer & Designer",
    thumbnailUrl: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=800&auto=format&fit=crop",
    technologies: ["Next.js", "Framer Motion", "Tailwind v4", "Canvas API"],
    githubUrl: "https://github.com/example/portfolio",
    liveUrl: "https://example.com/portfolio",
  },
  {
    id: "nlp-pipeline",
    title: "Large-scale NLP Pipeline",
    category: "Machine Learning",
    shortDescription: "Data processing pipeline handling terabytes of text.",
    longDescription: "Built a scalable data ingestion and processing pipeline for cleaning, tokenizing, and embedding terabytes of raw text data from the web. The pipeline runs securely on distributed clusters and handles automated deduplication, PII masking, and quality filtering before feeding into model training infrastructure.",
    role: "Data Engineer",
    thumbnailUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop",
    technologies: ["Apache Spark", "Hugging Face", "AWS EMR", "Airflow"],
  },
];
