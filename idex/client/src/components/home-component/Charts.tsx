import type { BienesData } from "../../interfaces/Commodities";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Charts = (props: BienesData) => {
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top' as const,
        },
        title: {
          display: true,
        },
      },
      maintainAspectRatio: false 
    };

    const data = {
            labels: props.meses,
            datasets: [
                {
                    label: props.name,
                    data: props.precio,
                    borderColor: 'blue',
                },
            ],
        }

    return (
        <div className="h-50 md:h-75 lg:h-100">
            <Line options={options} data={data} />
        </div>
    );
}

export default Charts