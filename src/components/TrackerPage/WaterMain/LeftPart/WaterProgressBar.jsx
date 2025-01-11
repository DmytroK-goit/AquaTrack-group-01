import styles from "../WaterMainInfo.module.css";

export default function WaterProgressBar() {
  return (
    <>
      <p className={styles.waterRangeDescr}>Today</p>
      <input
        type="range"
        min="0"
        max="100"
        className={styles.waterRangeScale}
      />
    </>
  );
}
