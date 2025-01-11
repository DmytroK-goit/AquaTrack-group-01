import Modal from "react-modal";
import css from "./UniversalModal.module.css";
import Iconsvg from "../../../Icon/Icon";
import { useModalContext } from "../../../../context/useModalContext";

Modal.setAppElement("#root");

const UniversalModal = () => {
  const { isOpen, closeModal, modalContent, modalStyles } = useModalContext();
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      className={`${css.modalContent} ${modalStyles.modalClassName}`}
      overlayClassName={`${css.modalBackdrop} ${modalStyles.overlayClassName}`}
    >
      <button className={css.modalCloseButton} onClick={closeModal}>
        <Iconsvg iconName="icon-x" className={css.iconClose} />
      </button>
      {modalContent}
    </Modal>
  );
};

export default UniversalModal;
