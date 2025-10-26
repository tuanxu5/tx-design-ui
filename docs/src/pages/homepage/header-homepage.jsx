import Link from "@docusaurus/Link";
import "./index.css";

const HeaderHomepage = () => {
  return (
    <header className="hero-section">
      <div className="hero-gradient" />
      <div className="hero-container">
        <div className="hero-badge">
          <span className="badge-dot" />
          <span>36 Production-Ready Components</span>
        </div>

        <h1 className="hero-title">
          Build Beautiful UIs
          <br />
          <span className="gradient-text">Faster Than Ever</span>
        </h1>

        <p className="hero-description">
          A comprehensive React UI component library featuring 36 production-ready components.
          <br />
          Built with modern design principles, optimized for performance and accessibility.
        </p>

        <div className="hero-actions">
          <Link to="/docs/getting-started/overview" className="btn-primary">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 3.33334V16.6667M10 16.6667L15.8333 10.8333M10 16.6667L4.16667 10.8333"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Get Started
          </Link>

          <Link to="/docs/all-components" className="btn-secondary">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M2.5 5.83334H17.5M2.5 10H17.5M2.5 14.1667H17.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Browse Components
          </Link>

          <a
            href="https://github.com/Tuanxu5/tx-design-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-github"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.165 20 14.418 20 10c0-5.523-4.477-10-10-10z"
              />
            </svg>
            <span>Star on GitHub</span>
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">36+</div>
            <div className="stat-label">Components</div>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">TypeScript</div>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <div className="stat-number">React 18</div>
            <div className="stat-label">Latest Version</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderHomepage;
