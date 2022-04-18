import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import PropTypes from "prop-types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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
};

interface BarChartProps {
  data: string;
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  return <Bar options={options} data={JSON.parse(data)} />;
};

BarChart.propTypes = {
  data: PropTypes.string.isRequired,
};

export default BarChart;
