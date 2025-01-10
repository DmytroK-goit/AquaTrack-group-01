import s from "./UserBarPopover.module.css";

const UserBarPopover = () => {
  return (
    <div className={s.popover}>
      <button className={s.popoverButtonSettings}>Settings</button>
      <button className={s.popoverButtonLogOut}>Log out</button>
    </div>
  );
};

export default UserBarPopover;
