import { IPlayer } from "../../../ts/models/IPlayer";
import { useAppSelector } from "../../reduxHooks/reduxHooks";
import { playerStatsInitialState } from "../../../data/AppData/defaultInitialStateData";
import sortBestResult from "../../../utils/appUtils/filterSortData/sortBestResult";
import countAveragePlace from "../../../utils/appUtils/countData/countSortStatisticData/countStatisticData/countAveragePlace";
import { PlayerStatsDataType } from "../../../ts/types/PlayerTypes/PlayerStatsDataType";

const usePlayerStats = (player: IPlayer): PlayerStatsDataType => {
    const tournamentDb = useAppSelector((state) => state.tournamentDb.entities);
    const { data: playerStatisticsData } = useAppSelector(
        (state) => state.playerStatisticsData.entities.playerStats
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
                  averageProximity: foundPlayerStatistic[0]["Средняя близость"],
                  averagePlace: countAveragePlace(
                      foundTournaments,
                      foundPlayerStatistic[0]["Колличество турниров"]
                  ),
                  roleStatisticsData:
                      foundPlayerStatistic[0]["Статистика по ролям"]
              }
            : playerStatsInitialState;

    return {
        ...playerStats
    };
};

export default usePlayerStats;
