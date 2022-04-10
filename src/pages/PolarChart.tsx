import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} 
from 'chart.js';
import { useEffect, useState } from 'react';
import { PolarArea } from 'react-chartjs-2';
import localForage from "localforage";


ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export default function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    localForage.getItem("leadTime", (err, value: any) => {
      const labels = Object.keys(value);
      const data = {
        labels,
        datasets: [
          {
            label: "Lead Time",
            data: Object.values(value),
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)',
            ],
            borderWidth: 1,
          },
        ],
      };
      setData(JSON.stringify(data));
      });
    }, []);
  return (
    <div>
      <div className="m-4">
        {data ? <PolarArea data={JSON.parse(data)} /> : <div>Data not available ...</div>}
      </div>
    </div>
  );
}