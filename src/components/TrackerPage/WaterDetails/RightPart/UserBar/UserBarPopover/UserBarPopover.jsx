import s from "./UserBarPopover.module.css";
import { useState } from "react";
import Modal from "../../../../modal/Modal/Modal";
import LogOutModal from "../../../../modal/LogOutModal/LogOutModal";
const UserBarPopover = () => {
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);

  const openLogOutModal = () => {
    setIsLogOutModalOpen(true);
  };

  const closeLogOutModal = () => {
    setIsLogOutModalOpen(false);
  };

  return (
    <div className={s.popover}>
      <button className={s.popoverButtonSettings}>Settings</button>
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
};

export default UserBarPopover;
