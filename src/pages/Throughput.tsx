import DropDown from "../components/DropDown";
import { useEffect, useState } from "react";
import RadialBarChart from "../components/RadialBarChart";
import BulletChart from "../components/BulletChart";
import localforage from "localforage";
import '../styles/Metrics.css';

interface BulletDataInterface {
  id: string,
  ranges: number[],
  measures: number[],
  markers: number[]
}

interface RadialDataInterface {
  id: string,
  data: {
    x: string,
    y: number
  }[]
}

const Throughput: React.FC = () => {
  const [data, setData] = useState("");
  const [select, setSelect] = useState("Bullet");
  const types = ["Bullet","RadialBar"];
  
  useEffect(() => {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    localforage.getItem("throughput", (err, value: any) => {
      let bulletData:BulletDataInterface[]= []
      let radialData:RadialDataInterface[] = []
      for(let i=0;i<Object.keys(value).length;i++){
        if(select === "Bullet"){
          let item = {
            "id": Object.keys(value)[i],
            "ranges": [0,40,70,100],
            "measures": [Object.values(value)[i] as number],
            "markers":[Object.values(value)[i] as number]
          }
          bulletData = [...bulletData, item]
        }
        else if(select === "RadialBar"){
          let item = {
            "id": `${i}`,
            "data": [{
              "x": Object.keys(value)[i],
              "y": Object.values(value)[i] as number
            }],
          }
          radialData = [...radialData, item]
        }
      }
      if (select === "Bullet") {
        setData(JSON.stringify(bulletData));
      } else {
        setData(JSON.stringify(radialData));
      }
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
        
        {select === "RadialBar" ? (
          data ? (
            <RadialBarChart data={data}/>
          ) : (
            <div>
              Data not available, please make a valid request before you visit
              this page.
            </div>
          )
        ) : null}
        {select === "Bullet" ? (
          data ? (
            <BulletChart data={data}/>
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
