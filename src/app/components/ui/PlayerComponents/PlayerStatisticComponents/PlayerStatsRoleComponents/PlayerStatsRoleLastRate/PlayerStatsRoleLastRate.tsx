import React from "react";
import style from "./playerStatsRoleLastRate.module.scss";

interface PlayerStatsRoleLastRateProps {
    tankLastRate: string;
    dpsLastRate: string;
    supportLastRate: string;
}

const PlayerStatsRoleLastRate: React.FC<PlayerStatsRoleLastRateProps> = ({
    tankLastRate,
    dpsLastRate,
    supportLastRate
}) => {
    return (
        <div>
            <div className={style.role_lastrate__title}>Последний рейтинг</div>

            <div className={style.role_lastrate__wrap}>
                {tankLastRate && (
                    <div className={style.role_lastrate_role__wrap}>
                        <div className={style.role_lastrate__tank}>
                            <span className={style.role_lastrate__role_title}>
                                tank
                            </span>
                            <span className={style.role_lastrate__rate}>
                                {tankLastRate}
                            </span>
                        </div>
                    </div>
                )}

                {supportLastRate && (
                    <div className={style.role_lastrate_role__wrap}>
                        <div className={style.role_lastrate__support}>
                            <span className={style.role_lastrate__role_title}>
                                support
                            </span>
                            <span className={style.role_lastrate__rate}>
                                {supportLastRate}
                            </span>
                        </div>
                    </div>
                )}

                {dpsLastRate && (
                    <div className={style.role_lastrate_role__wrap}>
                        <div className={style.role_lastrate__dps}>
                            <span className={style.role_lastrate__role_title}>
                                dps
                            </span>
                            <span className={style.role_lastrate__rate}>
                                {dpsLastRate}
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PlayerStatsRoleLastRate;
