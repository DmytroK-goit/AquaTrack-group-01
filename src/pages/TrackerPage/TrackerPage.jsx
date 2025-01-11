import styles from "./TrackerPage.module.css";
import WaterMainInfo from "../../components/TrackerPage/WaterMain/WaterMainInfo";
import WaterDetailedInfo from "../../components/TrackerPage/WaterDetails/WaterDetailedInfo";

export default function TrackerPage() {
  return (
    <section className={styles.main}>
      <WaterMainInfo />
      <WaterDetailedInfo />
    </section>
  );
}
