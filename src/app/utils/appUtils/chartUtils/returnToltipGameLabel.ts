type ReturnToltipGameLabelArgsType = {
    formattedValue: string;
    labelCapitalize: string;
    renderPhrase: string;
};
type ReturnToltipGameLabelType = ({
    formattedValue,
    labelCapitalize,
    renderPhrase
}: ReturnToltipGameLabelArgsType) => string;

const returnToltipGameLabel: ReturnToltipGameLabelType = ({
    formattedValue,
    labelCapitalize,
    renderPhrase
}) => {
    return `${labelCapitalize}: ${formattedValue} ${renderPhrase}`;
};

export default returnToltipGameLabel;
