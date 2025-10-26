import "./index.css";

const FooterHomePage = () => {
  return (
    <footer className="homepage-footer">
      <p>
        Built with ❤️ by{" "}
        <a
          href="https://github.com/Tuanxu5"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#00bcff", textDecoration: "none", fontWeight: 600 }}
        >
          Tuanxu5
        </a>
      </p>
      <p style={{ marginTop: "8px", fontSize: "14px", color: "var(--ifm-color-emphasis-600)" }}>
        MIT Licensed | Copyright © 2024 TX Design UI
      </p>
    </footer>
  );
};

export default FooterHomePage;
