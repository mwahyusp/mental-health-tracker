import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MoodChart = ({ moods }) => {
  const lastMonth = moment().subtract(1, "month").format("YYYY-MM-DD");
  const filteredMoods = moods.filter((mood) => mood.date >= lastMonth);

  const labels = [...new Set(filteredMoods.map((m) => m.date))].sort();
  const dataHappy = labels.map(
    (date) =>
      filteredMoods.filter((m) => m.date === date && m.mood === "happy").length
  );
  const dataSad = labels.map(
    (date) =>
      filteredMoods.filter((m) => m.date === date && m.mood === "sad").length
  );
  const dataAnxious = labels.map(
    (date) =>
      filteredMoods.filter((m) => m.date === date && m.mood === "anxious")
        .length
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Happy",
        data: dataHappy,
        backgroundColor: "rgba(72, 187, 120, 0.6)",
      },
      {
        label: "Sad",
        data: dataSad,
        backgroundColor: "rgba(75, 156, 211, 0.6)",
      },
      {
        label: "Anxious",
        data: dataAnxious,
        backgroundColor: "rgba(236, 201, 75, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Monthly Mood Chart" },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
      <Bar data={data} options={options} />
    </div>
  );
};

export default MoodChart;
