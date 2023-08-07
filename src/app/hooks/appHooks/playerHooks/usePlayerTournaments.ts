import { useState } from "react";
import { IPlayer } from "../../../ts/models/IPlayer";
import { useAppSelector } from "../../reduxHooks/reduxHooks";
import { ITournamentDb } from "../../../ts/models/ITournamentDb";
import filterTeamTournament from "../../../utils/appUtils/filterSearchData/filterTeamTournament";
import countTournamentTeams from "../../../utils/appUtils/countSortStatisticData/countStatisticData/countTournamentTeams";

const usePlayerTournaments = (player: IPlayer) => {
    const tournamentDb = useAppSelector((state) => state.tournamentDb.entities);
    const foundTournaments = tournamentDb.filter(
        (tour) => tour.PlayerID === player.ID
    );

    const [teamTournament, setTeamTournament] = useState<ITournamentDb[]>([]);
    const [tournamentNumber, setTournamentNumber] = useState(0);
    const [teamName, setTeamName] = useState("");
    const [qtyTournamentTeams, setQtyTournamentTeams] = useState(0);

    const sortAllTournaments = foundTournaments.sort((a, b) => b._id - a._id);

    const getListId = (listId: number) => {
        const dataTeamTournament = filterTeamTournament(tournamentDb, listId);
        const numberTournament =
            dataTeamTournament.length !== 0
                ? dataTeamTournament[0]["Номер турнира"]
                : 0;
        const nameTeam =
            dataTeamTournament.length !== 0
                ? dataTeamTournament[0].Команда
                : "";

        const tournamentTeamsQty = countTournamentTeams(
            numberTournament,
            tournamentDb
        );

        setTeamTournament(dataTeamTournament);
        setTournamentNumber(numberTournament);
        setTeamName(nameTeam);
        setQtyTournamentTeams(tournamentTeamsQty);
    };

    return {
        getListId,
        sortAllTournaments,
        teamTournament,
        tournamentNumber,
        teamName,
        qtyTournamentTeams
    };
};

export default usePlayerTournaments;
