import { 
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement, 
    Filler
} from "chart.js";
import { Line } from "react-chartjs-2";
import PropTypes from "prop-types";

ChartJS.register(Title, Tooltip, Legend, PointElement, LineElement, Filler);

const options = {
    responsive: true,
    plugins: {
        legend: {
        position: "top" as const,
        },
        title: {
        display: true,
        text: "Work in Progress",
        },
    },
    elements: {
        line: {
            tension: 0.4
        }
    }
};

interface WIPChartProps {
    data: string;
}

const WIPChart: React.FC<WIPChartProps> = ({ data }) => {
    return <Line options={options} data={JSON.parse(data)} />;
};

WIPChart.propTypes = {
    data: PropTypes.string.isRequired
}

export default WIPChart;