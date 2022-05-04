import localForage from "localforage";
import { useState, useEffect } from "react";
import Histogram from "../components/Histogram";

const ScopeChange = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    localForage.getItem("scopeChange", (err, value: any) => {
      if (value !== null) {
        const data: (string | number)[][] = [];
        data.push(["Before", "After"]);
        value.forEach((element: any) => {
          if (element.added_before_or_after_planning === "Before") {
            // data.push([element.description, 0]);
          } else {
            data.push([element.description, 1]);
          }
          setData(JSON.stringify(data));
        });
      }
    });
  }, []);
  return (
    <div>
      {data ? (
        <Histogram data={data} />
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
