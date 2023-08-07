import { ITournamentDb } from "../../../ts/models/ITournamentDb";
import binarySearchByKey from "./binarySearchByKey";

const searchTournamentPlaces = (
    sortTournament: ITournamentDb[],
    places: number[]
) => {
    const teamsByPlaces: ITournamentDb[] = [];
    places.forEach((place) => {
        const team = binarySearchByKey(sortTournament, "Место", place);
        if (team !== null) {
            teamsByPlaces.push(team);
        }
    });

    return teamsByPlaces;
};

export default searchTournamentPlaces;
