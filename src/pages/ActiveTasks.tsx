import StackedChart from "../components/StackedBar";
import DropDown from "../components/DropDown";
import localForage from "localforage";
import { useEffect, useState } from "react";

const ActiveTasks: React.FC = () => {
  const [data, setData] = useState("");
  const [select, setSelect] = useState("Bar");
  const types = ["Bar", "Line", "Radar", "PolarArea", "Pie", "Doughnut"];

  useEffect(() => {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    localForage.getItem("activeTasks", (err, value: any) => {
      const labels = Object.keys(value);
      const color =
        select === "Line"
          ? ["rgba(75, 0, 130, 0.7)"]
          : ["rgba(07, 90, 128, 0.6)"];
      const data = {
        labels,
        datasets: [
          {
            label: "Active Tasks",
            data: Object.values(value),
            backgroundColor: color,
            borderWidth: 3,
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
        <StackedChart />
      </div>
    </div>
  );
};

export default ActiveTasks;
