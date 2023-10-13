import {Bar} from "react-chartjs-2";
import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function BarChart({data}) {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    font: {
                        size: 20,
                    },
                    maxRotation: 0,
                    maxTicksLimit: 16,
                    color: '#000000'
                },
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    font: {
                        size: 20,
                    },
                    min: 0,
                    max: 10000,
                    color: '#000000'
                }
            }
        },
        barPercentage: 0.5,
        hoverBackgroundColor: 'rgb(62,65,140)',
    };

    const labels = Object.keys(data);

    const dataBar = {
        labels,
        datasets: [
            {
                label: 'bar chart',
                data: Object.values(data),
                backgroundColor: 'rgb(0,10,255)',
                borderRadius: 4,
                barThickness: 16,
            },
        ],
    };

    return (
        <Bar data={dataBar} options={options} width="915px" height="320px" />
    );
}