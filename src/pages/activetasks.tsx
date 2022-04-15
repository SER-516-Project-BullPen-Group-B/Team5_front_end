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
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
    },
    title: {
      display: true,
      text: 'Graphical representation for Active tasks',
    },
  },
};

const labels = ['Achuth reddy Rajula', 'Gautham Krishna', 'Shandilya', 'Aditya desai', 'Srikar Vodeti', 'Mohammed pathan', 'Varshik sonti'];

export const data = {
  labels,
  datasets: [
    {
      label: 'No of tasks in progress',
      data: [5,1,0,3,0,1,2],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'No of tasks ready to test',
      data: [0,1,4,0,2,3],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

 export default function Activetasks() {
  return <Bar options={options} data={data} />;
}
