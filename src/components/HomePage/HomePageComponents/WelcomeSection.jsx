import SignIn from "../UserComponents/SignIn";
import SignUp from "../UserComponents/SignUp";
import Logo from "./Logo";
import css from "./WelcomeSection.module.css";

const WelcomeSection = () => {
  return (
    <div className={css.conteiner}>
      <p className={css.logo}>
        <Logo />
      </p>
      <p className={css.paragraf}>Record daily water intake and track</p>
      <h2 className={css.h2}>Water consumption tracker</h2>
      <div className={css.divButton}>
        <button className={css.signIn}>
          <SignIn />
        </button>
        <button className={css.signUp}>
          <SignUp />
        </button>
      </div>
    </div>
  );
};
export default WelcomeSection;
