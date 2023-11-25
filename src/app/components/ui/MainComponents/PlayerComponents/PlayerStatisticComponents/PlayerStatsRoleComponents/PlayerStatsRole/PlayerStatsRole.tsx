import React, { useMemo } from "react";
import style from "./playerStatsRole.module.scss";
import { RoleStatisticsType } from "../../../../../../../ts/types/RoleTypes/RoleStatisticsType";
import PlayerStatsRoleChart from "../../../PlayerCharts/PlayerStatsRoleChart/PlayerStatsRoleChart";
import transformDataForRoleChart from "../../../../../../../utils/appUtils/transformAndCreateData/transformData/transformDataForRoleChart";
import PlayerStatsRoleLastRate from "../PlayerStatsRoleLastRate/PlayerStatsRoleLastRate";
import { TooltipsColorInfoDataType } from "../../../../../../../ts/types/TooltipsColorInfoDataType";
import ChartTooltipsColorInfo from "../../../../../../common/ChartComponents/ChartTooltipsColorInfo/ChartTooltipsColorInfo";
import {
    dpsColor,
    supportColor,
    tankColor
} from "../../../../../../../data/AppData/colors";

interface PlayerStatsRoleProps {
    roleStatisticsData: RoleStatisticsType;
}

const PlayerStatsRole: React.FC<PlayerStatsRoleProps> = ({
    roleStatisticsData
}) => {
    const colorsInfo: TooltipsColorInfoDataType[] = useMemo(
        () => [
            {
                name: "tank",
                hex: tankColor
            },
            {
                name: "support",
                hex: supportColor
            },
            {
                name: "dps",
                hex: dpsColor
            }
        ],
        []
    );

    const tournamentsPlayed = transformDataForRoleChart(
        roleStatisticsData,
        "tournamentsPlayed"
    );
    const averageWinrate = transformDataForRoleChart(
        roleStatisticsData,
        "averageWinrate"
    );

    return (
        <div className={style.stats_role}>
            <div className={style.stats_role__wrap}>
                <div className={style.stats_role__title}>
                    Статистика по ролям
                </div>

                <div className={style.stats_role__colors}>
                    <ChartTooltipsColorInfo {...{ colorsInfo }} />
                </div>

                <div className={style.stats__wrap}>
                    <div className={style.stats_role_chart__wrap}>
                        <PlayerStatsRoleChart
                            title="Сыграно турниров"
                            declareLabel="games"
                            data={tournamentsPlayed}
                        />

                        <PlayerStatsRoleChart
                            title="Средний винрейт"
                            declareLabel="percent"
                            data={averageWinrate}
                        />
                    </div>

                    <PlayerStatsRoleLastRate
                        tankLastRate={roleStatisticsData.tank.lastRate}
                        dpsLastRate={roleStatisticsData.dps.lastRate}
                        supportLastRate={roleStatisticsData.support.lastRate}
                    />
                </div>
            </div>
        </div>
    );
};

export default PlayerStatsRole;
