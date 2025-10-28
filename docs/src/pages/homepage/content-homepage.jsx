import "./index.css";

const ContentHomepage = () => {
  const featuredComponents = [
    {
      name: "Button",
      icon: "/img/components/ic-buttons.svg",
      link: "/docs/component/data-entry/button",
    },
    {
      name: "Input",
      icon: "/img/components/ic-text-field.svg",
      link: "/docs/component/data-entry/input",
    },
    {
      name: "Select",
      icon: "/img/components/ic-autocomplete.svg",
      link: "/docs/component/data-entry/select",
    },
    {
      name: "Modal",
      icon: "/img/components/ic-dialog.svg",
      link: "/docs/component/feedback/modal",
    },
    {
      name: "Table",
      icon: "/img/components/ic-table.svg",
      link: "/docs/component/data-display/table",
    },
    {
      name: "Tabs",
      icon: "/img/components/ic-tabs.svg",
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

      {/* Getting Started Section */}
      <section className="getting-started-section">
        <div className="section-container">
          <div className="getting-started-content">
            <div className="getting-started-text">
              <h2 className="section-title">Get Started in Minutes</h2>
              <p className="section-description">
                Install TX Design UI and start building beautiful interfaces immediately
              </p>

              <div className="installation-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Install the package</h4>
                    <code className="install-code">npm install tx-design-ui</code>
                    <p>or</p>
                    <code className="install-code">yarn add tx-design-ui</code>
                  </div>
                </div>

                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Import and use</h4>
                    <pre className="code-snippet">{`import { TxButton, TxInput } from 'tx-design-ui';

export default function App() {
  return (
    <div>
      <TxButton type="primary">Click me</TxButton>
      <TxInput placeholder="Type here..." />
    </div>
  );
}`}</pre>
                  </div>
                </div>

                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Customize your theme</h4>
                    <pre className="code-snippet">{`import { ThemeProvider } from 'tx-design-ui';

const customTheme = {
  colors: {
    primary: '#00bcff',
    secondary: '#6c757d'
  }
};

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <YourComponents />
    </ThemeProvider>
  );
}`}</pre>
                  </div>
                </div>
              </div>

              <div className="quick-actions">
                <a href="/docs/getting-started/installation" className="btn-primary">
                  View Full Documentation
                </a>
                <a href="https://github.com/Tuanxu5/tx-design-ui" className="btn-secondary" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.165 20 14.418 20 10c0-5.523-4.477-10-10-10z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>

            <div className="getting-started-visual">
              {/* Test Dank Mono Font - Remove this later */}
              <div className="test-dank-mono" style={{marginBottom: '20px'}}>
                Dank Mono Test: npm install tx-design-ui<br/>
                Font should look different if Dank Mono loads
              </div>

              <div className="code-preview-box">
                <div className="preview-header">
                  <div className="preview-tabs">
                    <div className="tab active">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      MyApp.jsx
                    </div>
                    <div className="tab">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      package.json
                    </div>
                  </div>
                  <div className="preview-controls">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                </div>
                <div className="preview-content">
                  <div className="code-editor">
                    <div className="line-numbers">
                      {[...Array(28)].map((_, i) => (
                        <span key={i + 1} className="line-number">{i + 1}</span>
                      ))}
                    </div>
                    <pre className="preview-code">
                      <code>
                        <span className="keyword">import</span> <span className="var">React</span>, {'{'} <span className="var">useState</span> {'}'} <span className="keyword">from</span> <span className="string">'react'</span>;<br/>
                        <span className="keyword">import</span> {'{'} <span className="component">TxButton</span>, <span className="component">TxModal</span>, <span className="component">TxInput</span> {'}'} <span className="keyword">from</span> <span className="string">'tx-design-ui'</span>;<br/>
                        <br/>
                        <span className="keyword">export default function</span> <span className="function">MyApp</span>() {'{'}<br/>
                        &nbsp;&nbsp;<span className="keyword">const</span> [<span className="var">visible</span>, <span className="var">setVisible</span>] = <span className="function">useState</span>(<span className="keyword">false</span>);<br/>
                        &nbsp;&nbsp;<span className="keyword">const</span> [<span className="var">name</span>, <span className="var">setName</span>] = <span className="function">useState</span>(<span className="string">''</span>);<br/>
                        <br/>
                        &nbsp;&nbsp;<span className="keyword">return</span> (<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="tag">div</span> <span className="attr">className</span>=<span className="string">"app"</span>&gt;<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="tag">h1</span>&gt;Welcome to TX Design UI&lt;/<span className="tag">h1</span>&gt;<br/>
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="component">TxInput</span><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="attr">placeholder</span>=<span className="string">"Enter your name"</span><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="attr">value</span>={'{'}<span className="var">name</span>{'}'}<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="attr">onChange</span>={'{'}<span className="var">(e)</span> =&gt; <span className="function">setName</span>(<span className="var">e.target.value</span>){'}'}<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="component">TxButton</span><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="attr">type</span>=<span className="string">"primary"</span><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="attr">onClick</span>={'{'}<span className="var">()</span> =&gt; <span className="function">setVisible</span>(<span className="keyword">true</span>){'}'}<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Say Hello<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="component">TxButton</span>&gt;<br/>
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="component">TxModal</span><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="attr">title</span>={'{'}<span className="template">`Hello, ${'{'}name || 'there'{'}'}!`</span>{'}'}<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="attr">visible</span>={'{'}<span className="var">visible</span>{'}'}<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="attr">onCancel</span>={'{'}<span className="var">()</span> =&gt; <span className="function">setVisible</span>(<span className="keyword">false</span>){'}'}<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="tag">p</span>&gt;Thanks for trying TX Design UI!&lt;/<span className="tag">p</span>&gt;<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="component">TxModal</span>&gt;<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="tag">div</span>&gt;<br/>
                        &nbsp;&nbsp;);<br/>
                        {'}'}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>

              <div className="feature-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">⚡</div>
                  <div className="highlight-text">
                    <strong>Fast Setup</strong>
                    <span>Ready in under 5 minutes</span>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🎨</div>
                  <div className="highlight-text">
                    <strong>Fully Customizable</strong>
                    <span>Match your brand perfectly</span>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">📱</div>
                  <div className="highlight-text">
                    <strong>Responsive</strong>
                    <span>Works on all devices</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContentHomepage;
