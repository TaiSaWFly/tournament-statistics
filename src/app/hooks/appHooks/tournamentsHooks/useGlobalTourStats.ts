import countDataQtyByKey from "../../../utils/appUtils/countDataByKey/countDataQtyByKey";
import definedLengthArray from "../../../utils/appUtils/definedLengthArray";
import { useAppSelector } from "../../reduxHooks/reduxHooks";
import _ from "lodash";

const useGlobalTourStats = () => {
    const tournamentDb = useAppSelector((state) => state.tournamentDb.entities);
    const matchesDb = useAppSelector((state) => state.matchesDb.entities);
    const playerStatisticsData = useAppSelector(
        (state) => state.playerStatisticsData.entities
    );
    const filterChampions = tournamentDb.filter((tour) => tour.Чемпионство);

    // _____count global tournaments stats_____
    const globalTournamentStats = {
        qtyGlobalTournaments: countDataQtyByKey(tournamentDb, "Номер турнира"),
        qtyGlobalTeams: countDataQtyByKey(tournamentDb, "ID команды"),
        qtyGlobalPlayers: countDataQtyByKey(tournamentDb, "PlayerID"),
        qtyGlobalMatches: countDataQtyByKey(
            matchesDb,
            "Уникальный номер матча"
        ),
        qtyGlobalPlayerChampions: countDataQtyByKey(filterChampions, "PlayerID")
    };
    // _____count global tournaments stats_____

    const fillterDataByQtyTournaments = playerStatisticsData.filter(
        (data) => data["Колличество турниров"] >= 5
    );
    const topTwentyByCardsWon = definedLengthArray(
        _.orderBy(fillterDataByQtyTournaments, ["Выиграно карт"], ["desc"]),
        20
    );
    const topTwentyChampions = definedLengthArray(
        _.orderBy(playerStatisticsData, ["Чемпионств"], ["desc"]),
        20
    );
    const topTwentybyWinrate = definedLengthArray(
        _.orderBy(fillterDataByQtyTournaments, ["Винрейт"], ["desc"]),
        20
    );
    const topTwentyLosers = definedLengthArray(
        _.orderBy(fillterDataByQtyTournaments, ["Отлётов в ноль"], ["desc"]),
        20
    );

    return {
        ...globalTournamentStats,
        topTwentyByCardsWon,
        topTwentyChampions,
        topTwentybyWinrate,
        topTwentyLosers
    };
};

export default useGlobalTourStats;
