import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../../redux/UserAuth/operations";
import css from "./LogOutModal.module.css";

const LogOutModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await dispatch(logout()).unwrap();
      localStorage.clear();
      navigate("/");
    } catch (error) {
      console.error("Logout request failed:", error);
    } finally {
      onClose();
    }
  };

  return (
    <div className={css.LogOutModalContainer}>
      <h2 className={css.title}>Log out</h2>
      <p className={css.caption}>Do you really want to leave?</p>
      <div className={css.btnCont}>
        <button className={css.logButton} onClick={handleLogout}>
          Log out
        </button>
        <button className={css.cancelButton} onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LogOutModal;
