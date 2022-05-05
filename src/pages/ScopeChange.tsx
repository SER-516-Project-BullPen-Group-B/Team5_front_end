import localForage from "localforage";
import { useState, useEffect } from "react";
import Histogram from "../components/Histogram";
import Gauge from "../components/Gauge";

const ScopeChange = () => {
  const [data, setData] = useState("");
  const [gaugeData, setGaugeData] = useState("");
  useEffect(() => {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    localForage.getItem("scopeChange", (err, value: any) => {
      if (value !== null) {
        const data: (string | number)[][] = [];
        data.push(["Label", "Before", "After"]);
        let oldUserStories: number = 0;
        let newUserStories: number = 0;
        value.forEach((element: any) => {
          if (element.added_before_or_after_planning === "Before") {
            data.push([element.description, 0.2, null]);
            oldUserStories += 1;
          } else {
            data.push([element.description, null, 0.3]);
            newUserStories += 1;
          }
          setGaugeData(
            JSON.stringify(
              (newUserStories / (newUserStories + oldUserStories)) * 100
            )
          );
          setData(JSON.stringify(data));
        });
      }
    });
  }, []);
  return (
    <div>
      {data ? (
        <>
          <h3 className="my-5 grid place-items-center">
            Gauge meter to show the Scope Change in percentage %
          </h3>

          <div id="gauge" className="mt-10">
            <Gauge value={gaugeData} />
          </div>
          <Histogram data={data} />
        </>
      ) : (
        <div>
          Data not available, please make a valid request before you visit this
          page.
        </div>
      )}
    </div>
  );
};

export default ScopeChange;
