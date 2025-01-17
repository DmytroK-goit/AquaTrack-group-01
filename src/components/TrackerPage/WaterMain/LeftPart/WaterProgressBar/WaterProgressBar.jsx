import { useSelector } from "react-redux";
import { waterSelectors } from "../../../../../redux/Water/selectors.js";
import styles from "./WaterProgressBar.module.css";

const WaterProgressBar = () => {
  const waterPercentage = useSelector(waterSelectors.selectWaterPercentage);

  const currentProgress = {
    background: `linear-gradient(to right, #9BE1A0 ${waterPercentage}%, #f0eff4 ${waterPercentage}%)`,
  };

  const getLeftPosition = (percentage) => {
    if (percentage <= 10) {
      return `calc(${percentage}% + 5px)`;
    } else if (percentage >= 90) {
      return `calc(${percentage}% - 24px)`;
    } else {
      return `calc(${percentage}% - 12px)`;
    }
  };

  return (
    <div className={styles.sliderContainer}>
      <h2 className={styles.sliderTitle}>
        <span>Water consumption</span>
      </h2>

      <div className={styles.sliderWrapper}>
        <div className={styles.sliderProgressWrapper}>
          <input
            type="range"
            min="0"
            max="100"
            value={waterPercentage}
            className={styles.slider}
            style={currentProgress}
            readOnly
          />
          {waterPercentage > 0 && (
            <div
              className={styles.percentageLabel}
              style={{ left: getLeftPosition(waterPercentage) }}
            >
              {Math.round(waterPercentage)}%
            </div>
          )}
        </div>

        <div className={styles.sliderLabels}>
          <span
            className={styles.sliderNumbers}
            style={{
              visibility: waterPercentage > 15 ? "visible" : "hidden",
            }}
          >
            0%
          </span>

          <span
            className={styles.sliderNumbers}
            style={{
              visibility:
                waterPercentage > 40 && waterPercentage <= 60
                  ? "hidden"
                  : "visible",
            }}
          >
            50%
          </span>

          <span
            className={styles.sliderNumbers}
            style={{
              visibility: waterPercentage >= 83 ? "hidden" : "visible",
            }}
          >
            100%
          </span>
        </div>
      </div>
    </div>
  );
};

export default WaterProgressBar;
