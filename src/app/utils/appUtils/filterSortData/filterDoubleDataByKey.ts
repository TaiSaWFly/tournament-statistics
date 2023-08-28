const filterDoubleDataByKey = <T, K extends keyof T>(
    data: T[],
    key: K
): T[] => {
    return data.reduce((arr, d) => {
        if (!arr.find((a) => a[key] === d[key])) {
            arr.push(d);
        }
        return arr;
    }, [] as T[]);
};

export default filterDoubleDataByKey;
