import AdvantagesSection from "../components/HomePage/HomePageComponents/AdvantagesSection";
import WelcomeSection from "../components/HomePage/HomePageComponents/WelcomeSection";
import MonthInfo from "../components/TrackerPage/WaterDetails/RightPart/MonthInfo/MonthInfo";

const HomePage = () => {
  return (
    <div className="flex justify-between">
      <WelcomeSection />
      <AdvantagesSection />
      <MonthInfo />
    </div>
  );
};

export default HomePage;
