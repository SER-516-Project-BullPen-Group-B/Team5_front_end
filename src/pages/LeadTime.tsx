import BarChart from "../components/BarChart";
import DropDown from "../components/DropDown";
import localForage from "localforage";
import { useEffect, useState } from "react";
import PolarChart from "../components/PolarChart";
import DoughnutChart from "../components/DoughnutChart";
import randomColor from "randomcolor";
import LineChart from "../components/LineChart";
import FunnelChart from "../components/FunnelChart";
const LeadTime: React.FC = () => {
  const [data, setData] = useState("");
  const [select, setSelect] = useState("Bar");
  const types = ["Bar", "Line", "PolarArea", "Doughnut", "Funnel"];
  const [funnelData, setFunnelData] = useState<{ id: string, value: number, label:string }[]>();

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
    scales: {
      x: {
        title: {
          display: true,
          text: "User Stories",
        },
      },
      y: {
        title: {
          beginAtZero: true,
          display: true,
          text: "Days",
        },
      },
    },
  };
  useEffect(() => {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    localForage.getItem("leadTime", (err, value: any) => {
      if (value !== null) {
        console.log(value);
        const labels = Object.keys(value);
        const color = randomColor({
          count: select === "Bar" ? 1 : Object.values(value).length,
          format: "rgba",
          luminosity: "dark",
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
        let FunnelData: {id:string, value: number, label: string }[] = [];
        if(select === "Funnel"){
          for(let i = 0;i<Object.values(value).length;i++){
            /* eslint-disable  @typescript-eslint/no-explicit-any */
            const item:{id:string,value: any,label:string} = {
              "id": `step_${i}`,
              "value" : Object.values(value)[i],
              "label" : Object.keys(value)[i],
            }
            FunnelData = [...FunnelData,item]
          }
          FunnelData.sort(function (a, b) {
            return a.value - b.value;
          });
          FunnelData = FunnelData.reverse();
          }
        select === "Funnel"
            ? setFunnelData(FunnelData):setData(JSON.stringify(data));      }
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
        {select === "Funnel" ? (
          funnelData ? (
              <FunnelChart 
              data={funnelData} length={funnelData.length}/>
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
