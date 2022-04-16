import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Chart for Active Tasks",
    subcaption: "In Progress vs Ready to Test",
    plottooltext: "$label has <b>$dataValue</b> tasks in $seriesName",
    theme: "candy",
  },
  categories: [
    {
      category: [
        {
          label: "User 1",
        },
        {
          label: "User 2",
        },
        {
          label: "User 3",
        },
        {
          label: "User 4",
        },
        {
          label: "User 5",
        },
      ],
    },
  ],
  dataset: [
    {
      seriesname: "In progress",
      data: [
        {
          value: "2",
        },
        {
          value: "1",
        },
        {
          value: "1",
        },
        {
          value: "2",
        },
        {
          value: "3",
        },
      ],
    },
    {
      seriesname: "Ready to test",
      data: [
        {
          value: "4",
        },
        {
          value: "2",
        },
        {
          value: "5",
        },
        {
          value: "1",
        },
        {
          value: "2",
        },
      ],
    },
  ],
};

const StackedChart = () => {
  return (
    <ReactFusioncharts
      type="msbar3d"
      width="100%"
      height="400%"
      dataFormat="JSON"
      dataSource={dataSource}
    />
  );
};

export default StackedChart;
