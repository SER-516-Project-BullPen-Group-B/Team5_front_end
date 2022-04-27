import { Chart } from "react-google-charts";
import PropTypes from "prop-types";

interface ImpedimentProps {
    rows: string;
}

const Impediment: React.FC<ImpedimentProps> = ({ rows }) => {
    const data = 
    [
        [
            { type: "string", id: "Subject" },
            { type: "date", id: "Start" },
            { type: "date", id: "End" },
        ]
    ];
    const records = JSON.parse(rows);
    for(var i=0; i < records.length; i++) {
        data.push([records[i][0], new Date(records[i][1]), new Date(records[i][2])]);
    }
    return <Chart chartType="Timeline" data={data} width="100%" height="800px"/>;
};

Impediment.propTypes = {
    rows: PropTypes.string.isRequired
}

export default Impediment;