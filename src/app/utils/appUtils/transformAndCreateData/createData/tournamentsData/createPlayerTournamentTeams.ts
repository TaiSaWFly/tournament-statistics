import { ITournamentDb } from "../../../../../ts/models/ITournamentDb";
import { TournamentTeam } from "../../../../../ts/types/TournamentTypes/TournamentTeam";
import countTournamentTeams from "../../../countData/countSortStatisticData/countStatisticData/countTournamentTeams";
import filterTeamTournament from "../../../filterSortData/filterTeamTournament";

const createPlayerTournamentTeams = (
    tournaments: ITournamentDb[],
    foundTournaments: ITournamentDb[]
): TournamentTeam[] => {
    return foundTournaments.map((tour) => {
        const teamTournament = filterTeamTournament(tournaments, tour._id);
        const tournamentTeamsQty = countTournamentTeams(
            tour["Номер турнира"],
            tournaments
        );

        return {
            _id: tour._id,
            tournamentNumber: tour["Номер турнира"],
            teamName: teamTournament[0].Команда,
            tournamentTeamsQty,
            teamTournament
        };
    });
};

export default createPlayerTournamentTeams;
