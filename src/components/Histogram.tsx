import React from "react";
import { Chart } from "react-google-charts";
import PropTypes from "prop-types";

export const options = {
  title: "Visualization for Scope Change",
  legend: { position: "top", maxLines: 2 },
  colors: ["#5C3292", "#1A8763"],
  interpolateNulls: false,
  vAxis: {
    title: "User Story (count)",
  },
  hAxis: {
    title: "Added Before or After Planning",
    viewWindow: {
      min: 0.14,
      max: 0.36,
    },
    gridlines: {
      color: "#fff",
    },
    textPosition: "none",
  },
};

interface HistogramProps {
  data: string;
}

const Histogram: React.FC<HistogramProps> = ({ data }) => {
  console.log(data);
  return (
    <Chart
      chartType="Histogram"
      width="100%"
      height="400px"
      data={JSON.parse(data)}
      options={options}
    />
  );
};

Histogram.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Histogram;
