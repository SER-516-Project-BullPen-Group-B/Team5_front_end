import { Chart as ChartJS, 
    ArcElement, 
    Tooltip, 
    Legend } from 'chart.js';
import PropTypes from "prop-types";

import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
    responsive: true,
    maintainAspectRatio: true,
    resizeDelay: 40,
    animateScale:true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Per User Story'
        }
    }
}

interface DoughnutChartProps {
    data: string;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ data }) => {
  return <Doughnut options={options} data={JSON.parse(data)} />;
}

DoughnutChart.propTypes = {
    data: PropTypes.string.isRequired,
};
  
export default DoughnutChart;
