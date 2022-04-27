import { Chart } from "react-google-charts";
import PropTypes from "prop-types";

const columns = [
    { type: "string", id: "Subject" },
    { type: "date", id: "Start" },
    { type: "date", id: "End" },
];

const rows = [
    ["Washington", new Date(1789, 3, 30), new Date(1790, 2, 4)],
    ["Adams", new Date(1789, 6, 4), new Date(1807, 2, 14)],
    ["Jefferson", new Date(1789, 8, 4), new Date(1797, 1, 23)],
];

export const data = [columns, ...rows];

interface ImpedimentProps {
    data: string;
}

const Impediment: React.FC = () => {
    return <Chart chartType="Timeline" data={data} width="100%" height="400px" />;
};

Impediment.propTypes = {
    data: PropTypes.string.isRequired
}

export default Impediment;