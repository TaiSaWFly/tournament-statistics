import {
    PlayerChartLabelNameType,
    PlayerChartLabelStackNameType
} from "../../../../ts/types/ChartTypes/ChartDataType";
import returnToltipPercentLabel from "../returnToltipPercentLabel";
import returnToltipStackLabel from "../returnToltipStackLabel";
import transformDefaultToltipLabel from "../transformDefaultToltipLabel";

const transformPlayerStatsRadarToltipLabel = (ctx: any) => {
    const chartLabelName: PlayerChartLabelNameType = ctx.dataset.label;
    const chartLabelStackName: PlayerChartLabelStackNameType =
        ctx.dataset.stack;

    const { defaultLabel, labelCapitalize } = transformDefaultToltipLabel(ctx);
    const formattedLabelByStack = returnToltipStackLabel({
        chartLabelStackName,
        labelCapitalize
    });

    if (chartLabelName === "percent") {
        return returnToltipPercentLabel({
            formattedValue: ctx.formattedValue,
            labelCapitalize: formattedLabelByStack
        });
    }

    return defaultLabel;
};

export default transformPlayerStatsRadarToltipLabel;
