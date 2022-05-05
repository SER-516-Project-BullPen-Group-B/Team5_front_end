import { ResponsiveRadialBar } from '@nivo/radial-bar';
import PropTypes from "prop-types";

interface RadialBarChartProps {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    data: any;
    length: number;
}

const RadialBarChart:React.FC<RadialBarChartProps> = ({ data,length }) => {
    data = JSON.parse(data);
    console.log(data);
    return (
        <div style={{height: 140 * data.length}}>
            <ResponsiveRadialBar
                data={data}
                valueFormat=">-.2f"
                padding={0.4}
                maxValue = {length}
                colors = {{ scheme:'set1' }}
                cornerRadius={2}
                endAngle ={360}
                margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
                radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
                circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
            />
        </div>
    )
}

RadialBarChart.propTypes = {
    data: PropTypes.any.isRequired,
    length: PropTypes.any.isRequired,
}

export default RadialBarChart;