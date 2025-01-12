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

const data = [
  { name: "1", uv: 7, pv: 7, amt: 2400 },
  { name: "2", uv: 6, pv: 6, amt: 2210 },
  { name: "3", uv: 5, pv: 5, amt: 2290 },
  { name: "4", uv: 4, pv: 4, amt: 2000 },
  { name: "5", uv: 3, pv: 3, amt: 2181 },
  { name: "6", uv: 2, pv: 2, amt: 2500 },
  { name: "7", uv: 1, pv: 1, amt: 2100 },
];

const Schedule = () => {
  return (
    <div className={s.a}>
      <ResponsiveContainer width="100%" height={270}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <start offset="0%" stopColor="#9BE1A0" />
              <stop offset="100%" stopColor="#9BE1A0" stopOpacity={0.8} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="name"
            label={{
              value: "",
              position: "insideBottomRight",
              offset: -10,
            }} // Настройка подписи для оси X
            tick={{ fill: "#8884d8", fontSize: 12 }} // Цвет и размер подписей
          />
          <YAxis
            label={{ value: "", angle: -90, position: "insideLeft" }} // Настройка подписи для оси Y
            tick={{ fill: "#8884d8", fontSize: 12 }} // Цвет и размер подписей
            domain={["0%", "0.5 L"]} // Автоматический диапазон
          />
          <Tooltip />
          <Legend />

          {/* Применение градиента к заливке */}
          <Area
            type="cardinal"
            dataKey="uv"
            fill="url(#gradient1)" // Применение градиента
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
