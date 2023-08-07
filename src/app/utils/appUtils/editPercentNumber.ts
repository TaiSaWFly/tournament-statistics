const editPercentNumber = (num: number): string => {
    const editingNumber = "0.00";

    if (num !== 0) {
        if (num === 100) return String(num);

        const splitNumber = String(num).split(".");

        if (splitNumber.length > 1) {
            const isNotOnePartNumber =
                splitNumber[splitNumber.length - 1].length > 1;

            const isGreaterNumberThan =
                Number(splitNumber[splitNumber.length - 1]) <= 9;

            if (isNotOnePartNumber) return splitNumber.join(".");

            if (isGreaterNumberThan) {
                return `${splitNumber[0]}.${
                    splitNumber[splitNumber.length - 1]
                }0`;
            }
        } else {
            return `${splitNumber.join("")}.00`;
        }
    }

    return editingNumber;
};

export default editPercentNumber;
