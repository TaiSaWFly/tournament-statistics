import { ChartDataType } from "../../../../ts/types/ChartTypes/ChartDataType";
import { RoleStatisticsType } from "../../../../ts/types/RoleTypes/RoleStatisticsType";
import { RoleStatsType } from "../../../../ts/types/RoleTypes/RoleStatsType";

type RoleStatsTypeNumber = Omit<RoleStatsType, "lastRate">;

const transformDataForRoleChart = (
    roleStatisticsData: RoleStatisticsType,
    roleStat: keyof RoleStatsTypeNumber
): ChartDataType[] => {
    let data: ChartDataType[] = [];
    const {
        averageWinrate: tankAverageWinrate,
        tournamentsPlayed: tankTournamentsPlayed
    } = roleStatisticsData.tank;
    const {
        averageWinrate: dpsAverageWinrate,
        tournamentsPlayed: dpsTournamentsPlayed
    } = roleStatisticsData.dps;
    const {
        averageWinrate: supportAverageWinrate,
        tournamentsPlayed: supportTournamentsPlayed
    } = roleStatisticsData.support;

    const isNotZeroRoleWinrate =
        tankAverageWinrate === 0 &&
        dpsAverageWinrate === 0 &&
        supportAverageWinrate === 0;

    const isNotZeroRoleTournamentsPlayed =
        tankTournamentsPlayed === 0 &&
        dpsTournamentsPlayed === 0 &&
        supportTournamentsPlayed === 0;

    if (roleStat === "averageWinrate") {
        if (!isNotZeroRoleWinrate) {
            return (data = Object.keys(roleStatisticsData).map((data) => ({
                name: data,
                value: roleStatisticsData[data as keyof RoleStatisticsType][
                    roleStat
                ]
            })));
        }
    }

    if (roleStat === "tournamentsPlayed") {
        if (!isNotZeroRoleTournamentsPlayed) {
            return (data = Object.keys(roleStatisticsData).map((data) => ({
                name: data,
                value: roleStatisticsData[data as keyof RoleStatisticsType][
                    roleStat
                ]
            })));
        }
    }

    return data;
};

export default transformDataForRoleChart;
