const transformChar = (word: string) => {
    const wordSplit = word.split("");
    wordSplit[0] = wordSplit[0].toLocaleUpperCase();
    return wordSplit.join("");
};

export default transformChar;
