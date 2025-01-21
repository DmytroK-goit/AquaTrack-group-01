import { useState, useRef, useEffect } from "react";
import s from "./UserBar.module.css";
import UserBarPopover from "./UserBarPopover/UserBarPopover";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../../redux/UserAuth/selectors";

const UserBar = () => {
  const user = useSelector(selectUser);

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

  const getFallbackAvatar = () => {
    if (user?.name) {
      return user.name[0].toUpperCase();
    }
    if (user?.email) {
      return user.email[0].toUpperCase();
    }
    return "U";
  };

  return (
    <div className={s.userBarContainer} ref={userBarRef}>
      <button className={s.userBar} onClick={togglePopover}>
        <span className={s.userName}>
          {user?.name || user?.email.split("@")[0] || "User"}
        </span>
        {user?.avatar ? (
          <img
            className={s.avatar}
            src={user.avatar}
            alt={`${user?.name || "User"} avatar`}
          />
        ) : (
          <div className={s.avatarFallback}>{getFallbackAvatar()}</div>
        )}
        <svg className={`${s.icon} ${isPopoverOpen ? s.iconRotated : ""}`}>
          <use href="icons.svg#icon-down"></use>
        </svg>
      </button>
      {isPopoverOpen && <UserBarPopover />}
    </div>
  );
};

export default UserBar;
