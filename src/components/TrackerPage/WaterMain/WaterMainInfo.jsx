import { useState } from "react";
import styles from "./WaterMainInfo.module.css";
import Logo from "../../Logo/Logo";
import waterBottleDesk from "../../../images/WaterMainInfoSection/water-bottle-desktop.png";
import waterBottleTab from "../../../images/WaterMainInfoSection/water-bottle-tablet.png";
import waterBottleMob from "../../../images/WaterMainInfoSection/water-bottle-mobile.png";
import waterBottleDeskDouble from "../../../images/WaterMainInfoSection/water-bottle-desktop-2x.png";
import waterBottleTabDouble from "../../../images/WaterMainInfoSection/water-bottle-tablet-2x.png";
import waterBottleMobDouble from "../../../images/WaterMainInfoSection/water-bottle-mobile-2x.png";
import AddWaterBtn from "./LeftPart/AddWaterBtn";
import WaterDailyNorma from "./LeftPart/WaterDailyNorma";
import WaterProgressBar from "./LeftPart/WaterProgressBar/WaterProgressBar";
import TestModal from "../../TestModal/TestModal";
export default function WaterMainInfo() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={styles.waterInfo}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.waterAmount}>
        <WaterDailyNorma />
      </div>

      <picture>
        <source
          srcSet={`${waterBottleDesk} 1x, ${waterBottleDeskDouble} 2x`}
          media="(min-width: 1440px)"
        />
        <source
          srcSet={`${waterBottleTab} 1x, ${waterBottleTabDouble} 2x`}
          media="(min-width: 768px)"
        />
        <source
          srcSet={`${waterBottleMob} 1x, ${waterBottleMobDouble} 2x`}
          media="(max-width: 767px)"
        />
        <img
          src={waterBottleDesk}
          alt="Bottle of water"
          className={styles.waterInfoImg}
        />
      </picture>
      <div className={styles.waterRange}>
        <WaterProgressBar />
      </div>

      <AddWaterBtn onClick={openModal} />
      <TestModal openModal={modalIsOpen} closeModal={closeModal} />
    </div>
  );
}
