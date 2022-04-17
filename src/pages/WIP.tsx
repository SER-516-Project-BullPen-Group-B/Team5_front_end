import localforage from "localforage";
import WIPComp from "../components/WIPChart";
import DropDown from "../components/DropDown";
import { useState, useEffect } from "react";

const data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
    datasets: [
        {
            label: 'Number of Tasks in Progress per day',
            data: [10,3,7,4,8,0],
            borderColor: "rgba(238, 210, 2, 0.7)",
            backgroundColor: "rgba(238, 210, 2, 1)",
            pointStyle: 'triangle',
            pointRadius: 10,
            pointHoverRadius: 15
        }
    ]
};

const WIP: React.FC = () => {

  const [data, setData] = useState("");
  const [select, setSelect] = useState("Line");
  const types = ["Line"];

  useEffect(() => {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    localforage.getItem("wip", (err, value: any) => {
      const labels = Object.keys(value);
      const inProgress: number[] = [];
      Object.values(value).forEach((val: any) => {
        inProgress.push(val['In Progress']);
      });
      const data = {
        labels: labels,
        datasets: [
          {
            label: "Work in Progress",
            data: inProgress,
            fill: true,
            backgroundColor: "rgba(255, 187, 51, 0.15)",
            borderColor: "rgba(255, 187, 51, 0.9)"
          }
        ]
      };
      setData(JSON.stringify(data));
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
                {
                    data ? (
                        <WIPComp data={data} />
                    ) : (
                        <div>
                            Data not available ...
                        </div>
                    )
                }
            </div>
        </div>
  );
}

export default WIP;