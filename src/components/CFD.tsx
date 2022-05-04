import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import PropTypes from "prop-types";

ChartJS.register(Title, Tooltip, Legend, PointElement, LineElement, Filler);

const options = {
  responsive: true,
  stacked: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Cummulative Flow Diagram",
    },
  },
  elements: {
    line: {
      tension: 0.4,
    },
  },
  scales: {
    y: {
      stacked: true,
    },
  },
};

interface CFDProps {
  data: string;
}

const CFD: React.FC<CFDProps> = ({ data }) => {
  return <Line options={options} data={JSON.parse(data)} />;
};

CFD.propTypes = {
  data: PropTypes.string.isRequired,
};

export default CFD;
