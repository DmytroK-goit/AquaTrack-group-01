import AdvantagesSection from "../components/HomePage/HomePageComponents/AdvantagesSection";
import WelcomeSection from "../components/HomePage/HomePageComponents/WelcomeSection";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.container}>
      <WelcomeSection />
      <AdvantagesSection />
    </div>
  );
};

export default HomePage;
