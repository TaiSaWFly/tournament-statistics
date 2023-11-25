import { ChartRadarOptions } from "../../../ts/types/ChartTypes/ChartDataType";
import transformPlayerStatsRadarToltipLabel from "../../../utils/appUtils/chartUtils/playerChart/transformPlayerStatsRadarToltipLabel";

export const playerStatsDiffOfAverageOptions: ChartRadarOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
        tooltip: {
            titleColor: "#FF8901",
            boxPadding: 6,
            caretPadding: 10,
            titleFont: { size: 12 },
            usePointStyle: true,
            callbacks: {
                label: transformPlayerStatsRadarToltipLabel
            }
        }
    },
    elements: {
        line: {
            fill: true,
            tension: 0.3,
            borderJoinStyle: "round"
        },
        point: {
            borderWidth: 2,
            radius: 5.75
        }
    },
    scales: {
        r: {
            grid: {
                circular: true,
                color: "#aaaeb8"
            },
            angleLines: {
                color: "#aaaeb8"
            },
            pointLabels: {
                font: { size: 14 },
                color: "#200f2c" // $textViolet: #200f2c; // +Dark Theme $textVioletDark: #e2e8f0;
            },
            ticks: {
                display: true,
                font: { size: 12 },
                color: "#200f2c", // $textViolet: #200f2c; // +Dark Theme $textVioletDark: #e2e8f0;
                backdropColor: "transparent",
                backdropPadding: -5,
                callback: (value) => value + " %"
            },
            suggestedMin: 5
        },
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
