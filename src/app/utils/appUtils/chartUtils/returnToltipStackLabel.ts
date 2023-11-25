import { PlayerChartLabelStackNameType } from "../../../ts/types/ChartTypes/ChartDataType";

type ReturnToltipStackLabelArgsType = {
    chartLabelStackName: PlayerChartLabelStackNameType;
    labelCapitalize: string;
};

type ReturnToltipStackLabelType = ({
    chartLabelStackName,
    labelCapitalize
}: ReturnToltipStackLabelArgsType) => string;

const returnToltipStackLabel: ReturnToltipStackLabelType = ({
    chartLabelStackName,
    labelCapitalize
}) => {
    if (chartLabelStackName === "average") {
        return labelCapitalize + " Средний";
    }

    if (chartLabelStackName === "player") {
        return labelCapitalize + " Игрок";
    }

    return labelCapitalize;
};

export default returnToltipStackLabel;
