import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = [
  "Achyuth reddy Rajula",
  "Aditya desai",
  "Mohammadh Patthan",
  "Gautham krishna",
  "Srikar Vodeti",
  "Shandilya",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Tasks in progress",
      data: [5, 3, 1, 1, 3, 2],
    },
  ],
};

export const options = {
  responsive: true,
  maintainAspectRatio: true,
  resizeDelay: 10,
  animateScale: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Per User Story",
    },
  },
};

export default function Lineactive() {
  return <Pie options={options} data={data} />;
}
