import type { Project } from "../data/projects";

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
  return (
    <div className="bg-neutral-800 rounded-2xl shadow-lg flex flex-col overflow-hidden hover:scale-[1.025] transition-transform duration-200">
      {project.cover && (
        <img
          src={project.cover}
          alt={project.title}
          className="w-full h-40 object-cover"
          loading="lazy"
        />
      )}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
        <p className="text-sm text-gray-400 mb-2">{project.summary}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.links.live && (
            <a
              href={project.links.live}
              className="text-emerald-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>
          )}
          {project.links.repo && (
            <a
              href={project.links.repo}
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          )}
          {project.links.paper && (
            <a
              href={project.links.paper}
              className="text-violet-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              PDF
            </a>
          )}
        </div>
        <div className="mt-3 flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs bg-emerald-900/70 text-emerald-300 px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
