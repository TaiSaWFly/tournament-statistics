import filterDoubleDataByKey from "../../filterSortData/filterDoubleDataByKey";

const countDataQtyByKey = <T, K extends keyof T>(data: T[], key: K): number => {
    return filterDoubleDataByKey(data, key).length;
};

export default countDataQtyByKey;
