import BarChart from "../components/BarChart";
import DropDown from "../components/DropDown";
import localForage from "localforage";
import { useEffect, useState } from "react";
import PolarChart from "../components/PolarChart";
import DoughnutChart from "../components/DoughnutChart";
import randomColor from 'randomcolor';
const LeadTime: React.FC = () => {
  const [data, setData] = useState("");
  const [select, setSelect] = useState("Doughnut");
  const types = ["Bar", "PolarArea","Doughnut"];

  useEffect(() => {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    localForage.getItem("leadTime", (err, value: any) => {
      const labels = Object.keys(value);
      const color = randomColor({
        count: select === "Bar"? 1 :Object.values(value).length,
        format: 'rgba',
        luminosity: 'dark',
        alpha: 0.6,
     });
      const data = {
        labels,
        datasets: [
          {
            label: "Lead Time",
            data: Object.values(value),
            backgroundColor: color,
            borderWidth: 1,
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
            <BarChart data={data} />
          ) : (
            <div>
              Data not available, please make a valid request before you visit
              this page.
            </div>
          )
        ) : null}
        {select === "PolarArea" ? (
          data ? (
            <PolarChart data={data} />
          ) : (
            <div>
              Data not available, please make a valid request before you visit
              this page.
            </div>
          )
        ) : null}
        {select === "Doughnut" ? (
          data ? (
            <DoughnutChart data={data} />
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

export default LeadTime;
