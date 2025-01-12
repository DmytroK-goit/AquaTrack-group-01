import React from "react";
import Modal from "../../../../components/TrackerPage/modal/Modal/Modal.jsx"; // Новий компонент модалки
import s from "./UserSettingsModal.module.css";
import UserSettingsForm from "../UserSettingsForm/UserSettingsForm.jsx";

const UserSettingsModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={s.modalContent}>
        <UserSettingsForm />
      </div>
    </Modal>
  );
};

export default UserSettingsModal;
