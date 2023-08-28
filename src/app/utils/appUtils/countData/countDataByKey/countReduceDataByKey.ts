const countReduceDataByKey = <T extends Record<K, number>, K extends keyof T>(
    data: T[],
    key: K
): number => {
    return data.reduce((acc, d) => acc + d[key], 0);
};

export default countReduceDataByKey;
