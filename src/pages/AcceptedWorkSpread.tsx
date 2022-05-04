import localForage from "localforage";
import { useEffect, useState } from "react";
import PieChart from "../components/PieChart";
import randomColor from "randomcolor";
const LeadTime: React.FC = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    localForage.getItem("acceptedWorkSpread", (err, value: any) => {
      if (value !== null) {
        console.log(value);
        const labels = ["Divide and Conquer", "Collaborated", "Mixed"];
        const color = randomColor({
          count: Object.values(value).length,
          format: "rgba",
          luminosity: "dark",
          alpha: 0.6,
        });
        /* eslint-disable  @typescript-eslint/no-explicit-any */
        const stratergy: number[] = [];
        let [mixed, dnd, ndnd] = [0, 0, 0];
        value.forEach((element: any) => {
          if (element.process_followed === "both") mixed += 1;
          else if (element.process_followed === "not_divide_and_conquer")
            ndnd += 1;
          else dnd += 1;
        });
        stratergy.push(mixed, dnd, ndnd);
        const data = {
          labels,
          datasets: [
            {
              label: "Accepted Work Spread",
              data: stratergy,
              backgroundColor: color,
              borderWidth: 1,
            },
          ],
        };
        setData(JSON.stringify(data));
      }
    });
  }, []);
  return (
    <div>
      <div className="flex justify-end ..."></div>
      <div className="m-4">
        {data ? (
          <PieChart data={data} />
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

export default LeadTime;
