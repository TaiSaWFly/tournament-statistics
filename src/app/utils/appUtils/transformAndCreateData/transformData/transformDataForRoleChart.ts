import { ChartDataType } from "../../../../ts/types/ChartTypes/ChartDataType";
import { RoleStatisticsType } from "../../../../ts/types/RoleTypes/RoleStatisticsType";
import { RoleStatsType } from "../../../../ts/types/RoleTypes/RoleStatsType";

type RoleStatsTypeNumber = Omit<RoleStatsType, "lastRate">;

const transformDataForRoleChart = (
    roleStatisticsData: RoleStatisticsType,
    roleStat: keyof RoleStatsTypeNumber
): ChartDataType[] => {
    const data: ChartDataType[] = Object.keys(roleStatisticsData).map(
        (data) => ({
            name: data,
            value: roleStatisticsData[data as keyof RoleStatisticsType][
                roleStat
            ]
        })
    );

    return data;
};

export default transformDataForRoleChart;
