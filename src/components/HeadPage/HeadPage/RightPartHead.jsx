import Calendar from "../components/RightPart/Calendar";
import DayWater from "../components/RightPart/DayWater";
import MainInfo from "../components/RightPart/MainInfo";

const RightPartHead = () => {
  return (
    <div className="w-96 h-96 border-2 border-black	rounded-md bg-slate-100">
      <MainInfo />
      <DayWater />
      <Calendar />
    </div>
  );
};
export default RightPartHead;
