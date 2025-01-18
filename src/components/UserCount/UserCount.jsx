import { useState, useEffect } from "react";
import usercount1 from "../../images/userCount/usercount1.png";
import usercount2 from "../../images/userCount/usercount2.png";
import usercount3 from "../../images/userCount/usercount3.png";
import styles from "./UserCount.module.css";
import { selectUserCount } from "../../redux/UserAuth/selectors";

const UserCount = () => {
  const [userCount, setUserCount] = useState(null);

  useEffect(() => {
    async function getCount() {
      try {
        const data = await selectUserCount();
        setUserCount(data.data.count);
      } catch (err) {
        console.log(err.message);
      }
    }

    getCount();
  }, []);

  return (
    <div className={styles.userCountComponent}>
      <ul className={styles.userCountList}>
        <li className={styles.userCountItem}>
          <img src={usercount1} alt="user" />
        </li>
        <li className={styles.userCountItem}>
          <img src={usercount2} alt="user" />
        </li>
        <li className={styles.userCountItem}>
          <img src={usercount3} alt="user" />
        </li>
      </ul>
      <p className={styles.userCountText}>
        Our <span className={styles.highlight}>happy</span> {userCount}{" "}
        customers
      </p>
    </div>
  );
};

export default UserCount;
