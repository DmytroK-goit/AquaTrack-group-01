import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div>
      <Link to="/" className={styles.logo}>
        aquatrack
      </Link>
    </div>
  );
}
