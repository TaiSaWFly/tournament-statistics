import { useMemo, useState } from "react";
import filterDoubleDataByKey from "../../../utils/appUtils/filterSortData/filterDoubleDataByKey";
import tansformDataToSelectOptionByKeys from "../../../utils/appUtils/transformAndCreateData/transformData/tansformDataToSelectOptionByKeys";
import { useAppSelector } from "../../reduxHooks/reduxHooks";
import { ITournamentDb } from "../../../ts/models/ITournamentDb";
import sortByRole from "../../../utils/appUtils/filterSortData/sortByRole";
import definedLengthArray from "../../../utils/appUtils/other/definedLengthArray";
import { TournamentStatisticInfoType } from "../../../ts/types/TournamentTypes/TournamentStatisticInfoType";
import returnTournamentStatistic from "../../../utils/appUtils/transformAndCreateData/createData/tornamentStatisticData/returnTournamentStatistic";

const useTournamentStats = () => {
    const tournamentDb = useAppSelector((state) => state.tournamentDb.entities);
    const matchesDb = useAppSelector((state) => state.matchesDb.entities);

    const [tournamentNumber, setTournamentNumber] = useState(0);
    const [tournamentStatisticInfoData, setTournamentStatisticInfoData] =
        useState<TournamentStatisticInfoType[]>([]);

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
        const currentTournamentData = tournamentDb.filter(
            (tour) => tour["Номер турнира"] === listId
        );
        const currentTournamentByTeam = currentTournamentData.filter(
            (tour) =>
                tour.Команда.toLocaleLowerCase() ===
                tour.Игрок.toLocaleLowerCase()
        );

        const getPlaceTeams = definedLengthArray(
            currentTournamentByTeam.sort((a, b) => a.Место - b.Место)
        );
        const getFirstPlaceTeam = currentTournamentData.filter(
            (tuor) => tuor["ID команды"] === getPlaceTeams[0]["ID команды"]
        );

        const tournamentStatsInfo = returnTournamentStatistic({
            tournaments: tournamentDb,
            currentTournamentData,
            matches: matchesDb,
            currentTournamentNumber: listId
        });

        setTournamentNumber(listId);
        setTournamentStatisticInfoData(tournamentStatsInfo);
        setTournamentPlaceTeams(getPlaceTeams);
        setTournamentFirstPlaceTeam(sortByRole(getFirstPlaceTeam));
    };

    return {
        tournamentNumber,
        tournamentStatisticInfoData,
        tournamentOptions,
        tournamentPlaceTeams,
        tournamentFirstPlaceTeam,
        getTournamentListId
    };
};

export default useTournamentStats;
