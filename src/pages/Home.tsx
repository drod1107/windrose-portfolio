import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const disciplines = [
  "Software engineering",
  "Cybersecurity",
  "AI policy & safety",
  "Data & automation",
];

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Builder · technologist · systems thinker</p>
          <h1 id="hero-title">
            I build systems that make
            <span> complex work feel manageable.</span>
          </h1>
          <p className="hero-lede">
            Software engineering, cybersecurity, AI policy, data systems, and
            practical automation. I like messy problems with real stakes.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore selected work
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/drod1107"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>

          <ul className="discipline-list" aria-label="Areas of practice">
            {disciplines.map((discipline) => (
              <li key={discipline}>{discipline}</li>
            ))}
          </ul>
        </div>

        <div className="hero-mark" aria-hidden="true">
          <div className="portrait-shell">
            <img src="/profile.png" alt="" className="portrait" />
          </div>
          <svg className="compass" viewBox="0 0 320 320">
            <circle cx="160" cy="160" r="128" />
            <circle cx="160" cy="160" r="94" />
            <path d="M160 18 177 143 302 160 177 177 160 302 143 177 18 160 143 143Z" />
            <circle cx="160" cy="160" r="8" />
          </svg>
          <span className="mark-label mark-label-n">N</span>
          <span className="mark-label mark-label-e">E</span>
          <span className="mark-label mark-label-s">S</span>
          <span className="mark-label mark-label-w">W</span>
        </div>
      </section>

      <section className="signal-strip" aria-label="Working principles">
        <div>
          <strong>03</strong>
          <span>featured builds</span>
        </div>
        <div>
          <strong>04</strong>
          <span>technical disciplines</span>
        </div>
        <div>
          <strong>01</strong>
          <span>rule: ship useful things</span>
        </div>
      </section>

      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 id="work-title">Things built to solve something real.</h2>
          </div>
          <p>
            Research, security tooling, and software selected for the quality of
            the problem, the usefulness of the result, and what I learned making it.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className="approach-section" aria-labelledby="approach-title">
        <div>
          <p className="eyebrow">How I work</p>
          <h2 id="approach-title">Start with the system. Then sweat the details.</h2>
        </div>
        <div className="approach-grid">
          <article>
            <span>01</span>
            <h3>Find the real constraint</h3>
            <p>
              I map the whole problem first, then identify the few decisions that
              actually control the outcome.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Make it testable</h3>
            <p>
              Assumptions become prototypes, checks, or measurable criteria as
              quickly as possible.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Build for the human using it</h3>
            <p>
              Good systems reduce cognitive load, expose the important state, and
              make the next action obvious.
            </p>
          </article>
        </div>
      </section>

      <section className="closing-callout">
        <p className="eyebrow">More context</p>
        <h2>Curious how all of this fits together?</h2>
        <p>
          The through-line is practical systems thinking across software, security,
          AI, operations, and people.
        </p>
        <a className="text-link" href="/about">
          Read the longer version <span aria-hidden="true">↗</span>
        </a>
      </section>
    </>
  );
}