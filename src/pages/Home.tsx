import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const focusAreas = [
  "Production software",
  "AI systems",
  "Cybersecurity",
  "Automation",
];

export default function Home() {
  return (
    <>
      <section className="tech-hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="kicker">DAVID RODRIGUEZ / TECHNICAL PORTFOLIO</p>
          <h1 id="hero-title">
            Software, AI, security
            <span> & systems engineering.</span>
          </h1>
          <p className="hero-lede">
            Selected technical work across production applications, local AI,
            data pipelines, security tooling, and automation.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              View selected work
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/drod1107"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <aside className="identity-panel" aria-label="Portfolio identity">
          <div className="portrait-frame">
            <img src="/profile.png" alt="David Rodriguez" />
            <span className="portrait-corner corner-a" />
            <span className="portrait-corner corner-b" />
            <span className="portrait-corner corner-c" />
            <span className="portrait-corner corner-d" />
          </div>

          <div className="identity-copy">
            <span className="mono-label">PROFILE / 001</span>
            <strong>David Rodriguez</strong>
            <p>Developer · AI systems · security · automation</p>
          </div>

          <dl className="identity-stats">
            <div>
              <dt>Mode</dt>
              <dd>Build / test / ship</dd>
            </div>
            <div>
              <dt>Bias</dt>
              <dd>Useful over flashy</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="focus-strip" aria-label="Technical focus">
        {focusAreas.map((area, index) => (
          <div key={area}>
            <span className="focus-index">0{index + 1}</span>
            <span>{area}</span>
          </div>
        ))}
      </section>

      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <div>
            <p className="kicker">SELECTED WORK</p>
            <h2 id="work-title">Systems with enough substance to inspect.</h2>
          </div>
          <p>
            These are the projects that best represent the range of the technical
            work: one production operating system, one local AI stack, one
            cybersecurity/data application, and one applied AI-safety platform.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className="engineering-section" aria-labelledby="engineering-title">
        <div className="engineering-heading">
          <p className="kicker">ENGINEERING POSTURE</p>
          <h2 id="engineering-title">The interesting part is usually the system around the feature.</h2>
        </div>

        <div className="engineering-grid">
          <article>
            <span className="mono-label">01 / ARCHITECTURE</span>
            <h3>Trace the whole workflow</h3>
            <p>
              I care about where data comes from, what mutates it, what can fail,
              who needs to understand the state, and what happens after the happy path.
            </p>
          </article>
          <article>
            <span className="mono-label">02 / VERIFICATION</span>
            <h3>Make behavior provable</h3>
            <p>
              Verification scripts, acceptance checks, logs, and explicit invariants
              are part of the product, especially when automation is involved.
            </p>
          </article>
          <article>
            <span className="mono-label">03 / OPERATIONS</span>
            <h3>Design for use after launch</h3>
            <p>
              A working demo is useful. A system that can be operated, debugged,
              extended, and trusted is considerably more interesting.
            </p>
          </article>
        </div>
      </section>

      <section className="closing-callout">
        <div>
          <p className="kicker">MORE CONTEXT</p>
          <h2>Background, approach, and technical range.</h2>
        </div>
        <a className="text-link" href="/about">
          About this work <span aria-hidden="true">↗</span>
        </a>
      </section>
    </>
  );
}