import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import PropTypes from "prop-types";

import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  maintainAspectRatio: true,
  resizeDelay: 40,
  animateScale: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Accepted Work Spread",
    },
  },
};

interface PieChartProps {
  data: string;
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  console.log(data);
  return <Pie options={options} data={JSON.parse(data)} />;
};

PieChart.propTypes = {
  data: PropTypes.string.isRequired,
};

export default PieChart;
