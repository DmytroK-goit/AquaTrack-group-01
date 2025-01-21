import { useSelector } from "react-redux";
import s from "../MonthInfo/Schedule.module.css";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { waterSelectors } from "../../../../../redux/Water/selectors";

const Schedule = () => {
  const waterManth = useSelector(waterSelectors.selectMonthWater);

  const chartData = waterManth.map((item) => ({
    date: new Date(item.date).getDate(),
    waterPercentage: parseInt(item.waterPercentage),
  }));
  return (
    <div className={s.a}>
      <ResponsiveContainer width="100%" height={270}>
        <AreaChart data={chartData}>
          <XAxis dataKey="date" />
          <YAxis />
          <Legend />
          <Tooltip
            formatter={(value) => [`Water Percentage: ${value}%`]}
            labelFormatter={(value) => `Date: ${value}`}
          />
          <Area
            type="linear"
            dataKey="waterPercentage"
            stroke="#9BE1A0"
            fill="#9BE1A0"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Schedule;
