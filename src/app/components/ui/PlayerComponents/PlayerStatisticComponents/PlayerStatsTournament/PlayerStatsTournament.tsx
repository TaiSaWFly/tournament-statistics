import React from "react";
import style from "./playerStatsTournament.module.scss";
import editPercentNumber from "../../../../../utils/appUtils/editPercentNumber";

interface PlayerStatsTournamentProps {
    tournamentsPlayed: number;
    tournamentsWon: number;
    winrateZero: number;
    winrateByMaps: number;
}

const PlayerStatsTournament: React.FC<PlayerStatsTournamentProps> = ({
    tournamentsPlayed,
    tournamentsWon,
    winrateZero,
    winrateByMaps
}) => {
    return (
        <div className={style.stats_info__tournament}>
            <div className={style.stats_name}>
                <div className={style.stats_info__wrap}>Сыграно турниров</div>
            </div>
            <div className={style.stats_value}>
                <div className={style.stats_info__wrap}>
                    {tournamentsPlayed}
                </div>
            </div>

            <div className={style.stats_name}>
                <div className={style.stats_info__wrap}>Выиграно турниров</div>
            </div>
            <div className={style.stats_value}>
                <div className={style.stats_info__wrap}>{tournamentsWon}</div>
            </div>

            <div className={style.stats_name}>
                <div className={style.stats_info__wrap}>Отлетел в ноль</div>
            </div>
            <div className={style.stats_value}>
                <div className={style.stats_info__wrap}>{winrateZero}</div>
            </div>

            <div className={style.stats_name}>
                <div className={style.stats_info__wrap}>Винрейт</div>
            </div>
            <div className={style.stats_value}>
                <div className={style.stats_info__wrap}>
                    {editPercentNumber(winrateByMaps)}%
                </div>
            </div>
        </div>
    );
};

export default PlayerStatsTournament;
