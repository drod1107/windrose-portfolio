export default function About() {
  return (
    <article className="about-page">
      <header className="about-hero">
        <p className="kicker">ABOUT / DAVID RODRIGUEZ</p>
        <h1>I like technical work that crosses boundaries.</h1>
        <p className="about-lede">
          Software, security, data, AI, and operations tend to collide in the
          systems I find most interesting. I build across those seams.
        </p>
      </header>

      <div className="about-layout">
        <div className="about-copy">
          <p>
            My work spans full-stack development, local AI systems, cybersecurity,
            data tooling, automation, and technical operations. I tend to start by
            mapping the system around the problem, then work inward until the
            constraints are concrete enough to build against.
          </p>
          <p>
            I am especially interested in software that has to survive real use:
            workflows with state, integrations, operational rules, failure modes,
            and people depending on the result.
          </p>
          <p>
            AI is part of that work in two different ways. I build with it, including
            local RAG and agent-facing tooling, and I work on the governance side,
            where safety, policy, and human judgment matter as much as implementation.
          </p>
        </div>

        <aside className="about-aside">
          <span className="mono-label">CURRENT TOOLKIT</span>
          <ul>
            <li>JavaScript / TypeScript</li>
            <li>React / Next.js</li>
            <li>Python / FastAPI</li>
            <li>SQL / PostgreSQL</li>
            <li>Docker / local AI stacks</li>
            <li>Security / OSINT</li>
            <li>MCP / agent tooling</li>
            <li>Automation / systems design</li>
          </ul>
        </aside>
      </div>

      <section className="contact-panel">
        <div>
          <p className="kicker">PROFESSIONAL LINKS</p>
          <h2>More code and work history.</h2>
          <p>
            The portfolio is intentionally selective. GitHub carries more of the
            implementation trail, and LinkedIn carries the professional chronology.
          </p>
        </div>
        <div className="contact-links">
          <a
            className="button button-primary"
            href="https://www.linkedin.com/in/david-windrose"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
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
      </section>
    </article>
  );
}