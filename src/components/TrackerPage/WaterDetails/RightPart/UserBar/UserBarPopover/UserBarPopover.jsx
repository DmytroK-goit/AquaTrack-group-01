import { useState } from "react";
import s from "./UserBarPopover.module.css";
import { useState } from "react";
import Modal from "../../../../modal/Modal/Modal";
import LogOutModal from "../../../../modal/LogOutModal/LogOutModal";
const UserBarPopover = () => {
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);
  const [isOpenSetting, setIsOpenSetting] = useState(false);

  const openLogOutModal = () => {
    setIsLogOutModalOpen(true);
  };

  const closeLogOutModal = () => {
    setIsLogOutModalOpen(false);
  };

  const handleSettingClick = () => {
    setIsOpenSetting(true);
  };

  const handleCloseSetting = () => {
    setIsOpenSetting(false);
  };

  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout());
  };
};

return (
  <div className={s.popover}>
    <button onClick={handleSettingClick} className={s.popoverButtonSettings}>
      Settings
    </button>
    <button onClick={handleLogOut} className={s.popoverButtonLogOut}>
      Log out
    </button>
    {isOpenSetting && <UserSettingsForm onClose={handleCloseSetting} />}

    <button
      className={s.popoverButtonLogOut}
      onClick={openLogOutModal}
      type="button"
    >
      Log out
    </button>
    {isLogOutModalOpen && (
      <Modal isOpen={isLogOutModalOpen} onClose={closeLogOutModal}>
        <LogOutModal onClose={closeLogOutModal} />
      </Modal>
    )}
  </div>
);

export default UserBarPopover;
