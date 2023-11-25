import { ChartDataType } from "../../../../ts/types/ChartTypes/ChartDataType";
import {
    AveragePlayerStatisticsDataType,
    AveragePlayerStatisticsRoleDataType
} from "../../../../ts/types/PlayerTypes/AveragePlayerStatisticsDataType";

const transformDataForRadarPlayerChart = (
    averagePlayerStatistics: AveragePlayerStatisticsDataType
): ChartDataType[] => {
    const roleAverageData: AveragePlayerStatisticsRoleDataType = {
        ...averagePlayerStatistics.role
    };
    const chartAverageData: ChartDataType[] = [
        {
            name: averagePlayerStatistics.winrate.name,
            value: averagePlayerStatistics.winrate.winrate
        },
        {
            name: averagePlayerStatistics.proximity.name,
            value: averagePlayerStatistics.proximity.averageProximity
        }
    ];

    const chartRoleData: ChartDataType[] = Object.keys(roleAverageData).map(
        (data) => ({
            name: roleAverageData[
                data as keyof AveragePlayerStatisticsRoleDataType
            ].name,
            value: roleAverageData[
                data as keyof AveragePlayerStatisticsRoleDataType
            ].averageWinrate
        })
    );

    return [...chartRoleData, ...chartAverageData];
};

export default transformDataForRadarPlayerChart;
