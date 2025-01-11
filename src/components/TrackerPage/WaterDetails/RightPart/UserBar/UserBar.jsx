import { useState, useRef, useEffect } from "react";
import s from "./UserBar.module.css";
import UserBarPopover from "./UserBarPopover/UserBarPopover";

const UserBar = ({ user }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const userBarRef = useRef(null);

  const togglePopover = () => {
    setIsPopoverOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (userBarRef.current && !userBarRef.current.contains(event.target)) {
      setIsPopoverOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={s.userBarContainer} ref={userBarRef}>
      <button className={s.userBar} onClick={togglePopover}>
        <span className={s.userName}>
          {user?.name || user?.email.split("@")[0] || "User"}
        </span>
        <img
          className={s.avatar}
          src={user?.avatar || user?.name[0] || "U"}
          alt={`${user?.name || "User"} avatar`}
        />
      </button>
      {isPopoverOpen && <UserBarPopover />}
    </div>
  );
};

export default UserBar;
