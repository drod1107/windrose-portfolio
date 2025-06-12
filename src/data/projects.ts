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
