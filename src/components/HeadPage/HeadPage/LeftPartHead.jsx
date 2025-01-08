import AddWater from "../components/LeftPart/AddWater";
import DailyNormWater from "../components/LeftPart/DailyNormWater";
import ProgressDailyWater from "../components/LeftPart/ProgressDailyWater";

const LeftPartHead = () => {
  return (
    <div className="w-96 h-96 border-2 border-black	rounded-md bg-slate-100">
      <DailyNormWater />
      <ProgressDailyWater />
      <AddWater />
    </div>
  );
};
export default LeftPartHead;
