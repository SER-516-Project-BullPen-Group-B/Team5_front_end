import BarChart from "../components/BarChart";
import DropDown from "../components/DropDown";
import localForage from "localforage";
import { useEffect, useState } from "react";
import PolarChart from "../components/PolarChart";

const LeadTime: React.FC = () => {
  const [data, setData] = useState("");
  const [select, setSelect] = useState("Bar");
  const types = ["Bar", "Line", "Radar", "PolarArea", "Pie", "Doughnut"];
  
  console.log(select);
  useEffect(() => {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    localForage.getItem("leadTime", (err, value: any) => {
      const labels = Object.keys(value);
      const color = (select==="PolarArea")?[
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ]:["rgba(07, 90, 128, 0.6)"];    
      const data = {
        labels,
        datasets: [
          {
            label: "Lead Time",
            data: Object.values(value),
            backgroundColor: color,
            borderWidth: 1,
          },
        ],
      };
      setData(JSON.stringify(data));
    });
  }, [select]);

  return (
    <div>
      <div className="flex justify-end ...">
        <div className="m-6">
          {" "}
          <DropDown values={types} select={setSelect} title={select} />
        </div>
      </div>
      <div className="m-4">
        {select === "Bar" ? data ? <BarChart data={data} /> : <div>Data not available ...</div>:null}
        {select === "PolarArea" ? data ? <PolarChart data={data} /> : <div>Data not available ...</div>:null}
      </div>
    </div>
  );
};

export default LeadTime;