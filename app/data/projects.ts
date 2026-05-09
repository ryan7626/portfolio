export type ProjectCategory =
  | "AI/ML"
  | "Full Stack"
  | "Developer Tools"
  | "Spatial AI"
  | "Browser Extension"
  | "Frontend"
  | "Game"
  | "Robotics Security";
export type ProjectFilter = "All" | ProjectCategory;

export const projectCategories: ProjectFilter[] = [
  "All",
  "AI/ML",
  "Full Stack",
  "Developer Tools",
  "Spatial AI",
  "Browser Extension",
  "Frontend",
  "Game",
  "Robotics Security",
];

export interface ProjectEntry {
  id: string;
  title: string;
  category: ProjectCategory;
  shortDescription: string;
  longDescription: string;
  role: string;
  highlights: string[];
  thumbnailUrl: string;
  screenshots?: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: ProjectEntry[] = [
  {
    id: "language-translation-analysis",
    title: "Language Translation Accuracy Analysis",
    category: "AI/ML",
    shortDescription:
      "Benchmarked GPT-3.5, Google Translate, and OPUS-MT across multilingual evaluation tasks.",
    longDescription:
      "Developed a machine translation evaluation framework comparing GPT-3.5, Google Translate, and OPUS-MT across multiple language pairs. Fine-tuned OPUS-MT for low-resource languages, improving BLEU scores by 7% while using TensorFlow and Hadoop to reduce training time by 35%.",
    role: "ML Researcher",
    highlights: ["7% BLEU improvement", "35% faster training"],
    thumbnailUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800&auto=format&fit=crop",
    technologies: ["TensorFlow", "Hadoop", "Python", "NLP"],
    githubUrl: "https://github.com/ryan7626",
  },
  {
    id: "fraud-detection",
    title: "Credit Card Fraud Detection",
    category: "AI/ML",
    shortDescription:
      "High-accuracy fraud detection pipeline with real-time anomaly detection throughput.",
    longDescription:
      "Engineered an XGBoost-LSTM ensemble that achieved 99.2% fraud detection accuracy on Kaggle's dataset. Improved F1 score from 0.82 to 0.91 using SMOTE, built a PyTorch anomaly detection pipeline capable of processing 1,000+ transactions per second, and reduced false positives by 40% through feature engineering and threshold optimization.",
    role: "Machine Learning Engineer",
    highlights: ["99.2% detection accuracy", "40% fewer false positives"],
    thumbnailUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    technologies: ["PyTorch", "XGBoost", "LSTM", "SMOTE", "Python"],
    githubUrl: "https://github.com/ryan7626",
  },
  {
    id: "gesture-recognition",
    title: "Real-Time Gesture Recognition",
    category: "AI/ML",
    shortDescription:
      "Computer vision system for low-latency, real-time gesture control.",
    longDescription:
      "Built a real-time gesture recognition system by training a GPU-accelerated PyTorch and CoreML model on a custom landmark dataset. Integrated OpenCV and MediaPipe to improve accuracy and reduce inference time by 60%.",
    role: "Computer Vision Engineer",
    highlights: ["60% lower inference time", "GPU and CoreML pipeline"],
    thumbnailUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
    technologies: ["Python", "OpenCV", "MediaPipe", "PyTorch", "CoreML", "scikit-learn"],
    githubUrl: "https://github.com/ryan7626",
  },
  {
    id: "face-digit-classification",
    title: "Face & Digit Classification",
    category: "AI/ML",
    shortDescription:
      "CNN-based recognition pipeline for digit and face classification.",
    longDescription:
      "Implemented a computer vision pipeline using CNNs for digit and face recognition, achieving 98.7% accuracy on the MNIST digit classifier and 95.3% accuracy on face recognition tasks with GPU acceleration.",
    role: "Computer Vision Developer",
    highlights: ["98.7% MNIST accuracy", "95.3% face accuracy"],
    thumbnailUrl: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=800&auto=format&fit=crop",
    technologies: ["PyTorch", "OpenCV", "scikit-learn", "NumPy", "CUDA"],
    githubUrl: "https://github.com/ryan7626",
  },
  {
    id: "autoresearcher-pro",
    title: "AutoResearcher Pro",
    category: "AI/ML",
    shortDescription:
      "Agentic research assistant powered by GPT-4 and retrieval-augmented workflows.",
    longDescription:
      "Built an agentic AI research assistant that autonomously processes academic queries using OpenAI GPT-4 and sentence-transformers for retrieval-augmented generation, document summarization, and insight extraction through a Streamlit interface.",
    role: "AI Software Engineer",
    highlights: ["RAG research workflow", "Automated insight extraction"],
    thumbnailUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    technologies: ["Python", "LangChain", "OpenAI API", "Hugging Face Transformers", "Streamlit"],
    githubUrl: "https://github.com/ryan7626",
  },
  {
    id: "evalyn",
    title: "Evalyn",
    category: "Developer Tools",
    shortDescription:
      "Python CLI agent for overnight codebase testing, reporting, and safe LLM-assisted repair.",
    longDescription:
      "Built Evalyn, a Python CLI that analyzes git diffs, generates reviewable markdown test plans, runs approved test categories on isolated branches, and attempts LLM-guided repairs without committing changes. The system includes Click and Rich CLI commands, Anthropic and OpenRouter provider abstractions, ephemeral test generation, rollback snapshots, service orchestration, and Markdown/JSON morning reports.",
    role: "AI Tooling Engineer",
    highlights: ["Isolated evalyn/* branches", "Zero auto-commit repair loop"],
    thumbnailUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop",
    technologies: ["Python", "Click", "Rich", "Pytest", "Anthropic API", "OpenRouter", "PyYAML"],
    githubUrl: "https://github.com/ryan7626/Evalyn",
  },
  {
    id: "sceneforge",
    title: "SceneForge",
    category: "Spatial AI",
    shortDescription:
      "Spatial AI app that turns uploaded photos into voice-searchable 3D memory worlds.",
    longDescription:
      "Built SceneForge, a Next.js spatial AI app that ingests personal photos, extracts EXIF, GPS, camera, and image metadata, stores assets in Supabase, and generates Marble 3D worlds from selected memories. The system includes a LiveKit voice agent with Deepgram and OpenAI, metadata-aware prompt enrichment with reverse geocoding and Qwen, progressive Gaussian splat rendering with SparkJS and Three.js, real-time scene mood editing, globe-based location exploration, and an MCP server that exposes memory search and world generation to external AI clients.",
    role: "Spatial AI Engineer",
    highlights: ["Photo-to-Marble 3D worlds", "Voice + MCP memory tools"],
    thumbnailUrl: "https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=800&auto=format&fit=crop",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "LiveKit",
      "Deepgram",
      "OpenAI",
      "World Labs Marble",
      "Three.js",
      "SparkJS",
      "MCP",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/ryan7626/SceneForge",
  },
  {
    id: "talos",
    title: "Talos",
    category: "Robotics Security",
    shortDescription:
      "Multi-signature attestation system for detecting GPS spoofing in autonomous navigation.",
    longDescription:
      "Contributed to Talos, a resilient navigation and attestation stack for autonomous platforms. The Rust core fuses GPS, visual place, visual-inertial, and celestial signatures using pairwise Mahalanobis disagreement tests, clique-based Byzantine voting, reliability-weighted covariance scaling, and information-form fusion. The broader system includes a Tokio/Axum fusion service with gRPC and WebSocket APIs, a MAVLink/PX4 bridge for spoof injection and VISION_POSITION_ESTIMATE feedback, Python sidecars for DINOv2/FAISS visual place recognition and navigation-scene analysis, scenario scripts, and a Vite React dashboard for live maps, trust bars, chi-squared traces, mission control, and outlier timelines.",
    role: "Robotics Security Engineer",
    highlights: ["Byzantine sensor fusion", "PX4 spoof-attack demo stack"],
    thumbnailUrl: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=800&auto=format&fit=crop",
    technologies: [
      "Rust",
      "Tokio",
      "Axum",
      "gRPC",
      "MAVLink",
      "PX4 SITL",
      "Python",
      "DINOv2",
      "FAISS",
      "React",
      "TypeScript",
      "WebSockets",
    ],
    githubUrl: "https://github.com/anmolgxrg/talos",
  },
  {
    id: "docu",
    title: "Docu",
    category: "Browser Extension",
    shortDescription:
      "AI browser extension that explains complex web forms and individual fields in context.",
    longDescription:
      "Built Docu, a Turborepo-based AI form assistant with a Plasmo Chrome extension, Next.js API gateway, and shared Zod schema package. The extension detects probable forms, extracts page and field context from the DOM, injects isolated Shadow DOM overlays and field popovers, and routes requests through background scripts to a secure LLM gateway. The backend validates every payload, supports OpenRouter, OpenAI, and Gemini providers through a common interface, and uses structured JSON extraction to keep form and field explanations reliable while avoiding legal, tax, or immigration advice.",
    role: "Browser Extension Engineer",
    highlights: ["Shadow DOM field help", "Typed multi-provider AI gateway"],
    thumbnailUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
    technologies: [
      "TypeScript",
      "Plasmo",
      "React",
      "Next.js",
      "Turborepo",
      "pnpm",
      "Zod",
      "OpenRouter",
      "OpenAI",
      "Gemini",
    ],
    githubUrl: "https://github.com/ryan7626/Docu",
  },
  {
    id: "cinematch",
    title: "CineMatch",
    category: "Frontend",
    shortDescription:
      "Cinematic movie discovery app powered by TMDB data, genre browsing, and search.",
    longDescription:
      "Built CineMatch, a Vite and React movie discovery frontend that integrates with the TMDB API for real-time trending, genre, search, and poster metadata. The app loads multiple movie collections in parallel, maps TMDB genre IDs into readable labels, deduplicates cross-category results, and presents a cinematic UI with an auto-rotating hero carousel, routed browse view, genre filtering, global search, lazy-loaded posters, ratings, and responsive movie grids.",
    role: "Frontend Engineer",
    highlights: ["TMDB-powered discovery", "Hero carousel + genre browse"],
    thumbnailUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop",
    technologies: ["React", "Vite", "Tailwind CSS", "TMDB API", "Axios", "React Router"],
    githubUrl: "https://github.com/ryan7626/CineMatch",
  },
  {
    id: "tla",
    title: "That Level Again: WebGL Edition",
    category: "Game",
    shortDescription:
      "WebGL2 puzzle-platformer with repeated level layouts, changing rules, hazards, and audio feedback.",
    longDescription:
      "Built a browser-based WebGL2 platformer inspired by That Level Again, using custom shader setup and canvas rendering for level geometry plus a second 2D effects canvas for sprites, particles, and feedback. The game implements gravity, jumping, horizontal and vertical collision resolution, spike hazards, button-gated goals, reset/restart/next-level controls, hint prompts, background music, sound effects, death particles, win confetti, and five level scripts that remix the same layout with inverted controls, altered hazard behavior, swapped objectives, and disappearing platforms.",
    role: "WebGL Game Developer",
    highlights: ["Custom WebGL2 platformer", "Five rule-changing levels"],
    thumbnailUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    technologies: ["JavaScript", "WebGL2", "HTML Canvas", "GLSL", "Game Physics", "Audio"],
    githubUrl: "https://github.com/ryan7626/TLA",
  },
  {
    id: "mern-ecommerce",
    title: "MERN E-Commerce Store",
    category: "Full Stack",
    shortDescription:
      "Full-stack commerce platform with auth, carts, orders, and payments.",
    longDescription:
      "Developed a full-stack e-commerce platform with user authentication, product listings, cart management, order processing, and payment integration. Built REST APIs with Node.js, Express.js, and MongoDB to support a scalable end-to-end shopping experience.",
    role: "Full-Stack Engineer",
    highlights: ["Auth, cart, orders, payments", "REST API backed storefront"],
    thumbnailUrl: "https://images.unsplash.com/photo-1517404215738-15263e9f9178?q=80&w=800&auto=format&fit=crop",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs"],
    githubUrl: "https://github.com/ryan7626",
  },
];
