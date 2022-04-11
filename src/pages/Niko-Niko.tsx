import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Nav from "../components/NavBar";
import { Bar } from 'react-chartjs-2';
import DropDown from "../components/DropDown";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Niko-Niko graphical representation',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ['arajula', 'adidesai', 'gkrish23', 'mpattan', 'kkalvakolanu'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Mad',
      data: [0,1,0,1,2],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Happy',
      data: [1,1,2,1,0],
      backgroundColor: 'rgb(75, 192, 192)',
    },
    {
      label: 'Sad',
      data: [0,1,2,0,2],
      backgroundColor: 'rgb(53, 162, 235)',
    },
  ],
};

export default function Niko() {
    return (
      <div>
        <Nav />
        <div className="flex justify-end ...">
          <div className="m-6">
            {" "}
            <DropDown />
          </div>
        </div>
        <div className="m-4">
        <Bar options={options} data={data} />
        </div>
      </div>
    );
  }