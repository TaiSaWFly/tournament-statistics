import { ChartDoughnutOptions } from "../../../ts/types/ChartTypes/ChartDataType";
import transformPlayerStatsRoleToltipLabel from "../../../utils/appUtils/chartUtils/playerChart/transformPlayerStatsRoleToltipLabel";

export const playerStatsRoleOptions: ChartDoughnutOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
        tooltip: {
            titleColor: "#FF8901",
            displayColors: false,
            caretPadding: 5,
            titleFont: { size: 12 },
            callbacks: {
                label: transformPlayerStatsRoleToltipLabel
            }
        }
    },
    elements: {
        arc: {
            backgroundColor: ["#6D6A6D", "#CF3C3C", "#FDD46A"],
            hoverOffset: 3
        }
    }
};
