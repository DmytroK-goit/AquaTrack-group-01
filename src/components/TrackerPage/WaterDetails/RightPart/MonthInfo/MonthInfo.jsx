import { useState } from "react";
import s from "../MonthInfo/MonthInfo.module.css";
import Schedule from "./Schedule";
import { useDispatch, useSelector } from "react-redux";
import { waterSelectors } from "../../../../../redux/Water/selectors";
import { dayWater } from "../../../../../redux/Water/operatios";
import { setSelectedDate } from "../../../../../redux/DateSlice";

const MonthInfo = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showSchedule, setShowShedule] = useState(true);
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.date.selectedDate);

  const waterData = useSelector(waterSelectors.selectMonthWater);
  const waterMap = waterData.reduce((acc, { date, waterPercentage }) => {
    acc[date] = waterPercentage;
    return acc;
  }, {});

  const today = new Date().toISOString().split("T")[0];

  const getButtonClass = (percent, formattedDate) => {
    if (formattedDate === selectedDate) {
      return `${s.selected} ${s.selected_date}`;
    }
    if (percent <= 0) {
      return s.white;
    } else if (percent > 0 && percent <= 99) {
      return s.grey;
    } else {
      return s.green;
    }
  };

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

  const toggleView = () => {
    setShowShedule(!showSchedule);
  };

  const handleDateClick = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    console.log("Selected date:", formattedDate);
    dispatch(setSelectedDate({ data: formattedDate }));
    dispatch(dayWater(formattedDate));
  };

  return (
    <div className={s.month_info}>
      <div className={s.block_manth}>
        {showSchedule ? (
          <h2 className={s.title}>Month</h2>
        ) : (
          <h2 className={s.title}>Statistics</h2>
        )}

        <div className={s.block_manth_year}>
          <button onClick={() => changeMonth(-1)}>{"<"}</button>
          <h2 className={s.name_manth}>{`${monthName} ${year}`}</h2>
          <button onClick={() => changeMonth(1)}>{">"}</button>
          <button onClick={toggleView}>
            <svg className={s.svg_pie}>
              <use href="/icons.svg#icon-pie-chart-02" />
            </svg>
          </button>
        </div>
      </div>
      {showSchedule ? (
        <div className={s.calendar}>
          {daysInMonth.map((date, index) => {
            const formattedDate = date.toISOString().split("T")[0];
            const waterAmount = waterMap[formattedDate] || 0;

            return (
              <div
                key={index}
                className={s.date_block}
                onClick={() => handleDateClick(date)}
              >
                <p
                  className={`${s.calendar_date} ${getButtonClass(
                    waterAmount,
                    formattedDate
                  )} ${formattedDate === today ? s.calendar_date_today : ""}`}
                >
                  {date.getDate()}
                </p>
                <span>{waterAmount}%</span>
              </div>
            );
          })}
        </div>
      ) : (
        <Schedule />
      )}
    </div>
  );
};

export default MonthInfo;
