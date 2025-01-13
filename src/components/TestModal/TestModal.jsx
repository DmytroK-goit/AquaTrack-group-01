import Modal from "react-modal";
import styles from "./TestModal.module.css";

Modal.setAppElement("#root");

export default function TestModal({ openModal, closeModal }) {
  return (
    <Modal
      isOpen={openModal}
      onRequestClose={closeModal}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <button onClick={closeModal}>close</button>
      <div>I am a modal</div>
    </Modal>
  );
}
