import s from "./UserSettingsModal.module.css";
import UserSettingsForm from "../UserSettingsForm/UserSettingsForm.jsx";
import { useEffect, useRef } from "react";

const UserSettingsModal = ({ isOpen, onClose }) => {
	const modalRef = useRef(null);

	useEffect(() => {
		if (isOpen) {
			document.body.classList.add("modal-open");
		} else {
			document.body.classList.remove("modal-open");
		}
		return () => {
			document.body.classList.remove("modal-open");
		};
	}, [isOpen]);

	if (!isOpen) return null;

	const handleOverlayClick = (e) => {
		if (modalRef.current && !modalRef.current.contains(e.target)) {
			onClose();
		}
	};
	return (
		<div className={s.backdrop} onClick={handleOverlayClick}>
			<div
				ref={modalRef}
				onClick={(e) => e.stopPropagation()}
				className={s.modal}
			>
				<button onClick={onClose} className={s.button}>
					<svg className={s.closeIcon} width={28} height={28}>
						<use href="/icons.svg#icon-x"></use>
					</svg>
				</button>
				<div className={s.settingsModal}>
					<UserSettingsForm onClose={onClose} />
				</div>
			</div>
		</div>
	);
};

export default UserSettingsModal;
