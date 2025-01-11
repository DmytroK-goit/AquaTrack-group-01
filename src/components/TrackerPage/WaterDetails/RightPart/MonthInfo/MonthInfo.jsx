import { useState } from "react";
import s from "../MonthInfo/MonthInfo.module.css";

const MonthInfo = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const changeMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const getDaysInMonth = () => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const days = [];
    while (date.getMonth() === currentDate.getMonth()) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthNames[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  const daysInMonth = getDaysInMonth();

  return (
    <di className={s.month_info}>
      <div className={s.block_manth}>
        <h2 className={s.title}>Month</h2>
        <div className={s.block_manth_year}>
          <button onClick={() => changeMonth(-1)}>{"<"}</button>
          <h2 className={s.name_manth}>{`${monthName} ${year}`}</h2>
          <button onClick={() => changeMonth(1)}>{">"}</button>
          <a href="">
            <svg className={s.svg_pie}>
              <use href="../../../../../../public/icons.svg#icon-pie-chart-02" />
            </svg>
          </a>
        </div>
      </div>
      <div className={s.calendar}>
        {daysInMonth.map((date, index) => (
          <a key={index} className={s.a}>
            <div className={s.date_block}>
              <p className={s.calendar_date}>{date.getDate()}</p>
              <span>100%</span>
            </div>
          </a>
        ))}
      </div>
    </di>
  );
};
export default MonthInfo;
