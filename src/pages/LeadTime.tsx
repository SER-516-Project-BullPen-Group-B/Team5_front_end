import Nav from "../components/NavBar";
import BarChart from "../components/BarChart";
import DropDown from "../components/DropDown";

function LeadTime() {
const labels = ["US_1", "US_2", "US_3", "US_4", "US_5", "US_6", "US_7"];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [56, 34, 23, 18, 89, 38, 56],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};
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
        <BarChart data={data}/>
      </div>
    </div>
  );
}

export default LeadTime;
