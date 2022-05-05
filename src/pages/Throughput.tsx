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
  const [bulletData, setBulletData] = useState("");
  const [radialData, setRadialData] = useState("");
  const [select, setSelect] = useState("Bullet");
  const types = ["Bullet","RadialBar"];
  const [length, setLength] = useState(0);
  useEffect(() => {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    localforage.getItem("throughput", (err, value: any) => {
      let bulletData:BulletDataInterface[]= []
      let radialData:RadialDataInterface[] = []
      for(let i=0;i<Object.keys(value).length;i++){
        const maxValue = Math.max(...Object.values(value).map((i) => Number(i)))*1.2;
        if(select === "Bullet"){
          const item = {
            "id": Object.keys(value)[i],
            "ranges": [0,maxValue*0.4,maxValue*0.7,maxValue],
            "measures": [Object.values(value)[i] as number],
            "markers":[Object.values(value)[i] as number]
          }
          bulletData = [...bulletData, item]
        }
        else if(select === "RadialBar"){
          const item = {
            "id": `${i}`,
            "data": [{
              "x": Object.keys(value)[i],
              "y": Object.values(value)[i] as number
            }],
          }
          radialData = [...radialData, item]
          setLength(Math.max(...Object.values(value).map((i) => Number(i)))*1.2)
        }
      }
      if (select === "Bullet") {
        setBulletData(JSON.stringify(bulletData));
      } else if (select === "RadialBar") {
        setRadialData(JSON.stringify(radialData));
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
          radialData ? (
            <RadialBarChart data={radialData} length={length}/>
          ) : (
            <div>
              Data not available, please make a valid request before you visit
              this page.
            </div>
          )
        ) : null}
        {select === "Bullet" ? (
          bulletData ? (
            <BulletChart data={bulletData}/>
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
