import LeftPart from "../components/home/Home/LeftPart";
import RightPart from "../components/home/Home/RightPart";

const Home = () => {
  return (
    <div className="flex justify-between">
      <LeftPart />
      <RightPart />
    </div>
  );
};

export default Home;
