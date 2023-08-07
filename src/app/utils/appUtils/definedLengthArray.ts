const definedLengthArray = <T>(data: T[], arrayLength: number = 6): T[] => {
    return data.filter((_, index) => index < arrayLength);
};

export default definedLengthArray;
