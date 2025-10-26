import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

export default function ComponentCard({ name, icon, link, badge }) {
  return (
    <Link to={link} className={styles.card}>
      <div className={styles.iconWrapper}>
        <img src={icon} alt={name} className={styles.icon} />
      </div>
      <h3 className={styles.name}>{name}</h3>
    </Link>
  );
}
