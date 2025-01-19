import AdvantagesSection from "../components/HomePage/HomePageComponents/AdvantagesSection";
import WelcomeSection from "../components/HomePage/HomePageComponents/WelcomeSection";
import { useSelector } from "react-redux";
import css from "./HomePage.module.css";
import { selectUserCount } from "../redux/UserAuth/selectors.js";

const HomePage = () => {
  const userCount = useSelector(selectUserCount);
  return (
    <div className={css.container}>
      <WelcomeSection />
      <AdvantagesSection userCount={userCount} />
    </div>
  );
};

export default HomePage;
