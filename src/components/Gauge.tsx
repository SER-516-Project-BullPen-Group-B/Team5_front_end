import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import PropTypes from "prop-types";

function getRandomNumber() {
  return Math.random() * 100;
}

export function getData() {
  return [
    ["Label", "Value"],
    ["Scope Change", getRandomNumber()],
  ];
}

export const options = {
  width: 400,
  height: 120,
  redFrom: 90,
  redTo: 100,
  yellowFrom: 75,
  yellowTo: 90,
  lightgreenFrom: 30,
  lightgreenTo: 55,
  minorTicks: 5,
  animation: {
    duration: 1000,
    easing: "out",
  },
};

interface GaugeProps {
  value: string;
}
const Gauge: React.FC<GaugeProps> = ({ value }) => {
  const [metric, setMetric]: any[] = useState([
    ["Label", "Value"],
    ["Scope Change", 0],
  ]);

  useEffect(() => {
    const gaugeValue = [
      ["Label", "Value"],
      ["Scope Change", JSON.parse(value)],
    ];
    const id = setInterval(() => {
      setMetric(gaugeValue);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  });

  return (
    <Chart chartType="Gauge" width="100%" data={metric} options={options} />
  );
};

Gauge.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Gauge;
