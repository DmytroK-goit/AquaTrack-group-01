import { useModalContext } from "../../../context/useModalContext";
import LogOutModal from "../modal/LogOutModal/LogOutModal";
import Iconsvg from "../../../components/Icon/Icon";

const { openModal } = useModalContext();

const UserBarPopover = () => {
  return (
    <div>
      <h1>UserBarPopover </h1>

      <button
        className={css.userPopoverBtn}
        onClick={() => {
          openModal(<LogOutModal closePopover={closePopover} />);
        }}
      >
        <Iconsvg className={css.userPopoverBtnIcon} iconName={"log-out"} />
      </button>
    </div>
  );
};
export default UserBarPopover;
