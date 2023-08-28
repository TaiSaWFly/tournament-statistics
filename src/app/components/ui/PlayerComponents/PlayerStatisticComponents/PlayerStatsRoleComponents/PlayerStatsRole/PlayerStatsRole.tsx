import React from "react";
import style from "./playerStatsRole.module.scss";
import { RoleStatisticsType } from "../../../../../../ts/types/RoleTypes/RoleStatisticsType";
import PlayerStatsRoleChart from "../PlayerStatsRoleChart/PlayerStatsRoleChart";
import transformDataForRoleChart from "../../../../../../utils/appUtils/transformAndCreateData/transformData/transformDataForRoleChart";
import PlayerStatsRoleColorsInfo from "../PlayerStatsRoleColorsInfo/PlayerStatsRoleColorsInfo";
import PlayerStatsRoleLastRate from "../PlayerStatsRoleLastRate/PlayerStatsRoleLastRate";

interface PlayerStatsRoleProps {
    roleStatisticsData: RoleStatisticsType;
}

const PlayerStatsRole: React.FC<PlayerStatsRoleProps> = ({
    roleStatisticsData
}) => {
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
                    <PlayerStatsRoleColorsInfo />
                </div>

                <div className={style.stats__wrap}>
                    <div className={style.stats_role_chart__wrap}>
                        <PlayerStatsRoleChart
                            title="Сыграно турниров"
                            label="games"
                            data={tournamentsPlayed}
                        />

                        <PlayerStatsRoleChart
                            title="Средний винрейт"
                            label="percent"
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
