import { roleStatisticsInitialState } from "../../../../../data/AppData/defaultInitialStateData";
import { IPlayerStats } from "../../../../../ts/models/IPlayerStats";
import { ChartDataType } from "../../../../../ts/types/ChartTypes/ChartDataType";
import returnAveragePlayerStatistics from "../../../transformAndCreateData/createData/playerStatisticsData/returnAveragePlayerStatistics";
import transformDataForRadarPlayerChart from "../../../transformAndCreateData/transformData/transformDataForRadarPlayerChart";
import countReduceDataByKey from "../../countDataByKey/countReduceDataByKey";

const countAveragePlayersSatisticsData = (
    data: IPlayerStats[]
): ChartDataType[] => {
    const averagePlayersStatisticsByRoles = roleStatisticsInitialState;
    const notZeroProximity = data.filter((d) => d["Средняя близость"] !== 0);
    const notZeroWinrate = data.filter((d) => d["Винрейт"] !== 0);

    const notZeroWinrateRoleTank = data
        .filter((d) => d["Статистика по ролям"].tank.averageWinrate !== 0)
        .map((d) => ({
            averageWinrate: d["Статистика по ролям"].tank.averageWinrate
        }));

    const notZeroWinrateRoleDps = data
        .filter((d) => d["Статистика по ролям"].dps.averageWinrate !== 0)
        .map((d) => ({
            averageWinrate: d["Статистика по ролям"].dps.averageWinrate
        }));

    const notZeroWinrateRoleSupport = data
        .filter((d) => d["Статистика по ролям"].support.averageWinrate !== 0)
        .map((d) => ({
            averageWinrate: d["Статистика по ролям"].support.averageWinrate
        }));

    const tankAverageWinrate = Number(
        (
            countReduceDataByKey(notZeroWinrateRoleTank, "averageWinrate") /
            notZeroWinrateRoleTank.length
        ).toFixed(2)
    );
    const dpsAverageWinrate = Number(
        (
            countReduceDataByKey(notZeroWinrateRoleDps, "averageWinrate") /
            notZeroWinrateRoleDps.length
        ).toFixed(2)
    );
    const supportAverageWinrate = Number(
        (
            countReduceDataByKey(notZeroWinrateRoleSupport, "averageWinrate") /
            notZeroWinrateRoleSupport.length
        ).toFixed(2)
    );

    averagePlayersStatisticsByRoles.tank.averageWinrate = tankAverageWinrate;
    averagePlayersStatisticsByRoles.dps.averageWinrate = dpsAverageWinrate;
    averagePlayersStatisticsByRoles.support.averageWinrate =
        supportAverageWinrate;

    const averageProximity = Number(
        (
            countReduceDataByKey(notZeroProximity, "Средняя близость") /
            notZeroProximity.length
        ).toFixed(2)
    );
    const winrate = Number(
        (
            countReduceDataByKey(notZeroWinrate, "Средняя близость") /
            notZeroWinrate.length
        ).toFixed(2)
    );

    const averagePlayersStatistics = returnAveragePlayerStatistics({
        averageProximity,
        winrateByMaps: winrate,
        roleStatisticsData: averagePlayersStatisticsByRoles
    });

    const averagePlayersChartData = transformDataForRadarPlayerChart(
        averagePlayersStatistics
    );

    return averagePlayersChartData;
};

export default countAveragePlayersSatisticsData;
