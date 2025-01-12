import styles from "./WaterMainInfo.module.css";
import Logo from "../../Logo/Logo";
import waterBottleDesk from "../../../images/WaterMainInfoSection/water-bottle-desktop.png";
import waterBottleTab from "../../../images/WaterMainInfoSection/water-bottle-tablet.png";
import waterBottleMob from "../../../images/WaterMainInfoSection/water-bottle-mobile.png";
import AddWaterBtn from "./LeftPart/AddWaterBtn";
import WaterDailyNorma from "./LeftPart/WaterDailyNorma";
import WaterProgressBar from "./LeftPart/WaterProgressBar/WaterProgressBar";

export default function WaterMainInfo() {
  return (
    <div className={styles.waterInfo}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.waterAmount}>
        <WaterDailyNorma />
      </div>

      <picture>
        <source srcSet={waterBottleDesk} media="(min-width: 1280px)" />
        <source srcSet={waterBottleTab} media="(min-width: 768px)" />
        <source srcSet={waterBottleMob} media="(max-width: 767px)" />
        <img
          src={waterBottleDesk}
          alt="Bottle of water"
          className={styles.waterInfoImg}
        />
      </picture>
      <div className={styles.waterRange}>
        <WaterProgressBar />
      </div>

      <AddWaterBtn />
    </div>
  );
}
