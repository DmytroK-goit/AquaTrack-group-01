import styles from "../WaterMainInfo.module.css";
import plus from "../../../../images/WaterMainInfoSection/plus-icon.svg";

export default function AddWaterBtn({ onClick }) {
  return (
    <button type="button" className={styles.addWaterBtn} onClick={onClick}>
      <img src={plus} alt="plus" className={styles.plusIcon} />
      <span>Add water</span>
    </button>
  );
}
