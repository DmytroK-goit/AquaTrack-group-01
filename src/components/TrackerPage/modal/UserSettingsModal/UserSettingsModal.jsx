import ReactModal from "react-modal";
import s from "./UserSettingsModal.module.css";
import UserSettingsForm from "../UserSettingsForm/UserSettingsForm.jsx";

ReactModal.setAppElement("#root");

const UserSettingsModal = ({ isOpen, onClose }) => {
  // Функція для закриття модалки, якщо клік по фону
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ReactModal
      overlayClassName={s.backdrop}
      className={s.modalContainer}
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
      onClick={handleBackdropClick} // Закриваємо модалку при кліку на фон
    >
      <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className={s.closeButton}>
          <svg className={s.closeIcon} width={28} height={28}>
            <use href="/icons.svg#icon-x"></use>
          </svg>
        </button>
        <UserSettingsForm />
      </div>
    </ReactModal>
  );
};

export default UserSettingsModal;
