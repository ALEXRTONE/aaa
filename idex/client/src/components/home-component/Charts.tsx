import type { BienesData } from "../interfaces/Commodities";
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
        <>
            <Line options={options} data={data} />
        </>
    );
}

export default Charts