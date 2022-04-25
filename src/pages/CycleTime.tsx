import BarChart from "../components/BarChart";
import DropDown from "../components/DropDown";
import localForage from "localforage";
import { useEffect, useState } from "react";
import LineChart from "../components/LineChart";

const CycleTime: React.FC = () => {
  const [data, setData] = useState("");
  const [select, setSelect] = useState("Bar");
  const types = ["Bar", "Line"];
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Per User Story",
      },
    },
  };
  useEffect(() => {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    localForage.getItem("cycleTime", (err, value: any) => {
      const labels = Object.keys(value);
      const color =
        select === "Line"
          ? ["rgba(75, 0, 130, 0.7)"]
          : ["rgba(07, 90, 128, 0.6)"];
      const data = {
        labels,
        datasets: [
          {
            label: "Cycle Time",
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
        {select === "Bar" ? (
          data ? (
            <BarChart options={JSON.stringify(options)} data={data} />
          ) : (
            <div>
              Data not available, please make a valid request before you visit
              this page.
            </div>
          )
        ) : null}
        {select === "Line" ? (
          data ? (
            <LineChart data={data} />
          ) : (
            <div>
              Data not available, please make a valid request before you visit
              this page.
            </div>
          )
        ) : null}
      </div>
    </div>
  );
};

export default CycleTime;
