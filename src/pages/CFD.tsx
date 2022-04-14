import Nav from '../components/NavBar';
import DropDown from '../components/DropDown';
import { 
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement, 
    Filler
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(Title, Tooltip, Legend, PointElement, LineElement, Filler);

const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Work in Progress",
      },
    },
    elements: {
        line: {
            tension: 0.4
        }
    }
  };

const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    datasets: [
        {
            label: "To Do",
            data: [33, 53, 85, 41, 44, 65, 33, 54, 23, 87],
            backgroundColor: "rgba(51, 181, 229, 0.4)",
            borderColor: "rgba(51, 181, 229, 0.9)",
            fill: true,
        },
        {
            label: "In Progress",
            data: [65, 33, 54, 23, 87, 33, 53, 85, 41, 44],
            fill: true,
            backgroundColor: "rgba(255, 187, 51, 0.4)",
            borderColor: "rgba(255, 187, 51, 0.9)"
        },
        {
            label: "Done",
            data: [23, 87, 33, 53, 85, 41, 44, 65, 33, 54],
            fill: true,
            backgroundColor: "rgba(0,200,81,0.4)",
            borderColor: "rgba(0,200,81,0.9)"
        }
    ]
}

function CFD() {
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
                <Line options={options} data={data}></Line>
            </div>
        </div>
    );
}

export default CFD;