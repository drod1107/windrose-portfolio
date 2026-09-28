export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <span className="brand footer-brand">
            <span className="brand-mark" aria-hidden="true">✦</span>
            windrose.dev
          </span>
          <p>Software · AI · security · systems</p>
        </div>

        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/david-windrose"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
          <a href="https://github.com/drod1107" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </div>

        <p className="footer-meta">© {new Date().getFullYear()} David Rodriguez</p>
      </div>
    </footer>
  );
}