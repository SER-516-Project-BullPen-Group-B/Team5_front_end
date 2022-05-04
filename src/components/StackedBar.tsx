import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import PropTypes from "prop-types";

// Resolves charts dependancy
charts(FusionCharts);

interface StackedBarProps {
  data: string;
}

const StackedChart: React.FC<StackedBarProps> = ({ data }) => {
  return (
    <ReactFusioncharts
      type="msbar3d"
      width="100%"
      height="400%"
      dataFormat="JSON"
      dataSource={JSON.parse(data)}
    />
  );
};

StackedChart.propTypes = {
  data: PropTypes.string.isRequired,
};

export default StackedChart;
