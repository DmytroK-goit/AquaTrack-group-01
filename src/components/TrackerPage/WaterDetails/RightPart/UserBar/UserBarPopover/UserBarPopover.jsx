import s from "./UserBarPopover.module.css";

const UserBarPopover = () => {
  return (
    <div className={s.popover}>
      <button className={s.popoverButton}>Settings</button>
      <button className={s.popoverButton}>Log out</button>
    </div>
  );
};

export default UserBarPopover;
