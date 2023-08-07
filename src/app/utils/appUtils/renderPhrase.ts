type renderPhraseCases = {
    nominativeCase: string;
    genitiveCase: string;
    instrumentalCase: string;
};

const renderPhrase = (
    number: number,
    { nominativeCase, genitiveCase, instrumentalCase }: renderPhraseCases
) => {
    let lastOne = number;

    if (number >= 1000) {
        lastOne = Number(number.toString().slice(2, 4));
    } else if (number >= 100) {
        lastOne = Number(number.toString().slice(1, 3));
    } else {
        lastOne = Number(number.toString().slice(-1));
    }

    if (number > 4 && number < 15) {
        return instrumentalCase;
    }
    if (lastOne === 1) return nominativeCase;
    if ([2, 3, 4].indexOf(lastOne) >= 0) return genitiveCase;
    return instrumentalCase;
};

export default renderPhrase;
