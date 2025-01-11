import { useDispatch } from "react-redux";
import css from "./LogOutModal.module.css";
import { logout } from "../../../../redux/UserAuth/operations";
import { useModalContext } from "../../../../context/useModalContext";

const LogOutModal = ({ closePopover }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModalContext();

  const onLogOut = () => {
    dispatch(logout());
    closeModal();
    closePopover();
  };

  const handleClose = () => {
    closePopover();
    closeModal();
  };

  return (
    <div className={css.logOutModal}>
      <p className={css.title}>Log out</p>
      <p className={css.subtitle}>Do you really want to leave ?</p>
      <div className={css.boxButton}>
        <button className={css.buttonLogOut} type="button" onClick={onLogOut}>
          Log out
        </button>

        <button
          className={css.buttonCancel}
          type="button"
          onClick={handleClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LogOutModal;
