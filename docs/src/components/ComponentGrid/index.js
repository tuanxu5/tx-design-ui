import ComponentCard from "../ComponentCard";
import styles from "./styles.module.css";

export default function ComponentGrid({ components }) {
  return (
    <div className={styles.grid}>
      {components.map((component, index) => (
        <ComponentCard
          key={index}
          name={component.name}
          icon={component.icon}
          link={component.link}
          badge={component.badge}
        />
      ))}
    </div>
  );
}
