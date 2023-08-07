import { ITournamentDb } from "../../../ts/models/ITournamentDb";
import { useAppSelector } from "../../reduxHooks/reduxHooks";

const usePlayerMatches = (
    teamTournament: ITournamentDb,
    tournamentNumber: number
) => {
    const matchesDb = useAppSelector((state) => state.matchesDb.entities);
    const filterMatches = matchesDb.filter(
        (match) =>
            match.Турнир === tournamentNumber &&
            match["ID team all"] === teamTournament["ID команды"]
    );

    return { filterMatches };
};

export default usePlayerMatches;
