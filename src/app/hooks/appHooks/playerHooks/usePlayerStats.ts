import { IPlayer } from "../../../ts/models/IPlayer";
import { useAppSelector } from "../../reduxHooks/reduxHooks";
import sortBestResult from "../../../utils/appUtils/countSortStatisticData/sortBestResult";
import countAverageProximity from "../../../utils/appUtils/countWinrate/countAverageProximity";
import countAveragePlace from "../../../utils/appUtils/countSortStatisticData/countStatisticData/countAveragePlace";
import returnRoleStatistics from "../../../utils/appUtils/countSortStatisticData/countRoleStatistics/returnRoleStatistics";
import { useEffect, useState } from "react";
import { playerStatsInitialState } from "../../../data/defaultInitialStateData";

const usePlayerStats = (player: IPlayer) => {
    const tournamentDb = useAppSelector((state) => state.tournamentDb.entities);
    const playerStatisticsData = useAppSelector(
        (state) => state.playerStatisticsData.entities
    );
    const [playerStats, setPlayerStats] = useState(playerStatsInitialState);

    useEffect(() => {
        const foundTournaments = tournamentDb.filter(
            (tour) => tour.PlayerID === player.ID
        );
        const foundPlayerStatistic = playerStatisticsData.filter(
            (pl) => pl.PlayerID === player.ID
        );

        if (
            foundTournaments.length !== 0 &&
            foundPlayerStatistic.length !== 0
        ) {
            setPlayerStats({
                tournamentsPlayed:
                    foundPlayerStatistic[0]["Колличество турниров"],
                tournamentsWon: foundPlayerStatistic[0].Чемпионств,
                winrateZero: foundPlayerStatistic[0]["Отлётов в ноль"],
                mapsWon: foundPlayerStatistic[0]["Выиграно карт"],
                mapsAll: foundPlayerStatistic[0]["Всего карт"],
                winrateByMaps: foundPlayerStatistic[0].Винрейт,
                bestResult: sortBestResult(foundTournaments),
                averageProximity: countAverageProximity(foundTournaments),
                averagePlace: countAveragePlace(
                    foundTournaments,
                    foundPlayerStatistic[0]["Колличество турниров"]
                ),
                roleStatisticsData: returnRoleStatistics(foundTournaments)
            });
        } else {
            setPlayerStats(playerStatsInitialState);
        }
    }, [player]);

    return {
        ...playerStats
    };
};

export default usePlayerStats;
