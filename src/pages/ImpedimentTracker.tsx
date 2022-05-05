import DropDown from "../components/DropDown";
import { useState, useEffect } from "react";
import localforage from "localforage";
import Impediment from "../components/Impediment";
import "../styles/Metric.css";

const ImpedimentTracker: React.FC = () => {
  const [data, setData] = useState("");
  const [select, setSelect] = useState("Timeline");
  const types = ["Timeline"];

  useEffect(() => {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    localforage.getItem("impediment", (err, value: any) => {
      if (value !== null) {
        console.log(value);
        let timelinedata: (string | Date)[][] = [];
        for (let i = 0; i < value.length; i++) {
          const createdDate = value[i]["created_date"].split("T")[0].split("-");
          const endDate =
            value[i]["is_closed"] === true || value["is_blocked"] === true
              ? value[i]["finished_date"].split("T")[0].split("-")
              : value[i]["modified_date"].split("T")[0].split("-");
          const item = [
            value[i]["subject"],
            new Date(
              parseInt(createdDate[0]),
              parseInt(createdDate[1]),
              parseInt(createdDate[2])
            ),
            new Date(
              parseInt(endDate[0]),
              parseInt(endDate[1]),
              parseInt(endDate[2])
            ),
          ];
          timelinedata = [...timelinedata, item];
        }
        console.log(timelinedata);
        setData(JSON.stringify(timelinedata));
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
        {data ? (
          <div>
            <h3 className="metric-title">Impediment Tracker</h3>
            <Impediment rows={data} />
          </div>
        ) : (
          <div>
            Data not available, please make a valid request before you visit
            this page.
          </div>
        )}
      </div>
    </div>
  );
};

export default ImpedimentTracker;
