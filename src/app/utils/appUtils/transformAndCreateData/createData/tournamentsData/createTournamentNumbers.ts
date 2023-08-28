import { ITournamentDb } from "../../../../../ts/models/ITournamentDb";
import { TournamentNumber } from "../../../../../ts/types/TournamentTypes/TournamentNumber";

const createTournamentNumbers = (
    tournaments: ITournamentDb[]
): TournamentNumber[] => {
    return tournaments.map((tour) => ({
        _id: tour._id,
        tournamentNumber: tour["Номер турнира"]
    }));
};

export default createTournamentNumbers;
