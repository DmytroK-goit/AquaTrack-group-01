import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import styles from "../WaterMainInfo.module.css";
import { currentUser } from "../../../../redux/UserAuth/operations";
import { selectUser } from "../../../../redux/UserAuth/selectors";

const defaultDailyNorma = 1500;

export default function WaterDailyNorma() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [dailyNorma, setDailyNorma] = useState(defaultDailyNorma / 1000);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  useEffect(() => {
    if (user?.dailyNorm) {
      setDailyNorma(user.dailyNorm / 1000);
    }
  }, [user]);

  return (
    <>
      <div className={styles.waterNorma}>{`${dailyNorma} L`}</div>
      <p className={styles.waterNormaDescr}>My daily norma</p>
    </>
  );
}
