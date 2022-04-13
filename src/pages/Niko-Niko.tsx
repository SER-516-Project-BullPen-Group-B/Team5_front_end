import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Table from "../components/Table";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Niko() {
  return (
    <div>
      <div className="m-6">
        {" "}
        <Table />
      </div>
      <div className="m-4"></div>
    </div>
  );
}
