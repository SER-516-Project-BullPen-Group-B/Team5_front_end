import localforage from "localforage";
import WIPComp from "../components/WIPChart";
import WIPBarChart from "../components/WIPBarChart";
import DropDown from "../components/DropDown";
import { useState, useEffect } from "react";

const WIP: React.FC = () => {
  const [data, setData] = useState("");
  const [select, setSelect] = useState("Line");
  const types = ["Line", "Bar"];

  useEffect(() => {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    localforage.getItem("wip", (err, value: any) => {
      if (value !== null) {
        const labels = Object.keys(value);
        const inProgress: number[] = [];
        Object.values(value).forEach((val: any) => {
          inProgress.push(val["In Progress"]);
        });
        const data = {
          labels: labels,
          datasets: [
            {
              label: "Work in Progress",
              data: inProgress,
              fill: true,
              backgroundColor: "rgba(255, 187, 51, 0.4)",
              borderColor: "rgba(255, 187, 51, 0.9)",
            },
          ],
        };
        setData(JSON.stringify(data));
      }
    });
  }, []);

  return (
    <div>
      <div className="flex justify-end ...">
        <div className="m-6">
          {" "}
          <DropDown values={types} select={setSelect} title={select}></DropDown>
        </div>
      </div>
      <div className="m-4">
        {select === "Line" ? (
          data ? (
            <WIPComp data={data} />
          ) : (
            <div>
              Data not available, please make a valid request before you visit
              this page.
            </div>
          )
        ) : null}
        {select === "Bar" ? (
          data ? (
            <WIPBarChart data={data} />
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

export default WIP;
