import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../../../../redux/UserAuth/operations";
import Modal from "../../../../modal/Modal/Modal";
import LogOutModal from "../../../../modal/LogOutModal/LogOutModal";
import s from "./UserBarPopover.module.css";
import UserSettingsModal from "../../../../modal/UserSettingsModal/UserSettingsModal";

const UserBarPopover = () => {
  const dispatch = useDispatch();
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);
  const [isOpenSetting, setIsOpenSetting] = useState(false);

  const openLogOutModal = () => setIsLogOutModalOpen(true);

  const closeLogOutModal = () => setIsLogOutModalOpen(false);

  const handleSettingClick = () => setIsOpenSetting(true);

  const handleCloseSetting = () => setIsOpenSetting(false);

  return (
    <div className={s.popover}>
      <button onClick={handleSettingClick} className={s.popoverButtonSettings}>
        Settings
      </button>

      <button onClick={openLogOutModal} className={s.popoverButtonLogOut}>
        Log out
      </button>

      {isOpenSetting && (
        <div className={s.settingsPlaceholder}>
          isOpenSetting && <UserSettingsModal onClose={handleCloseSetting} />;
        </div>
      )}
      {isLogOutModalOpen && (
        <Modal isOpen={isLogOutModalOpen} onClose={closeLogOutModal}>
          <LogOutModal onClose={closeLogOutModal} />
        </Modal>
      )}
    </div>
  );
};

export default UserBarPopover;
