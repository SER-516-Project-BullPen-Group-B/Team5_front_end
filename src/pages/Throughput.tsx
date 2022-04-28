import DropDown from "../components/DropDown";
import { useState } from "react";
import RadialBarChart from "../components/RadialBarChart";
import BulletChart from "../components/BulletChart";

const Throughput: React.FC = () => {
  const [select, setSelect] = useState("Bullet");
  const types = ["Bullet","RadialBar"];
  const data= {
    "Sprint 1": 9,
    "Sprint 2": 22,
    "Sprint 3": 57,
    "Sprint 4": 89,
    "Sprint 5": 100
  } 
  let bulletData:{id:string,ranges:number[],measures:number[],markers:number[]}[]= []
  let radialData:{id:string,data:{x:string,y:number}[]}[] = []
  for(let i=0;i<Object.keys(data).length;i++){
    if(select === "Bullet"){
      let item = {
        "id": Object.keys(data)[i],
        "ranges": [0,40,70,100],
        "measures": [Object.values(data)[i]],
        "markers":[Object.values(data)[i]]
      }
      bulletData = [...bulletData, item]
    }
    else if(select === "RadialBar"){
      let item = {
        "id": `${i}`,
        "data": [{
          "x": Object.keys(data)[i],
          "y": Object.values(data)[i]
        }],
      }
      radialData = [...radialData, item]
    }
  }
  
  return (
    <div>
      <div className="flex justify-end ...">
        <div className="m-6">
          {" "}
          <DropDown values={types} select={setSelect} title={select} />
        </div>
      </div>
      <div className="m-4">
        {select === "RadialBar" ? (
          radialData ? (
            <RadialBarChart data={radialData} length={radialData.length}/>
          ) : (
            <div>
              Data not available, please make a valid request before you visit
              this page.
            </div>
          )
        ) : null}
        {select === "Bullet" ? (
          bulletData ? (
            <BulletChart data={bulletData} length={bulletData.length}/>
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

export default Throughput;
