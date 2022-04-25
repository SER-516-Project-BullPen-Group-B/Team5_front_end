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

interface BarChartProps {
  data: string;
  options: string;
}

const BarChart: React.FC<BarChartProps> = ({ data, options }) => {
  return <Bar options={JSON.parse(options)} data={JSON.parse(data)} />;
};

BarChart.propTypes = {
  data: PropTypes.string.isRequired,
  options: PropTypes.string.isRequired,
};

export default BarChart;
