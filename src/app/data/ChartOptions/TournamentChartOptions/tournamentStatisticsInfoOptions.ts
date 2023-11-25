import { ChartLineOptions } from "../../../ts/types/ChartTypes/ChartDataType";

export const tournamentStatisticsInfoOptions: ChartLineOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
        tooltip: {
            titleColor: "#FF8901",
            displayColors: false,
            caretPadding: 5,
            titleFont: { size: 12 }
        }
    },
    elements: {
        line: {
            backgroundColor: "#f1f5f9",
            borderColor: "#FF8901",
            tension: 0.4
        },
        point: {
            borderWidth: 2,
            radius: 3.5,
            backgroundColor: "#f1f5f9",
            borderColor: "#FF8901"
        }
    },
    scales: {
        x: {
            grid: {
                display: false,
                borderWidth: 0
            },
            ticks: {
                display: false
            }
        },
        y: {
            grid: {
                display: false,
                borderWidth: 0
            },
            ticks: {
                display: false
            }
        }
    }
};
