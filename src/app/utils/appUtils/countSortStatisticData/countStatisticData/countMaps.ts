import { ITournamentDb } from "../../../../ts/models/ITournamentDb";
import countReduceDataByKey from "../../countDataByKey/countReduceDataByKey";

const countMaps = (tournaments: ITournamentDb[]) => {
    const mapsWon = countReduceDataByKey(tournaments, "Выиграно карт");
    const mapsAll = countReduceDataByKey(tournaments, "Всего карт");

    return {
        mapsWon,
        mapsAll
    };
};

export default countMaps;
