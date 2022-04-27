import DropDown from "../components/DropDown";
import { useState } from "react";
import MyResponsiveRadialBar from "../components/RadialBarChart";

const Throughput: React.FC = () => {
  const [select, setSelect] = useState("Radial Bar");
  const types = ["Radial Bar"];

  const data = 
    [
        {
          "id": "1",
          "data": [
            {
              "x": "Sprint 1",
              "y": 100
            }
          ]
        },
        {
          "id": "2",
          "data": [
            {
              "x": "Sprint 2",
              "y": 78
            },
          ]
        },
        {
          "id": "3",
          "data": [
            {
              "x": "Sprint 3",
              "y": 56
            }
          ]
        }
      ]

  return (
    <div>
      <div className="flex justify-end ...">
        <div className="m-6">
          {" "}
          <DropDown values={types} select={setSelect} title={select} />
        </div>
      </div>
      <div className="m-4">
        
        {select === "Radial Bar" ? (
          data ? (
            <MyResponsiveRadialBar data={data} />
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
