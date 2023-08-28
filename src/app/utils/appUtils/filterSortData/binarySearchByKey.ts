const binarySearchByKey = <T extends Record<K, number>, K extends keyof T>(
    data: T[],
    key: K,
    target: number
): T | null => {
    let start = 0;
    let end = data.length - 1;

    if (target < data[start][key] || target > data[end][key]) {
        return null;
    }

    while (true) {
        if (target === data[start][key]) {
            return data[start];
        }

        if (target === data[end][key]) {
            return data[end];
        }

        if (end - start <= 1) {
            return null;
        }

        const middle = Math.floor((start + end) / 2);

        if (target > data[middle][key]) {
            start = middle + 1;
        } else if (target < data[middle][key]) {
            end = middle - 1;
        } else {
            return data[middle];
        }
    }
};

export default binarySearchByKey;
