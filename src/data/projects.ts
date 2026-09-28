export interface Project {
  id: string;
  title: string;
  summary: string;
  proof: string;
  kind: string;
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
    id: "wintergarten-ops",
    title: "Wintergarten Operations Platform",
    summary:
      "A production operating system for a small retail food business, spanning the public storefront and the workflows behind orders, inventory, production, fulfillment, customer events, and communications.",
    proof:
      "Built as a real operational system rather than a demo: Next.js and TypeScript on Postgres with Stripe, costing and inventory logic, automation, MCP tooling, and a broad verification suite.",
    kind: "Production full-stack system",
    links: {
      live: "https://derwintergarten.com",
    },
    tags: ["Next.js", "TypeScript", "Postgres", "Stripe", "MCP", "automation"],
    year: 2026,
  },
  {
    id: "whfr",
    title: "WHFR · Local RAG + OCR Stack",
    summary:
      "A local-first document intelligence stack for ingesting scanned and structured files, indexing them, and querying the resulting corpus without sending the source material to a hosted LLM.",
    proof:
      "Dockerized services combine FastAPI, OCR, Apache Tika, ChromaDB, checkpointed ingestion, Ollama, and a dedicated RAG API.",
    kind: "AI systems prototype",
    links: {
      repo: "https://github.com/drod1107/WHFR",
    },
    tags: ["Python", "FastAPI", "Docker", "RAG", "OCR", "ChromaDB"],
    year: 2025,
  },
  {
    id: "threatmap",
    title: "ThreatMap · Cyber Threat Intelligence",
    summary:
      "An interactive threat-intelligence dashboard that normalizes public IOC data, enriches malicious infrastructure, and turns it into drill-down investigation views and global visualizations.",
    proof:
      "Python and Streamlit application with AlienVault OTX ingestion, enrichment, caching, pandas pipelines, and Plotly geospatial visualization.",
    kind: "Cybersecurity + data",
    links: {
      live: "https://threatmap.streamlit.app",
      repo: "https://github.com/drod1107/threatmap",
    },
    tags: ["Python", "Streamlit", "OSINT", "pandas", "Plotly", "threat intel"],
    year: 2025,
  },
  {
    id: "ai-safely",
    title: "AI Safely · Research + Public Platform",
    summary:
      "Applied AI-safety work for parents, educators, and schools, combining original research, practical governance work, public resources, and a production web platform.",
    proof:
      "Includes a 60+ page first-edition AI-safety report, school-facing policy work, resource publishing, and a public education platform.",
    kind: "AI governance + research",
    links: {
      live: "https://ai.windrose.dev",
    },
    tags: ["AI safety", "governance", "research", "policy", "public education"],
    year: 2025,
  },
];