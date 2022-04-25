// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import StackedChart from "../components/StackedBar";
import BarChart from "../components/BarChart";
import DropDown from "../components/DropDown";
import localForage from "localforage";
import { useEffect, useState } from "react";
import randomColor from "randomcolor";
import { number } from "prop-types";

const colorPicker = (count: number, alpha: number) => {
  return randomColor({
    count: count,
    format: "rgba",
    luminosity: "dark",
    alpha: alpha,
  });
};

const ActiveTasks: React.FC = () => {
  const [data, setData] = useState("");
  const [chartBarData, setChartBarData] = useState("");
  const [select, setSelect] = useState("3D");
  const types = ["2D", "3D"];

  useEffect(() => {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    const dataset: { seriesname: string; data: { value: any }[] }[] = [];
    const category: { label: string }[] = [];
    const labels: string[] = [];
    const inProgressData: { value: any }[] = [];
    const chartInProgressData: string[] = [];
    const readyToTestData: { value: any }[] = [];
    const chartReadyToTestData: string[] = [];
    localForage.getItem("activeTasks", (err, value: any) => {
      /* eslint-disable  @typescript-eslint/no-explicit-any */
      if (typeof value != "string") {
        value.forEach((data) => {
          for (let key in data) {
            if (key === "Username") {
              category.push({ label: data[key] });
              labels.push(data[key]);
            } else if (key === "No_of_Tasks_in_progress") {
              inProgressData.push({ value: data[key] });
              chartInProgressData.push(data[key]);
            } else {
              readyToTestData.push({ value: data[key] });
              chartReadyToTestData.push(data[key]);
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
        const chartData = {
          labels,
          datasets: [
            {
              label: "In progress",
              data: chartInProgressData,
              backgroundColor: colorPicker(1, 0.3),
              borderWidth: 1,
            },
            {
              label: "Ready to test",
              data: chartReadyToTestData,
              backgroundColor: colorPicker(1, 0.7),
              borderWidth: 1,
            },
          ],
        };
        setData(JSON.stringify(data));
        setChartBarData(JSON.stringify(chartData));
      }
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
        {chartBarData && select === "2D" ? (
          <BarChart data={chartBarData} />
        ) : data && select === "3D" ? (
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
