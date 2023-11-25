type ReturnToltipPercentLabelArgsType = {
    formattedValue: string;
    labelCapitalize: string;
};
type ReturnToltipPercentLabelType = ({
    formattedValue,
    labelCapitalize
}: ReturnToltipPercentLabelArgsType) => string;

const returnToltipPercentLabel: ReturnToltipPercentLabelType = ({
    formattedValue,
    labelCapitalize
}) => {
    return `${labelCapitalize}: ${formattedValue}%`;
};

export default returnToltipPercentLabel;
