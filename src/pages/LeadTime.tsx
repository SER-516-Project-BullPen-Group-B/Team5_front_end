import BarChart from "../components/BarChart";
import DropDown from "../components/DropDown";
import localForage from "localforage";
import { useEffect, useState } from "react";

const LeadTime: React.FC = () => {
  const [data, setData] = useState("");
  const [select, setSelect] = useState("Charts");
  const types = ["Bar", "Line", "Radar", "PolarArea", "Pie", "Doughnut"];

  console.log(select);
  useEffect(() => {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    localForage.getItem("leadTime", (err, value: any) => {
      const labels = Object.keys(value);
      const data = {
        labels,
        datasets: [
          {
            label: "Data",
            data: Object.values(value),
            backgroundColor: "rgba(97, 150, 68, 0.8)",
          },
        ],
      };
      setData(JSON.stringify(data));
    });
  }, []);

  return (
    <div>
      <div className="flex justify-end ...">
        <div className="m-6">
          {" "}
          <DropDown values={types} select={setSelect} title={select} />
        </div>
      </div>
      <div className="m-4">
        {data ? <BarChart data={data} /> : <div>Data not available ...</div>}
      </div>
    </div>
  );
};

export default LeadTime;
