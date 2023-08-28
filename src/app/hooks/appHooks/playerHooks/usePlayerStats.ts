import { IPlayer } from "../../../ts/models/IPlayer";
import { useAppSelector } from "../../reduxHooks/reduxHooks";
import countAverageProximity from "../../../utils/appUtils/countData/countWinrate/countAverageProximity";
import { playerStatsInitialState } from "../../../data/defaultInitialStateData";
import sortBestResult from "../../../utils/appUtils/filterSortData/sortBestResult";
import countAveragePlace from "../../../utils/appUtils/countData/countSortStatisticData/countStatisticData/countAveragePlace";
import returnRoleStatistics from "../../../utils/appUtils/transformAndCreateData/createData/roleStatistics/returnRoleStatistics";

const usePlayerStats = (player: IPlayer) => {
    const tournamentDb = useAppSelector((state) => state.tournamentDb.entities);
    const playerStatisticsData = useAppSelector(
        (state) => state.playerStatisticsData.entities
    );

    const foundTournaments = tournamentDb.filter(
        (tour) => tour.PlayerID === player.ID
    );
    const foundPlayerStatistic = playerStatisticsData.filter(
        (pl) => pl.PlayerID === player.ID
    );

    const playerStats =
        foundTournaments.length !== 0 && foundPlayerStatistic.length !== 0
            ? {
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
              }
            : playerStatsInitialState;

    return {
        ...playerStats
    };
};

export default usePlayerStats;
