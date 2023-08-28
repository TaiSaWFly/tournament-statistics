import { ITournamentDb } from "../../../../../ts/models/ITournamentDb";
import countDataQtyByKey from "../../../countData/countDataByKey/countDataQtyByKey";

const countTournamentTeams = (
    tournamentNumber: number,
    tournaments: ITournamentDb[]
): number => {
    const currentTournament = tournaments.filter(
        (tour) => tour["Номер турнира"] === tournamentNumber
    );

    const tournamentTeamsLength = countDataQtyByKey(
        currentTournament,
        "ID команды"
    );

    return tournamentTeamsLength;
};

export default countTournamentTeams;
