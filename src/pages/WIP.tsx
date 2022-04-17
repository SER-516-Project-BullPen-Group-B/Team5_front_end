import Nav from "../components/NavBar";
import { 
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement 
} from "chart.js";
import { Line } from "react-chartjs-2";
import '../styles/WIP.css'
ChartJS.register(Title, Tooltip, Legend, PointElement, LineElement);

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
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };


function WIP() {
    return (
        <div>
            <Nav />
            <div className="flex justify-end ...">
                <div className="m-6">
                {" "}
                
                </div>
            </div>
            <div className="m-4">
                <Line options={options} data={data} />
            </div>
        </div>
    );
}

export default WIP;