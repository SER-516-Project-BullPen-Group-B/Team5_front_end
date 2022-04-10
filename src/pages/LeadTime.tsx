import BarChart from "./BarChart";
import DropDown from "../components/DropDown";
import localForage from "localforage";
import { useEffect, useState } from "react";

const LeadTime: React.FC = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    localForage.getItem("leadTime", (err, value: any) => {
      const labels = Object.keys(value);
      const data = {
        labels,
        datasets: [
          {
            label: "Dataset 1",
            data: Object.values(value),
            backgroundColor: "rgba(255, 99, 132, 0.5)",
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
          <DropDown />
        </div>
      </div>
      <div className="m-4">
        {data ? <BarChart data={data} /> : <div>Data not available ...</div>}
      </div>
    </div>
  );
};

export default LeadTime;
