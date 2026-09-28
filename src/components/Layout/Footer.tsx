export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <span className="brand footer-brand">
            <span className="brand-mark" aria-hidden="true">✦</span>
            windrose.dev
          </span>
          <p>Useful systems, thoughtfully built.</p>
        </div>

        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/davidwindrose/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/drod1107"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>

        <p className="footer-meta">© {new Date().getFullYear()} David</p>
      </div>
    </footer>
  );
}
