import DailyInfo from "./RightPart/DailyInfo";
import MonthInfo from "../WaterDetails/RightPart/MonthInfo/MonthInfo";
import UserPanel from "./RightPart/UserPanel";

const WaterDetailedInfo = () => {
  return (
    <div className="w-96 h-96 border-2 border-black	rounded-md bg-slate-100">
      <UserPanel />
      <DailyInfo />
      <MonthInfo />
    </div>
  );
};
export default WaterDetailedInfo;
