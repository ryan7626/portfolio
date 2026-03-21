export type ProjectCategory = "All" | "AI/ML" | "Full Stack";

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
    category: "AI/ML",
    shortDescription:
      "Benchmarked GPT-3.5, Google Translate, and OPUS-MT across multilingual evaluation tasks.",
    longDescription:
      "Developed a machine translation evaluation framework comparing GPT-3.5, Google Translate, and OPUS-MT across multiple language pairs. Fine-tuned OPUS-MT for low-resource languages, improving BLEU scores by 7% while using TensorFlow and Hadoop to reduce training time by 35%.",
    role: "ML Researcher",
    thumbnailUrl: "https://images.unsplash.com/photo-1543269865-cbf4f3780ed9?q=80&w=800&auto=format&fit=crop",
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
    thumbnailUrl: "https://images.unsplash.com/photo-1507146153580-69a1fe11648a?q=80&w=800&auto=format&fit=crop",
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
    thumbnailUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    technologies: ["Python", "LangChain", "OpenAI API", "Hugging Face Transformers", "Streamlit"],
    githubUrl: "https://github.com/ryan7626",
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
    thumbnailUrl: "https://images.unsplash.com/photo-1517404215738-15263e9f9178?q=80&w=800&auto=format&fit=crop",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs"],
    githubUrl: "https://github.com/ryan7626",
  },
];
