import { useModalContext } from "../../../context/useModalContext";
import LogOutModal from "../modal/LogOutModal/LogOutModal";
import Iconsvg from "../../../components/Icon/Icon";

const UserBarPopover = ({ onClose }) => {
  const { openModal } = useModalContext();

  const handleLogOutClick = () => {
    openModal(<LogOutModal onClose={onClose} />);
    onClose();
  };

  return (
    <div className={css.userPopover}>
      <button className={css.userPopoverBtn} onClick={handleLogOutClick}>
        <Iconsvg className={css.userPopoverBtnIcon} iconName="icon-log-out" />
      </button>
    </div>
  );
};

export default UserBarPopover;
