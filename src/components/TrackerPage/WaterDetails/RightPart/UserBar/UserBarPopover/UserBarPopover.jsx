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
  const [isPopoverOpen, setIsPopoverOpen] = useState(true);

  const openLogOutModal = () => {
    setIsLogOutModalOpen(true);
    setIsOpenSetting(false);
    setIsPopoverOpen(false);
  };

  const closeLogOutModal = () => setIsLogOutModalOpen(false);

  const handleSettingClick = () => {
    setIsOpenSetting(true);
    setIsLogOutModalOpen(false);
    setIsPopoverOpen(false);
  };

  const handleCloseSetting = () => setIsOpenSetting(false);

  return (
    <>
      {isPopoverOpen && (
        <div className={s.popover}>
          <button
            onClick={handleSettingClick}
            className={s.popoverButtonSettings}
          >
            <svg className={s.icon}>
              <use href="../../../../../../../public/icons.svg#icon-settings"></use>
            </svg>
            Settings
          </button>

          <button onClick={openLogOutModal} className={s.popoverButtonLogOut}>
            <svg className={s.icon}>
              <use href="../../../../../../../public/icons.svg#icon-log-out"></use>
            </svg>
            Log out
          </button>
        </div>
      )}

      {isOpenSetting && (
        <UserSettingsModal
          isOpen={isOpenSetting}
          onClose={handleCloseSetting}
        />
      )}

      {/* Модалка для LogOut */}
      {isLogOutModalOpen && (
        <Modal isOpen={isLogOutModalOpen} onClose={closeLogOutModal}>
          <LogOutModal onClose={closeLogOutModal} />
        </Modal>
      )}
    </>
  );
};

export default UserBarPopover;
