import localforage from "localforage";
import WIPComp from "../components/WIPChart";
import DropDown from "../components/DropDown";
import { useState, useEffect } from "react";

const data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
    datasets: [
        {
            label: 'Number of Tasks in Progress per day',
            data: [10,3,7,4,8,0],
            borderColor: "rgba(238, 210, 2, 0.7)",
            backgroundColor: "rgba(238, 210, 2, 1)",
            pointStyle: 'triangle',
            pointRadius: 10,
            pointHoverRadius: 15
        }
    ]
};

const WIP: React.FC = () => {

  const [data, setData] = useState("");
  const [select, setSelect] = useState("Line");
  const types = ["Line"];

  useEffect(() => {
    
  }, []);

  return (
    <div>
            <div className="flex justify-end ...">
                <div className="m-6">
                    {" "}
                    <DropDown values={types} select={setSelect} title={select}></DropDown>
                </div>
            </div>
            <div className="m-4">
                {
                    data ? (
                        <WIPComp data={data} />
                    ) : (
                        <div>
                            Data not available ...
                        </div>
                    )
                }
            </div>
        </div>
  );
}

export default WIP;