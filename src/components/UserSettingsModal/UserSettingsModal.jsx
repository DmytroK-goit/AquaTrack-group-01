import s from "./UserSettingsModal.module.css";
import UserSettingsForm from "../UserSettingsForm/UserSettingsForm.jsx";

const UserSettingsModal = () => {
	return (
		<div className={s.modal}>
			<button className={s.button}>
				<svg className={s.closeIcon} width={28} height={28}>
					<use href="../img/icons.svg#icon-xxx"></use>
				</svg>
			</button>
			<div className={s.settingsModal}>
				<h2 className={s.titleOfModal}>Setting</h2>
				<UserSettingsForm onClose="" />
			</div>
		</div>
	);
};

export default UserSettingsModal;
