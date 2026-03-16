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
    id: "language-translation-analysis",
    title: "Language Translation Accuracy Analysis",
    category: "Machine Learning",
    shortDescription: "Evaluated GPT-3.5, Google Translate, and OPUS-MT.",
    longDescription: "Developed an evaluation framework comparing GPT-3.5, Google Translate, and OPUS-MT across language pairs. Achieved 7% higher BLEU scores with fine-tuned OPUS-MT for low-resource languages, and utilized TensorFlow and Hadoop to cut training time by 35%.",
    role: "Machine Learning Researcher",
    thumbnailUrl: "https://images.unsplash.com/photo-1543269865-cbf4f3780ed9?q=80&w=800&auto=format&fit=crop",
    technologies: ["TensorFlow", "Hadoop", "Python", "NLP"],
    githubUrl: "https://github.com/ryan7626",
  },
  {
    id: "fraud-detection",
    title: "Credit Card Fraud Detection",
    category: "Machine Learning",
    shortDescription: "Achieved 99.2% accuracy in detecting fraudulent transactions.",
    longDescription: "Engineered an XGBoost-LSTM ensemble achieving 99.2% fraud detection accuracy on Kaggle’s dataset. Improved F1-score from 0.82 to 0.91 using SMOTE. Built a PyTorch anomaly detection system capable of processing 1000+ transactions/sec, and reduced false positives by 40% through feature engineering and threshold optimization.",
    role: "Machine Learning Engineer",
    thumbnailUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    technologies: ["PyTorch", "XGBoost", "LSTM", "Python"],
    githubUrl: "https://github.com/ryan7626",
  },
  {
    id: "gesture-recognition",
    title: "Real-Time Gesture Recognition",
    category: "Machine Learning",
    shortDescription: "GPU-powered CoreML PyTorch gesture control system.",
    longDescription: "Trained a GPU-powered CoreML PyTorch model on a custom dataset of labeled landmarks for a real-time gesture control system utilizing OpenCV. Increased accuracy and reduced inference time by 60%.",
    role: "Computer Vision Developer",
    thumbnailUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
    technologies: ["Python", "OpenCV", "MediaPipe", "PyTorch", "CoreML"],
    githubUrl: "https://github.com/ryan7626",
  },
  {
    id: "face-digit-classification",
    title: "Face & Digit Classification",
    category: "Machine Learning",
    shortDescription: "Robust vision pipeline utilizing CNNs for high-accuracy recognition.",
    longDescription: "Implemented a robust vision pipeline using CNNs for digit and face recognition with 98.7% accuracy on the MNIST digit classifier and 95.3% accuracy on face recognition.",
    role: "Computer Vision Researcher",
    thumbnailUrl: "https://images.unsplash.com/photo-1507146153580-69a1fe11648a?q=80&w=800&auto=format&fit=crop",
    technologies: ["PyTorch", "OpenCV", "CUDA"],
    githubUrl: "https://github.com/ryan7626",
  },
  {
    id: "autoresearcher-pro",
    title: "AutoResearcher Pro",
    category: "Web",
    shortDescription: "Agentic AI research assistant integrating GPT-4.",
    longDescription: "Built an agentic AI research assistant that autonomously processes academic queries. Integrating OpenAI GPT-4 for generation and sentence-transformers for RAG-based document summarization and insight extraction natively within a user-friendly interface.",
    role: "AI Software Engineer",
    thumbnailUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    technologies: ["Python", "LangChain", "OpenAI API", "Streamlit"],
    githubUrl: "https://github.com/ryan7626",
  },
  {
    id: "mern-ecommerce",
    title: "MERN E-Commerce Store",
    category: "Web",
    shortDescription: "Full-stack scalable shopping application.",
    longDescription: "Built a store that provides a seamless shopping experience with user authentication, product listings, cart management, order processing, and payment integration. Utilizing MongoDB, Express, and Node to build secure and scalable REST APIs.",
    role: "Full-Stack Developer",
    thumbnailUrl: "https://images.unsplash.com/photo-1517404215738-15263e9f9178?q=80&w=800&auto=format&fit=crop",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    githubUrl: "https://github.com/ryan7626",
  },
];
