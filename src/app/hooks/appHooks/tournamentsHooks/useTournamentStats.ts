import { useMemo, useState } from "react";
import filterDoubleDataByKey from "../../../utils/appUtils/filterSearchData/filterDoubleDataByKey";
import tansformDataToSelectOptionByKeys from "../../../utils/appUtils/tansformDataToSelectOptionByKeys";
import { useAppSelector } from "../../reduxHooks/reduxHooks";
import countDataQtyByKey from "../../../utils/appUtils/countDataByKey/countDataQtyByKey";
import countMaps from "../../../utils/appUtils/countSortStatisticData/countStatisticData/countMaps";
import countReduceDataByKey from "../../../utils/appUtils/countDataByKey/countReduceDataByKey";
import { ITournamentDb } from "../../../ts/models/ITournamentDb";
import sortByRole from "../../../utils/appUtils/filterSearchData/sortByRole";
import definedLengthArray from "../../../utils/appUtils/definedLengthArray";
import { tournamentStatisticDataInitialState } from "../../../data/defaultInitialStateData";

const useTournamentStats = () => {
    const tournamentDb = useAppSelector((state) => state.tournamentDb.entities);
    const matchesDb = useAppSelector((state) => state.matchesDb.entities);

    const [tournamentStatisticData, setTournamentStatisticData] = useState(
        tournamentStatisticDataInitialState
    );
    const [tournamentPlaceTeams, setTournamentPlaceTeams] = useState<
        ITournamentDb[]
    >([]);
    const [tournamentFirstPlaceTeam, setTournamentFirstPlaceTeam] = useState<
        ITournamentDb[]
    >([]);

    const qtyTournamentArray = filterDoubleDataByKey(
        tournamentDb,
        "Номер турнира"
    );
    const tournamentOptions = useMemo(
        () =>
            tansformDataToSelectOptionByKeys(
                qtyTournamentArray,
                "Номер турнира",
                "Номер турнира",
                "Турнир"
            ).sort((a, b) => Number(b.value) - Number(a.value)),
        []
    );

    const getTournamentListId = (listId: number) => {
        const currentTournament = tournamentDb.filter(
            (tour) => tour["Номер турнира"] === listId
        );
        const filterCurrentTournament = currentTournament.filter(
            (tour) =>
                tour.Команда.toLocaleLowerCase() ===
                tour.Игрок.toLocaleLowerCase()
        );
        const filterMatchesDbByTourNumber = matchesDb.filter(
            (match) => match.Турнир === listId
        );
        const getPlaceTeams = definedLengthArray(
            filterCurrentTournament.sort((a, b) => a.Место - b.Место)
        );
        const getFirstPlaceTeam = currentTournament.filter(
            (tuor) => tuor["ID команды"] === getPlaceTeams[0]["ID команды"]
        );

        setTournamentStatisticData({
            tournamentNumber: listId,
            tournamentTeamsQty: countDataQtyByKey(
                currentTournament,
                "ID команды"
            ),
            tournamentPlayersQty: countDataQtyByKey(
                currentTournament,
                "PlayerID"
            ),
            tournamentMatchesQty: countDataQtyByKey(
                filterMatchesDbByTourNumber,
                "Уникальный номер матча"
            ),
            tournamentMapsQty: countMaps(filterCurrentTournament).mapsWon,
            tournamentNewPlayersQty: countReduceDataByKey(
                currentTournament,
                "Новичок "
            )
        });
        setTournamentPlaceTeams(getPlaceTeams);
        setTournamentFirstPlaceTeam(sortByRole(getFirstPlaceTeam));
    };

    return {
        tournamentOptions,
        tournamentStatisticData,
        tournamentPlaceTeams,
        tournamentFirstPlaceTeam,
        getTournamentListId
    };
};

export default useTournamentStats;
