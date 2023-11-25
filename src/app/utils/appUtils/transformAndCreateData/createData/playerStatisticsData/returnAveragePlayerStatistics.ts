import { AveragePlayerStatisticsDataType } from "../../../../../ts/types/PlayerTypes/AveragePlayerStatisticsDataType";
import { RoleStatisticsType } from "../../../../../ts/types/RoleTypes/RoleStatisticsType";

type ReturnAveragePlayerStatisticsArgsType = {
    averageProximity: number;
    winrateByMaps: number;
    roleStatisticsData: RoleStatisticsType;
};

type ReturnAveragePlayerStatisticsType = ({
    averageProximity,
    winrateByMaps,
    roleStatisticsData
}: ReturnAveragePlayerStatisticsArgsType) => AveragePlayerStatisticsDataType;

const returnAveragePlayerStatistics: ReturnAveragePlayerStatisticsType = ({
    averageProximity,
    winrateByMaps,
    roleStatisticsData
}) => {
    return {
        role: {
            tank: {
                name: "Tank WR",
                averageWinrate: roleStatisticsData.tank.averageWinrate
            },
            dps: {
                name: "Dps WR",
                averageWinrate: roleStatisticsData.dps.averageWinrate
            },
            support: {
                name: "Support WR",
                averageWinrate: roleStatisticsData.support.averageWinrate
            }
        },
        winrate: {
            name: "Винрейт",
            winrate: winrateByMaps
        },
        proximity: {
            name: "Близость",
            averageProximity: averageProximity
        }
    };
};

export default returnAveragePlayerStatistics;
