import { Chart as ChartJS, 
    ArcElement, 
    Tooltip, 
    Legend } from 'chart.js';
import PropTypes from "prop-types";

import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


interface DoughnutChartProps {
    data: string;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ data }) => {
  return <Doughnut data={JSON.parse(data)} />;
}

DoughnutChart.propTypes = {
    data: PropTypes.string.isRequired,
};
  
export default DoughnutChart;
