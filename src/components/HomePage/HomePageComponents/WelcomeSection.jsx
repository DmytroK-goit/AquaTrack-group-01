import { useNavigate } from "react-router-dom";
import SignIn from "../UserComponents/SignIn";
import SignUp from "../UserComponents/SignUp";
import Logo from "./Logo";
import css from "./WelcomeSection.module.css";

const WelcomeSection = () => {
  const navigate = useNavigate();
  const handelSignInClick = () => {
    navigate("/signin");
  };

  const handelSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <div className={css.conteiner}>
      <p className={css.logo}>
        <Logo />
      </p>
      <p className={css.paragraf}>Record daily water intake and track</p>
      <h2 className={css.h2}>Water consumption tracker</h2>
      <div className={css.divButton}>
        <button onClick={handelSignInClick} className={css.signIn}>
          Sign In
        </button>
        <button onClick={handelSignUpClick} className={css.signUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
};
export default WelcomeSection;
