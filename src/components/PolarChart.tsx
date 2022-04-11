import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
  } 
  from 'chart.js';
  import { PolarArea } from 'react-chartjs-2';
 
import PropTypes from "prop-types"

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);


interface PolarChartProps {
    data: string;
}
  
const PolarChart: React.FC<PolarChartProps> = ({data}) => {
    return <PolarArea data={JSON.parse(data)} /> ; 
};

PolarChart.propTypes = {
    data: PropTypes.string.isRequired,
}

export default PolarChart;