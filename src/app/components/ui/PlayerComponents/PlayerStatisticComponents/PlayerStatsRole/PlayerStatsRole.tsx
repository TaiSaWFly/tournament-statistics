import React from "react";
import style from "./playerStatsRole.module.scss";
import { RoleStatisticsType } from "../../../../../ts/types/RoleStatisticsType";
import editPercentNumber from "../../../../../utils/appUtils/editPercentNumber";

interface PlayerStatsRoleProps {
    roleStatisticsData: RoleStatisticsType;
}

const PlayerStatsRole: React.FC<PlayerStatsRoleProps> = ({
    roleStatisticsData
}) => {
    return (
        <div className={style.stats_role}>
            <div className={style.stats_name}></div>
            <div className={style.stats_name}>Сыграно турниров</div>
            <div className={style.stats_name}>Средний винтейт</div>
            <div className={style.stats_name}>Последний рейтинг</div>

            <div className={style.stats_name__role}>
                <div className={style.stats_info__wrap}>tank</div>
            </div>
            <div className={style.stats_value}>
                <div className={style.stats_info__wrap}>
                    {roleStatisticsData.tank.tournamentsPlayed}
                </div>
            </div>
            <div className={style.stats_value}>
                <div className={style.stats_info__wrap}>
                    {editPercentNumber(roleStatisticsData.tank.averageWinrate)}%
                </div>
            </div>
            <div className={style.stats_value_rate}>
                <div className={style.stats_info__wrap}>
                    {roleStatisticsData.tank.lastRate}
                </div>
            </div>

            <div className={style.stats_name__role}>
                <div className={style.stats_info__wrap}>dps</div>
            </div>
            <div className={style.stats_value}>
                <div className={style.stats_info__wrap}>
                    {roleStatisticsData.dps.tournamentsPlayed}
                </div>
            </div>
            <div className={style.stats_value}>
                <div className={style.stats_info__wrap}>
                    {editPercentNumber(roleStatisticsData.dps.averageWinrate)}%
                </div>
            </div>
            <div className={style.stats_value_rate}>
                <div className={style.stats_info__wrap}>
                    {roleStatisticsData.dps.lastRate}
                </div>
            </div>

            <div className={style.stats_name__role}>
                <div className={style.stats_info__wrap}>support</div>
            </div>
            <div className={style.stats_value}>
                <div className={style.stats_info__wrap}>
                    {roleStatisticsData.support.tournamentsPlayed}
                </div>
            </div>
            <div className={style.stats_value}>
                <div className={style.stats_info__wrap}>
                    {editPercentNumber(
                        roleStatisticsData.support.averageWinrate
                    )}
                    %
                </div>
            </div>
            <div className={style.stats_value_rate}>
                <div className={style.stats_info__wrap}>
                    {roleStatisticsData.support.lastRate}
                </div>
            </div>
        </div>
    );
};

export default PlayerStatsRole;
