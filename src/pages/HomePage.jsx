import AdvantagesSection from "../components/HomePage/HomePageComponents/AdvantagesSection";
import WelcomeSection from "../components/HomePage/HomePageComponents/WelcomeSection";
import { useDispatch, useSelector } from "react-redux";
import css from "./HomePage.module.css";
import { selectUserCount } from "../redux/UserAuth/selectors.js";
import { useEffect } from "react";
import { countUser } from "../redux/UserAuth/operations.js";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(countUser());
  });
  const userCount = useSelector(selectUserCount);
  return (
    <div className={css.container}>
      <WelcomeSection />
      <AdvantagesSection userCount={userCount} />
    </div>
  );
};

export default HomePage;
