export const tournamentStatisticsInfoOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
        tooltip: {
            titleColor: "#FF8901",
            boxWidth: 0,
            boxHeight: 0,
            boxPadding: 0,
            caretPadding: 5,
            titleFont: { size: 12 }
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
