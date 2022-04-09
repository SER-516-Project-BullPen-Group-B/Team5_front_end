import Nav from "../components/NavBar";
import BarChart from "./BarChart";
import DropDown from "../components/DropDown";
import localForage from "localforage";
import { useEffect, useState } from "react";

const CycleTime: React.FC = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    localForage.getItem("leadTime", (err, value: any) => {
      let labels = Object.keys(value);
      let data = {
        labels,
        datasets: [
          {
            label: "Dataset 1",
            data: Object.values(value),
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
        ],
      };
      setData(JSON.stringify(data));
    });
  }, []);

  return (
    <div>
      <Nav />
      <div className="flex justify-end ...">
        <div className="m-6">
          {" "}
          <DropDown />
        </div>
      </div>
      <div className="m-4">
        {data ? <BarChart data={data} /> : <div>Data not available ...</div>}
      </div>
    </div>
  );
};

export default CycleTime;
