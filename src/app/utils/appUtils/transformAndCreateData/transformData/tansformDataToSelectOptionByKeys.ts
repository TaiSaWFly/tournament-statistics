import { SelectOption } from "../../../../ts/types/SelectOption";

const tansformDataToSelectOptionByKeys = <T, K extends keyof T>(
    data: T[],
    value: K,
    label: K,
    prefix?: string
): SelectOption[] => {
    return data.map((d) => ({
        value: String(d[value]),
        label: prefix ? String(d[label]) + " " + prefix : String(d[label])
    }));
};

export default tansformDataToSelectOptionByKeys;
