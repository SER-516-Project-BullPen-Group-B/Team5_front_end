import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

import PropTypes from "prop-types";

ChartJS.register(Title, Tooltip, Legend, PointElement, LineElement);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Per User Story",
    },
  },
  animations: {
    tension: {
      duration: 1000,
      from: 1,
      to: 0,
      loop: true,
    },
  },
  scales: {
    x:{
      title:{
        display:true,
        text: "User Stories"
      }
    },
    y:{
      title:{
        beginAtZero:true,
        display:true,
        text: "Days"
      },
      min:0,
      max:20,
    },
  }
};

interface LineChartProps {
  data: string;
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  return <Line options={options} data={JSON.parse(data)} />;
};

LineChart.propTypes = {
  data: PropTypes.string.isRequired,
};

export default LineChart;
