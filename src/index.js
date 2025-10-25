import React from "react";
import styles from "./styles.module.css";

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>;
};

// Export components
export * from "./components";

// Export theme colors
export { default as colors, theme } from "./theme/colors";
