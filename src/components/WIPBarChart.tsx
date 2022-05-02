import { 
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement
} from "chart.js";
import { Bar } from "react-chartjs-2";
import PropTypes from "prop-types";

ChartJS.register(Title, Tooltip, Legend, BarElement);

const options = {
    plugins: {
      title: {
        display: true,
        text: "Work in Progress"
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true
      }
    }
  };

interface WIPBarChartProps {
    data: string;
}

const WIPBarChart: React.FC<WIPBarChartProps> = ({ data }) => {
    return <Bar options={options} data={JSON.parse(data)} />;
};

WIPBarChart.propTypes = {
    data: PropTypes.string.isRequired
}

export default WIPBarChart;