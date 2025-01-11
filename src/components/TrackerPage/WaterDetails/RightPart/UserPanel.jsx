import s from "./UserPanel.module.css";
import UserBar from "./UserBar/UserBar.jsx";
import { useSelector } from "react-redux";
import {
  selectUser,
  selectUserName,
} from "../../../../redux/UserAuth/selectors.js";

const UserPanel = () => {
  const userName = useSelector(selectUserName);
  const user = useSelector(selectUser);
  const getUserName = () => {
    return userName || user?.email.split("@")[0] || "User";
  };

  return (
    <header className={s.header}>
      <h1 className={s.greeting}>
        Hello, <strong>{getUserName()}!</strong>
      </h1>
      <UserBar user={user} />
    </header>
  );
};

export default UserPanel;
