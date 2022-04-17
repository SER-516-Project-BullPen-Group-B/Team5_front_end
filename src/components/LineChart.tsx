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
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
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
  