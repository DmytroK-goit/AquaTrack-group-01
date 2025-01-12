import DailyInfo from "./RightPart/DailyInfo";
import MonthInfo from "../WaterDetails/RightPart/MonthInfo/MonthInfo";
import UserPanel from "./RightPart/UserPanel";
import styles from "./WaterDetailedInfo.module.css";

const WaterDetailedInfo = () => {
  return (
    <div className={styles.waterDetail}>
      <UserPanel />
      <DailyInfo />
      <MonthInfo />
    </div>
  );
};
export default WaterDetailedInfo;
