import AdvantagesSection from "../components/HomePage/HomePageComponents/AdvantagesSection";
import WelcomeSection from "../components/HomePage/HomePageComponents/WelcomeSection";

const HomePage = () => {
  return (
    <div className="flex justify-between">
      <WelcomeSection />
      <AdvantagesSection />
    </div>
  );
};

export default HomePage;
