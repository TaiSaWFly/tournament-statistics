import transformChar from "../other/transformChar";

const transformDefaultToltipLabel = (ctx: any) => {
    const label = ctx.label as string;
    const labelCapitalize = transformChar(label);

    return {
        defaultLabel: `${labelCapitalize}: ${ctx.formattedValue}`,
        labelCapitalize
    };
};

export default transformDefaultToltipLabel;
