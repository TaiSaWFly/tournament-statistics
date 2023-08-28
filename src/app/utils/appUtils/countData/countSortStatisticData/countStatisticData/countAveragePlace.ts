import { ITournamentDb } from "../../../../../ts/models/ITournamentDb";
import countReduceDataByKey from "../../countDataByKey/countReduceDataByKey";

const countAveragePlace = (
    tournaments: ITournamentDb[],
    tournamentsPlayed: number
) => {
    const place =
        countReduceDataByKey(tournaments, "Место") / tournamentsPlayed;

    return Number(place.toFixed(0));
};

export default countAveragePlace;
