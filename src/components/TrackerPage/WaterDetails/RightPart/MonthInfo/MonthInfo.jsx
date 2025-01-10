import React, { useState } from "react";

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

  const getStartDayOfMonth = () => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    return date.getDay();
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
  const startDay = getStartDayOfMonth();
  return (
    <div>
      <div className={s.name_manth}>
        <h2>{`${monthName}`}</h2>
        <div className={s.name_manth_year}>
          <button onClick={() => changeMonth(-1)}>{"<"}</button>
          <h2>{`${monthName} ${year}`}</h2>
          <button onClick={() => changeMonth(1)}>{">"}</button>
        </div>
      </div>

      {daysInMonth.map((date, index) => (
        <a className={s.calendar}>
          <div className={s.date_block}>
            <p key={index} className={s.calendar_date}>
              {date.getDate()}
            </p>
            <span>100%</span>
          </div>
        </a>
      ))}

      {/* {Array.from({ length: startDay }).map((_, index) => (
          <p key={`empty-${index}`} />
        ))} */}
    </div>
  );
};
export default MonthInfo;
