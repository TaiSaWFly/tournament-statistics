import React, { useMemo } from "react";
import style from "./playerStatsDiffOfAverage.module.scss";
import PlayerStatsDiffOfAverageChart from "../../PlayerCharts/PlayerStatsDiffOfAverageChart/PlayerStatsDiffOfAverageChart";
import returnAveragePlayerStatistics from "../../../../../../utils/appUtils/transformAndCreateData/createData/playerStatisticsData/returnAveragePlayerStatistics";
import { RoleStatisticsType } from "../../../../../../ts/types/RoleTypes/RoleStatisticsType";
import transformDataForRadarPlayerChart from "../../../../../../utils/appUtils/transformAndCreateData/transformData/transformDataForRadarPlayerChart";
import ChartTooltipsColorInfo from "../../../../../common/ChartComponents/ChartTooltipsColorInfo/ChartTooltipsColorInfo";
import { TooltipsColorInfoDataType } from "../../../../../../ts/types/TooltipsColorInfoDataType";

interface PlayerStatsDiffOfAverageProps {
    averageProximity: number;
    winrateByMaps: number;
    roleStatisticsData: RoleStatisticsType;
}

const PlayerStatsDiffOfAverage: React.FC<PlayerStatsDiffOfAverageProps> = ({
    averageProximity,
    winrateByMaps,
    roleStatisticsData
}) => {
    const colorsInfo: TooltipsColorInfoDataType[] = useMemo(
        () => [
            {
                name: "средний",
                hex: "#E50B0B"
            },
            {
                name: "игрок",
                hex: "#FF8901"
            }
        ],
        []
    );

    const averagePlayerStatistics = returnAveragePlayerStatistics({
        averageProximity,
        winrateByMaps,
        roleStatisticsData
    });

    const averagePlayerChartData = transformDataForRadarPlayerChart(
        averagePlayerStatistics
    );

    return (
        <div className={style.player_stats_diff}>
            <div className={style.title}>
                Отклонение oт средний статистики по турнирам
            </div>

            <div className={style.stats_diff__colors}>
                <ChartTooltipsColorInfo {...{ colorsInfo }} />
            </div>

            <PlayerStatsDiffOfAverageChart
                averagePlayerData={averagePlayerChartData}
            />
        </div>
    );
};

export default PlayerStatsDiffOfAverage;
