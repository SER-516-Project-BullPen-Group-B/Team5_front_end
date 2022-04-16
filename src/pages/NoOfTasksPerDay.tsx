import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import DropDown from "../components/DropDown";
import { useState } from "react";

ChartJS.register(Title, Tooltip, Legend, PointElement, LineElement);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Completed Tasks Per Day",
    },
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const types = ["Bar", "Line", "Radar", "PolarArea", "Pie", "Doughnut"];

const labels = ["1", "2", "3", "4", "5", "6", "7"];

export const data = {
  labels: labels,
  datasets: [
    {
      label: "Tasks Per Day",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

export default function NoOfTasksPerDay() {
  const [select, setSelect] = useState("Charts");
  console.log(select);
  return (
    <div>
      <div className="flex justify-end ...">
        <div className="m-6">
          {" "}
          <DropDown values={types} select={setSelect} title={select} />
        </div>
      </div>
      <div className="m-4">
        <Line options={options} data={data} />
      </div>
    </div>
  );
}
