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
    date: new Date(item.date).getDate(), // дата
    waterPercentage: parseInt(item.waterPercentage, +10), // преобразуем строку в число
  }));
  return (
    <div className={s.a}>
      <ResponsiveContainer width="100%" height={270}>
        <AreaChart data={chartData}>
          {/* Ось X */}
          <XAxis dataKey="date" />
          {/* Ось Y */}
          <YAxis />
          {/* Легенда */}
          <Legend />
          {/* Подсказка */}
          <Tooltip
            formatter={(value) => [`Water Percentage: ${value}%`]}
            labelFormatter={(value) => `Date: ${value}`}
          />
          {/* Область на графике с ступенчатой линией */}
          <Area
            type="linear" // Используем тип step для ступенчатой линии
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

// import { Line } from "react-chartjs-2"; // Компонент для линейного графика
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// // Регистрируем необходимые компоненты Chart.js
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const Shedule = () => {
//   // Данные для графика
//   const data = {
//     labels: ["January", "February", "March", "April", "May"], // Метки для оси X
//     datasets: [
//       {
//         label: "Sales Data", // Название графика
//         data: [65, 59, 80, 81, 56], // Данные графика
//         borderColor: "rgba(75, 192, 192, 1)", // Цвет линии
//         backgroundColor: "rgba(75, 192, 192, 0.2)", // Цвет заливки
//         borderWidth: 2, // Толщина линии
//         fill: true, // Включаем заливку области под линией
//       },
//     ],
//   };

//   // Опции графика
//   const options = {
//     responsive: true, // Адаптивность графика
//     plugins: {
//       legend: {
//         position: "top", // Позиция легенды
//       },
//       tooltip: {
//         callbacks: {
//           label: function (tooltipItem) {
//             return tooltipItem.label + ": " + tooltipItem.raw + " units"; // Форматирование всплывающей подсказки
//           },
//         },
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true, // Начинаем с 0 на оси Y
//       },
//     },
//   };

//   return (
//     <div className={s.a}>
//       <div>
//         <Line data={data} options={options} />
//       </div>
//     </div>
//   );
// };

// export default Shedule;

// const Schedule = () => {
//   return <div className={s.a}>Schedule</div>;
// };

// export default Schedule;
