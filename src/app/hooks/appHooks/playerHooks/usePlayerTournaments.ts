import { IPlayer } from "../../../ts/models/IPlayer";
import { useAppSelector } from "../../reduxHooks/reduxHooks";
import createTournamentNumbers from "../../../utils/appUtils/transformAndCreateData/createData/tournamentsData/createTournamentNumbers";
import createPlayerTournamentTeams from "../../../utils/appUtils/transformAndCreateData/createData/tournamentsData/createPlayerTournamentTeams";
import { useMemo } from "react";

const usePlayerTournaments = (player: IPlayer) => {
    const tournamentDb = useAppSelector((state) => state.tournamentDb.entities);
    const foundTournaments = tournamentDb
        .filter((tour) => tour.PlayerID === player.ID)
        .sort((a, b) => b._id - a._id);

    const tournamentNumbers = useMemo(
        () => createTournamentNumbers(foundTournaments),
        [player]
    );
    const dataTournamentTeams = useMemo(
        () => createPlayerTournamentTeams(tournamentDb, foundTournaments),
        [player]
    );

    return {
        dataTournamentTeams,
        tournamentNumbers
    };
};

export default usePlayerTournaments;
