import { PlayerChartLabelNameType } from "../../../../ts/types/ChartTypes/ChartDataType";
import renderPhrase from "../../other/renderPhrase";
import returnToltipGameLabel from "../returnToltipGameLabel";
import returnToltipPercentLabel from "../returnToltipPercentLabel";
import transformDefaultToltipLabel from "../transformDefaultToltipLabel";

const transformPlayerStatsRoleToltipLabel = (ctx: any) => {
    const chartLabelName: PlayerChartLabelNameType = ctx.dataset.label;
    const { defaultLabel, labelCapitalize } = transformDefaultToltipLabel(ctx);

    if (chartLabelName === "percent") {
        return returnToltipPercentLabel({
            formattedValue: ctx.formattedValue,
            labelCapitalize
        });
    }

    if (chartLabelName === "games") {
        return returnToltipGameLabel({
            formattedValue: ctx.formattedValue,
            labelCapitalize,
            renderPhrase: renderPhrase(Number(ctx.formattedValue), {
                nominativeCase: "Турнир",
                genitiveCase: "Турнира",
                instrumentalCase: "Турниров"
            })
        });
    }

    return defaultLabel;
};

export default transformPlayerStatsRoleToltipLabel;
