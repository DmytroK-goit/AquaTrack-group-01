import Login from "../modal/Login";
import Registration from "../modal/Registration";

const LeftPart = () => {
  return (
    <div className="w-96 h-96 border-2 border-black	rounded-md bg-slate-100">
      <p>LeftPart</p>
      <button>
        <Login />
      </button>
      <button>
        <Registration />
      </button>
    </div>
  );
};
export default LeftPart;
