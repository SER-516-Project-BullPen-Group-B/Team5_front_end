import StackedChart from "../components/StackedBar";
import DropDown from "../components/DropDown";
import { useState } from "react";

const ActiveTasks = () => {
  const [select, setSelect] = useState("Bar");
  const types = ["Bar", "Line", "Radar", "PolarArea", "Pie", "Doughnut"];

  return (
    <div>
      <div className="flex justify-end ...">
        <div className="m-6">
          {" "}
          <DropDown values={types} select={setSelect} title={select} />
        </div>
      </div>
      <div className="m-4">
        <StackedChart />
      </div>
    </div>
  );
};

export default ActiveTasks;
