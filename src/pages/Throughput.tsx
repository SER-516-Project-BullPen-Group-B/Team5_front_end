import DropDown from "../components/DropDown";
import { useState } from "react";
import RadialBarChart from "../components/RadialBarChart";
import BulletChart from "../components/BulletChart";

const Throughput: React.FC = () => {
  const [select, setSelect] = useState("Bullet");
  const types = ["Bullet","RadialBar"];

  const bulletData = 
  [
    {
      "id": "Sprint 1",
      "ranges": [
        0,
        40,
        70,
        100
      ],
      "measures": [
        9
      ],
      "markers": [
        9
      ]
    },
    {
      "id": "Sprint 2",
      "ranges": [
        0,
        40,
        70,
        100
      ],
      "measures": [
        22
      ],
      "markers": [
        22
      ]
    },
    {
      "id": "Sprint 3",
      "ranges": [
        0,
        40,
        70,
        100
      ],
      "measures": [
        57
      ],
      "markers": [
        57
      ]
    },
    {
      "id": "Sprint 4",
      "ranges": [
        0,
        40,
        70,
        100
      ],
      "measures": [
        89
      ],
      "markers": [
        89
      ]
    },
    {
      "id": "Sprint 5",
      "ranges": [
        0,
        40,
        70,
        100
      ],
      "measures": [
        100
      ],
      "markers": [
        100
      ]
    }
  ]

  const radialData = 
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
        <div className="m-6 mb-10">
          {" "}
          <DropDown values={types} select={setSelect} title={select} />
        </div>
      </div>
      <div className="m-4">
        {select === "RadialBar" ? (
          radialData ? (
            <RadialBarChart data={radialData} />
          ) : (
            <div>
              Data not available, please make a valid request before you visit
              this page.
            </div>
          )
        ) : null}
        {select === "Bullet" ? (
          bulletData ? (
            <BulletChart data={bulletData} />
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
