import type { Project } from "../data/projects";

type Props = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  return (
    <article className="project-card">
      <div className="project-index" aria-hidden="true">
        0{index + 1}
      </div>

      <div className="project-card-body">
        <div className="project-meta">
          <span>{project.kind}</span>
          <span>{project.year}</span>
        </div>

        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
        <p className="project-proof">{project.proof}</p>

        <ul className="tag-list" aria-label="Technologies and topics">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div className="project-links">
          {project.links.live && (
            <a href={project.links.live} target="_blank" rel="noreferrer">
              Live <span aria-hidden="true">↗</span>
            </a>
          )}
          {project.links.repo && (
            <a href={project.links.repo} target="_blank" rel="noreferrer">
              Source <span aria-hidden="true">↗</span>
            </a>
          )}
          {project.links.paper && (
            <a href={project.links.paper} target="_blank" rel="noreferrer">
              Paper <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}