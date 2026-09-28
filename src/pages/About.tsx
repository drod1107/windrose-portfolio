export default function About() {
  return (
    <article className="about-page">
      <header className="about-hero">
        <p className="eyebrow">About</p>
        <h1>I’m interested in the machinery behind the outcome.</h1>
        <p className="about-lede">
          I build practical systems across software, cybersecurity, AI governance,
          data, and operations. The common thread is turning complicated work into
          something understandable, testable, and useful.
        </p>
      </header>

      <div className="about-layout">
        <div className="about-copy">
          <p>
            I’m a systems-oriented builder who is happiest when the problem crosses
            boundaries. A product question can become a data problem. A security
            problem can become a workflow problem. An AI question can become a
            governance problem. I like following the chain until the real constraint
            appears.
          </p>
          <p>
            My background spans software development, program leadership,
            cybersecurity, analytics, and hands-on business systems. I care about
            direct communication, evidence, maintainability, and work that survives
            contact with the real world.
          </p>
          <p>
            I’m especially interested in responsible AI, security, automation, and
            tools that give people more capability without adding more complexity.
          </p>
        </div>

        <aside className="about-aside">
          <p className="aside-label">Current toolkit</p>
          <ul>
            <li>JavaScript / TypeScript</li>
            <li>React / Next.js</li>
            <li>Python / FastAPI</li>
            <li>SQL / Postgres</li>
            <li>Security & OSINT</li>
            <li>AI policy & governance</li>
            <li>Automation & systems design</li>
          </ul>
        </aside>
      </div>

      <section className="contact-panel">
        <div>
          <p className="eyebrow">Connect</p>
          <h2>Useful problem? I’m listening.</h2>
          <p>
            I’m always interested in thoughtful technical work, collaboration, and
            conversations about systems that deserve to be better.
          </p>
        </div>
        <div className="contact-links">
          <a
            className="button button-primary"
            href="https://www.linkedin.com/in/davidwindrose/"
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
