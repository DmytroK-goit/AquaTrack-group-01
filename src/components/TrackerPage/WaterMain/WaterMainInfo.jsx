import AddWaterBtn from "./LeftPart/AddWaterBtn";
import WaterDailyNorma from "./LeftPart/WaterDailyNorma";
import WaterProgressBar from "./LeftPart/WaterProgressBar";

const WaterMainInfo = () => {
  return (
    <div className="w-96 h-96 border-2 border-black	rounded-md bg-slate-100">
      <WaterDailyNorma />
      <WaterProgressBar />
      <AddWaterBtn />
    </div>
  );
};
export default WaterMainInfo;
