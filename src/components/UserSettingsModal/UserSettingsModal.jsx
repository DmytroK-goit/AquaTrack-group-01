import ReactModal from "react-modal";
import s from "./UserSettingsModal.module.css";
import UserSettingsForm from "../UserSettingsForm/UserSettingsForm.jsx";
import { useState } from "react";

ReactModal.setAppElement("#root");

const UserSettingsModal = () => {
	const [isOpen, setIsOpen] = useState(true);
	const handleSubmit = () => {
		setIsOpen(false);
	};

	return (
		<div className={s.modal}>
			<ReactModal
				overlayClassName={s.backdrop}
				className={s.modal}
				isOpen={isOpen}
				// onRequestClose=""
				ariaHideApp={false}
			>
				<button onClick={() => handleSubmit()} className={s.button}>
					<svg className={s.closeIcon} width={28} height={28}>
						<use href="/icons.svg#icon-x"></use>
					</svg>
				</button>
				<div className={s.settingsModal}>
					<UserSettingsForm />
				</div>
			</ReactModal>
		</div>
	);
};

export default UserSettingsModal;
