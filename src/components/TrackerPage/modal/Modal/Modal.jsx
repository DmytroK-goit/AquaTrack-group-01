import React, { useRef } from "react";
import css from "./Modal.module.css";

export default function Modal({ isOpen, onClose, children }) {
  const modalRef = useRef(null);

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <div className={css.overlay} onClick={handleOverlayClick}>
      <div ref={modalRef} className={css.modal}>
        {children}
      </div>
    </div>
  );
}
