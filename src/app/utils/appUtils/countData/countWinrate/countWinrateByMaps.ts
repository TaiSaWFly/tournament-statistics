type countWinrateByMapsArgs = {
    mapsWon: number;
    mapsAll: number;
};

const countWinrateByMaps = ({ mapsWon, mapsAll }: countWinrateByMapsArgs) => {
    const result = (mapsWon / mapsAll) * 100;
    return Math.floor(result) !== result ? Number(result.toFixed(2)) : result;
};

export default countWinrateByMaps;
