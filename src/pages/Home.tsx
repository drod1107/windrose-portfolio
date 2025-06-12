import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects"

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center py-16 w-full">
        <img
          src="/profile.png"
          alt="Profile"
          className="w-32 h-32 rounded-full shadow-lg mb-6 object-cover border-4 border-emerald-600"
          loading="lazy"
        />
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-center">
          Hi, I’m David
        </h1>
        <p className="text-lg text-gray-600 w-full text-center">
          Data-driven builder, cybersecurity geek, and lifelong learner.
        </p>
      </section>

      <section className="w-full flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-6 text-center">Selected Projects</h2>
        <div className="grid gap-8 w-full md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project}/>
          ))}
        </div>
      </section>
    </>
  );
}
