import { ITournamentDb } from "../../../ts/models/ITournamentDb";
import sortByRole from "./sortByRole";

const filterTeamTournament = (
    tournaments: ITournamentDb[],
    tournamentId: number
): ITournamentDb[] => {
    let teamTournament: ITournamentDb[] = [];
    const findTournament =
        tournamentId !== 0 &&
        tournaments.find((tour) => tour._id === tournamentId);

    if (findTournament) {
        const filterTeamsTournament = tournaments.filter(
            (tour) => tour["ID команды"] === findTournament["ID команды"]
        );

        teamTournament = sortByRole(filterTeamsTournament);
    }

    return teamTournament;
};

export default filterTeamTournament;
