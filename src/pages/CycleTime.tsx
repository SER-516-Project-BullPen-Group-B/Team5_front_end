import BarChart from "../components/BarChart";
import DropDown from "../components/DropDown";
import localForage from "localforage";
import { useEffect, useState } from "react";
import LineChart from "../components/LineChart";
import FunnelChart from "../components/FunnelChart";

const CycleTime: React.FC = () => {
  const [data, setData] = useState("");
  const [select, setSelect] = useState("Bar");
  const types = ["Bar", "Line", "Funnel"];
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
    localForage.getItem("cycleTime", (err, value: any) => {
      if(value!=null){
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
          ? setFunnelData(FunnelData):setData(JSON.stringify(data));
    }
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

export default CycleTime;
