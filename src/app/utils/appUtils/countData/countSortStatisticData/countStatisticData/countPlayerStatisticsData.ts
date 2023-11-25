import { ITournamentDb } from "../../../../../ts/models/ITournamentDb";
import countMaps from "./countMaps";
import { IPlayer } from "../../../../../ts/models/IPlayer";
import roleTournamentsWonLose from "../../../transformAndCreateData/createData/roleStatistics/roleTournamentsWonLose";
import { IPlayerStats } from "../../../../../ts/models/IPlayerStats";
import countZeroWinrate from "../../countWinrate/countZeroWinrate";
import countWinrateByMaps from "../../countWinrate/countWinrateByMaps";
import countReduceDataByKey from "../../countDataByKey/countReduceDataByKey";
import countAverageProximity from "../../countWinrate/countAverageProximity";
import returnRoleStatistics from "../../../transformAndCreateData/createData/roleStatistics/returnRoleStatistics";

const countPlayerStatisticsData = (
    tournaments: ITournamentDb[],
    players: IPlayer[]
) => {
    const playerStatistics: IPlayerStats[] = [];

    for (let i = 0; i < players.length; i++) {
        const tournamentsPlayerData = tournaments.filter(
            (t) => t.PlayerID === players[i].ID
        );

        if (tournamentsPlayerData.length !== 0) {
            const { mapsWon, mapsAll } = countMaps(tournamentsPlayerData);
            const winrateByMaps = countWinrateByMaps({ mapsWon, mapsAll });
            const tournamentsWon = countReduceDataByKey(
                tournamentsPlayerData,
                "Чемпионство"
            );
            const winrateZero = countZeroWinrate(tournamentsPlayerData);
            const { roleTournamentsWon, roleTournamentsLose } =
                roleTournamentsWonLose(tournamentsPlayerData);
            const averageProximity = countAverageProximity(
                tournamentsPlayerData
            );
            const roleStatisticsData = returnRoleStatistics(
                tournamentsPlayerData
            );

            const playerStats: IPlayerStats = {
                _id: players[i].ID * 121 * 212,
                pageId: players[i]._id,
                PlayerID: tournamentsPlayerData[0].PlayerID,
                Игрок: tournamentsPlayerData[0].Игрок,
                "Выиграно карт": mapsWon,
                "Всего карт": mapsAll,
                Винрейт: winrateByMaps,
                Чемпионств: tournamentsWon,
                "Чемпионство роль": roleTournamentsWon,
                "Отлётов в ноль": winrateZero,
                "Отлётов в ноль роль": roleTournamentsLose,
                "Колличество турниров": tournamentsPlayerData.length,
                "Средняя близость": averageProximity,
                "Статистика по ролям": roleStatisticsData
            };

            playerStatistics.push(playerStats);
        }
    }

    return playerStatistics;
};

export default countPlayerStatisticsData;
