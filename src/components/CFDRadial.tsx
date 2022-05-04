import { 
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    PointElement,
    RadarController, 
    Filler
} from "chart.js";
import { Radar } from "react-chartjs-2";
import PropTypes from "prop-types";

ChartJS.register(Title, Tooltip, Legend, PointElement, RadarController, Filler);

const options = {
    responsive: true,
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
            tension: 0.4
        }
    }
};

interface CFDProps {
    data: string;
}

const CFD: React.FC<CFDProps> = ({ data }) => {
    return <Radar options={options} data={JSON.parse(data)} />;
};

CFD.propTypes = {
    data: PropTypes.string.isRequired
}

export default CFD;