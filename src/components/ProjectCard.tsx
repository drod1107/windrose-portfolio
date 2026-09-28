import type { Project } from "../data/projects";

type Props = {
  project: Project;
  index: number;
};

const typeLabels: Record<Project["type"], string> = {
  tableau: "Data visualization",
  streamlit: "Interactive app",
  whitepaper: "Research",
  webapp: "Web application",
  github: "Software",
};

export default function ProjectCard({ project, index }: Props) {
  return (
    <article className="project-card">
      <div className="project-card-media">
        {project.cover ? (
          <img src={project.cover} alt="" loading="lazy" />
        ) : (
          <div className="project-card-placeholder" />
        )}
        <span className="project-number">0{index + 1}</span>
      </div>

      <div className="project-card-body">
        <div className="project-meta">
          <span>{typeLabels[project.type]}</span>
          <span>{project.year}</span>
        </div>

        <h3>{project.title}</h3>
        <p>{project.summary}</p>

        <ul className="tag-list" aria-label="Technologies and topics">
          {project.tags.map((tag) => (
            <li key={tag}>{tag.replace(/-/g, " ")}</li>
          ))}
        </ul>

        <div className="project-links">
          {project.links.live && (
            <a href={project.links.live} target="_blank" rel="noreferrer">
              View live <span aria-hidden="true">↗</span>
            </a>
          )}
          {project.links.repo && (
            <a href={project.links.repo} target="_blank" rel="noreferrer">
              View code <span aria-hidden="true">↗</span>
            </a>
          )}
          {project.links.paper && (
            <a href={project.links.paper} target="_blank" rel="noreferrer">
              Read paper <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}