import { ChartDataType } from "../../../../ts/types/ChartTypes/ChartDataType";

const countDifferenceStats = (lastStatsData: ChartDataType[]) => {
    const dataSize = lastStatsData.length;

    if (dataSize !== 0) {
        if (dataSize !== 1) {
            const getLastItems = lastStatsData.slice(dataSize - 2, dataSize);
            const diffNum =
                getLastItems[getLastItems.length - 1].value -
                getLastItems[0].value;

            const isZero = diffNum === 0;
            const isPositive = diffNum > 0;

            if (isZero) {
                return {
                    difference: diffNum,
                    isZero: true,
                    isPositive: false
                };
            } else if (isPositive) {
                return {
                    difference: diffNum,
                    isZero: false,
                    isPositive: true
                };
            } else if (!isPositive) {
                return {
                    difference: diffNum,
                    isZero: false,
                    isPositive: false
                };
            }
        } else {
            return {
                difference: lastStatsData[0].value,
                isZero: false,
                isPositive: true
            };
        }
    }
    return {
        difference: 0,
        isZero: false,
        isPositive: false
    };
};

export default countDifferenceStats;
