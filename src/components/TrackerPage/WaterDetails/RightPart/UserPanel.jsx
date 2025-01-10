import s from "./UserPanel.module.css";
import UserBar from "./UserBar/UserBar.jsx";

const UserPanel = ({ user }) => {
  const getUserName = () => {
    return user?.name || user?.email.split("@")[0] || "User";
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
