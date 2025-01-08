import LeftPartHead from "../components/HeadPage/HeadPage/LeftPartHead";
import RightPartHead from "../components/HeadPage/HeadPage/RightPartHead";

const HeadPage = () => {
  return (
    <div className="flex justify-between">
      <LeftPartHead />
      <RightPartHead />
    </div>
  );
};

export default HeadPage;
