// src/data/projects.ts

export interface Project {
  id: string;
  title: string;
  summary: string;
  cover?: string; // image URL or undefined
  type: "tableau" | "streamlit" | "whitepaper" | "webapp" | "github";
  links: {
    live?: string;
    repo?: string;
    paper?: string;
  };
  tags: string[];
  year: number;
}

export const projects: Project[] = [
    {
    id: "aisafety",  // unique ID for the project (used as React key)
    title: "The State of AI Safety for Parents and Educators 2025",
    summary: "A first-edition research report exploring the state of AI safety in education and its impact on students, parents, and teachers.",
    cover: "/ai_safely.png",
    type: "whitepaper",
    links: {
      live: "https://ai.windrose.dev",
      // If a PDF report is available, you can add a paper link as well, for example:
      // paper: "https://ai.windrose.dev/State-of-AI-Safety-2025.pdf"
    },
    tags: ["ai-safety", "education", "research"],
    year: 2025,
  },
  {
    id: "whfr",
    title: "What Happened For Real - A Fully Local Data Ingestion Tool",
    summary: "A comprehensive tool for ingesting and processing local data files.",
    cover: "/whfr-image.png",
    type: "github",
    links: {
      repo: "https://github.com/drod1107/WHFR",
    },
    tags: ["data-viz", "local-data", "ingestion"],
    year: 2024,
  },
  {
    id: "threatmap",
    title: "Threatmap Global Cyber OSINT Dashboard",
    summary: "A global cyber threat intelligence dashboard using OSINT data.",
    cover: "/threatmap-image.png",
    type: "streamlit",
    links: {
      live: "https://threatmap.streamlit.app",
      repo: "https://github.com/drod1107/threatmap",
    },
    tags: ["python", "streamlit", "cybersecurity", "osint"],
    year: 2025,
  }
];
