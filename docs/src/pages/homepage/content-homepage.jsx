import ComponentGrid from "@site/src/components/ComponentGrid";
import "./index.css";

const ContentHomepage = () => {
  const featuredComponents = [
    {
      name: "Button",
      icon: "https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/components/ic-buttons.svg",
      link: "/docs/component/data-entry/button",
    },
    {
      name: "Input",
      icon: "https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/components/ic-text-field.svg",
      link: "/docs/component/data-entry/input",
    },
    {
      name: "Select",
      icon: "https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/components/ic-autocomplete.svg",
      link: "/docs/component/data-entry/select",
    },
    {
      name: "Modal",
      icon: "https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/components/ic-dialog.svg",
      link: "/docs/component/feedback/modal",
    },
    {
      name: "Table",
      icon: "https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/components/ic-table.svg",
      link: "/docs/component/data-display/table",
    },
    {
      name: "Tabs",
      icon: "https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/components/ic-tabs.svg",
      link: "/docs/component/navigation/tabs",
    },
  ];

  return (
    <main className="homepage-main">
      {/* Features Section */}
      <section className="features-section">
        <div className="section-container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="#00bcff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="#00bcff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="#00bcff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Component Library</h3>
              <p>36+ production-ready components covering all common UI patterns and use cases</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#00bcff"
                    strokeWidth="2"
                  />
                  <path d="M12 6V12L16 14" stroke="#00bcff" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Modern Design</h3>
              <p>Beautiful, clean interfaces following the latest design trends and best practices</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                    stroke="#00bcff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>High Performance</h3>
              <p>Optimized for speed with minimal bundle size and efficient rendering</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
                    stroke="#00bcff"
                    strokeWidth="2"
                  />
                  <path
                    d="M16 21V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V21"
                    stroke="#00bcff"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3>Fully Responsive</h3>
              <p>All components work seamlessly across desktop, tablet, and mobile devices</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z"
                    stroke="#00bcff"
                    strokeWidth="2"
                  />
                  <path
                    d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88"
                    stroke="#00bcff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Accessible</h3>
              <p>Built with ARIA standards ensuring usability for all users including screen readers</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    stroke="#00bcff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Customizable</h3>
              <p>Extensive theming system allowing you to match your brand identity perfectly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Components */}
      <section className="components-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Featured Components</h2>
            <p className="section-description">Explore our most popular and powerful components</p>
          </div>
          <ComponentGrid components={featuredComponents} />
          <div className="section-cta">
            <a href="/docs/all-components" className="btn-view-all">
              View All 36 Components →
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Build Something Amazing?</h2>
          <p className="cta-description">Join developers building beautiful React applications with TX Design UI</p>
          <div className="cta-actions">
            <a href="/docs/getting-started/installation" className="btn-primary">
              Get Started Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContentHomepage;
