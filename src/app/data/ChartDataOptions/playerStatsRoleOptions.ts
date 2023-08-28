import { PlayerChartLabelName } from "../../ts/types/ChartTypes/PlayerChartOptionTypes";
import renderPhrase from "../../utils/appUtils/other/renderPhrase";

const transformToltipLabel = (ctx: any) => {
    const chartLabelName: PlayerChartLabelName = ctx.dataset.label;
    const labelSplit = ctx.label.split("");
    labelSplit[0] = labelSplit[0].toLocaleUpperCase();
    const labelCapitalize = labelSplit.join("");

    const defaultLabel = `${labelCapitalize}: ${ctx.formattedValue}`;

    if (chartLabelName === "percent") {
        return `${labelCapitalize}: ${ctx.formattedValue}%`;
    }

    if (chartLabelName === "games") {
        return `${labelCapitalize}: ${ctx.formattedValue} ${renderPhrase(
            Number(ctx.formattedValue),
            {
                nominativeCase: "Турнир",
                genitiveCase: "Турнира",
                instrumentalCase: "Турниров"
            }
        )}`;
    }

    return defaultLabel;
};

export const playerStatsRoleOptions = {
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
            titleFont: { size: 12 },
            callbacks: {
                label: transformToltipLabel
            }
        }
    }
};
