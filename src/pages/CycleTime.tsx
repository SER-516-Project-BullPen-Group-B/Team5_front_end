import Nav from "../components/NavBar";
import BarChart from "./BarChart";
import DropDown from "../components/DropDown";

function CycleTime() {
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
        <BarChart />
      </div>
    </div>
  );
}

export default CycleTime;
