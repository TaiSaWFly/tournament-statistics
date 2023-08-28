import React from "react";
import style from "./playerStatsRoleColorsInfo.module.scss";

const PlayerStatsRoleColorsInfo: React.FC = () => {
    return (
        <div className={style.role_colors}>
            <div className={style.role_colors__wrap}>
                <div className={style.colors__item_tank}>
                    <span></span>
                    <div className={style.colors__item_role}>Tank</div>
                </div>

                <div className={style.colors__item_support}>
                    <span></span>
                    <div className={style.colors__item_role}>Support</div>
                </div>

                <div className={style.colors__item_dps}>
                    <span></span>
                    <div className={style.colors__item_role}>Dps</div>
                </div>
            </div>
        </div>
    );
};

export default PlayerStatsRoleColorsInfo;
