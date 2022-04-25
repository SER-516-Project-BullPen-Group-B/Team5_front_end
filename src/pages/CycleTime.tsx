import BarChart from "../components/BarChart";
import DropDown from "../components/DropDown";
import localForage from "localforage";
import { useEffect, useState } from "react";
import LineChart from "../components/LineChart";
import { FunnelChart } from 'react-funnel-pipeline'
import 'react-funnel-pipeline/dist/index.css'

const CycleTime: React.FC = () => {
  const [data, setData] = useState("");
  const [select, setSelect] = useState("Bar");
  const types = ["Bar", "Line", "Funnel"];
  const [funnelData, setFunnelData] = useState([] as any);
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
      x:{
        title:{
          display:true,
          text: "User Stories"
        }
      },
      y:{
        title:{
          beginAtZero:true,
          display:true,
          text: "Days"
        }
      },
    }
  };
  useEffect(() => {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    localForage.getItem("cycleTime", (err, value: any) => {
      const labels = Object.keys(value);
      const data = {
        labels,
        datasets: [
          {
            label: "Cycle Time",
            data: Object.values(value),
            backgroundColor: ["rgba(75, 0, 130, 0.7)"],
            borderWidth: 3,
          },
        ],
      };
      let FunnelData: any[] = [];
      if(select === "Funnel"){
        for(let i = 0;i<Object.values(value).length;i++){
          let item:any = {};
          item = {
            "name" : Object.keys(value)[i],
            "value" : Object.values(value)[i],
          }
          FunnelData = [item, ...FunnelData]
        };
      };
      FunnelData.sort(function(a, b) { 
        return a.value - b.value;
      });
      FunnelData = FunnelData.reverse();
      select==="Funnel"?setFunnelData(FunnelData):setData(JSON.stringify(data));
    });
  }, [select]);
  return (
    <div>
      <div className="flex justify-end ...">
        <div className="m-6 pb-10">
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
            <div className="pt-10 mt-10">
              <FunnelChart 
              data={funnelData} />
            </div>
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

export default CycleTime;
