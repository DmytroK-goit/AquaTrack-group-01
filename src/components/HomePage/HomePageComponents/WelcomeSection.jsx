import SignIn from "../UserComponents/SignIn";
import SignUp from "../UserComponents/SignUp";

const WelcomeSection = () => {
  return (
    <div className="w-96 h-96 border-2 border-black	rounded-md bg-slate-100">
      <p>LeftPart</p>
      <button>
        <SignIn />
      </button>
      <button>
        <SignUp />
      </button>
    </div>
  );
};
export default WelcomeSection;
