// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
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
    const dataset: { seriesname: string; data: { value: any }[] }[] = [];
    const category: { label: string }[] = [];
    const inProgressData: { value: any }[] = [];
    const readyToTestData: { value: any }[] = [];
    localForage.getItem("activeTasks", (err, value: any) => {
      /* eslint-disable  @typescript-eslint/no-explicit-any */

      value.forEach((data) => {
        for (let key in data) {
          if (key === "Username") {
            category.push({ label: data[key] });
          } else if (key === "No_of_Tasks_in_progress") {
            inProgressData.push({ value: data[key] });
          } else {
            readyToTestData.push({ value: data[key] });
          }
        }
      });
      dataset.push({ seriesname: "In progress", data: inProgressData });
      dataset.push({ seriesname: "Ready to test", data: readyToTestData });
      const data = {
        chart: {
          caption: "Chart for Active Tasks",
          subcaption: "In Progress vs Ready to Test",
          plottooltext: "$label has <b>$dataValue</b> tasks in $seriesName",
          theme: "candy",
        },
        categories: [
          {
            category: category,
          },
        ],
        dataset: [
          {
            seriesname: "In progress",
            data: inProgressData,
          },
          {
            seriesname: "Ready to test",
            data: readyToTestData,
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
        {data ? (
          <StackedChart data={data} />
        ) : typeof data === "string" ? (
          <h3>No tasks for the given projects</h3>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ActiveTasks;
