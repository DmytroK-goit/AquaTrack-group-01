import { useState } from "react";
import s from "./UserBarPopover.module.css";
import UserSettingsForm from "../../../../modal/UserSettingsForm/UserSettingsForm";
import { useDispatch } from "react-redux";
import { logout } from "../../../../../../redux/UserAuth/operations";

const UserBarPopover = () => {
  const [isOpenSetting, setIsOpenSetting] = useState(false);

  const handleSettingClick = () => {
    setIsOpenSetting(true);
  };

  const handleCloseSetting = () => {
    setIsOpenSetting(false);
  };

  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout());
  };
  return (
    <div className={s.popover}>
      <button onClick={handleSettingClick} className={s.popoverButtonSettings}>
        Settings
      </button>
      <button onClick={handleLogOut} className={s.popoverButtonLogOut}>
        Log out
      </button>
      {isOpenSetting && <UserSettingsForm onClose={handleCloseSetting} />}
    </div>
  );
};

export default UserBarPopover;
