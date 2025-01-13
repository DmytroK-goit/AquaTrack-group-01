import s from "./UserSettingsModal.module.css";
import UserSettingsForm from "../UserSettingsForm/UserSettingsForm.jsx";
import { useRef } from "react";

const UserSettingsModal = ({ isOpen, onClose }) => {
	const modalRef = useRef(null);

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
