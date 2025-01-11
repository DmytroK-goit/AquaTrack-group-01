import SignIn from "../UserComponents/SignIn";
import SignUp from "../UserComponents/SignUp";
import Logo from "./Logo";
import css from "./WelcomeSection.module.css";

import { useNavigate } from "react-router-dom";

const WelcomeSection = () => {
  const navigate = useNavigate();
  const handleSignInClick = () => {
    navigate("/signin");
  };
  const handleSignUpClick = () => {
    navigate("/signup");
  };
  return (
    <div className={css.conteiner}>
      <div className={css.logo}>
        <Logo />
      </div>
      <p className={css.paragraf}>Record daily water intake and track</p>
      <h2 className={css.h2}>Water consumption tracker</h2>
      <div>
        <button onClick={handleSignInClick} className={css.signIn}>
          <SignIn />
        </button>
        <button onClick={handleSignUpClick} className={css.signUp}>
          <SignUp />
        </button>
      </div>
    </div>
  );
};
export default WelcomeSection;
