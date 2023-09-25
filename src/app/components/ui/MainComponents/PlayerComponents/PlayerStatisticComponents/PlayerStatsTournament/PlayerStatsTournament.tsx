import React from "react";
import style from "./playerStatsTournament.module.scss";

interface PlayerStatsTournamentProps {
    tournamentsPlayed: number;
    tournamentsWon: number;
    winrateZero: number;
    mapsWon: number;
    mapsAll: number;
}

const PlayerStatsTournament: React.FC<PlayerStatsTournamentProps> = ({
    tournamentsPlayed,
    tournamentsWon,
    winrateZero,

    mapsWon,
    mapsAll
}) => {
    return (
        <div className={style.stats_info__tournament}>
            <div className={style.stats_info__item}>
                <div className={style.stats_name}>Сыграно турниров</div>
                <div className={style.stats_value}>{tournamentsPlayed}</div>
            </div>

            <div className={style.stats_info__item}>
                <div className={style.stats_name}>Выиграно турниров</div>
                <div className={style.stats_value}>{tournamentsWon}</div>
            </div>

            <div className={style.stats_info__item}>
                <div className={style.stats_name}>
                    <div className={style.stats_info__wrap}>Отлетел в ноль</div>
                </div>
                <div className={style.stats_value}>{winrateZero}</div>
            </div>

            <div className={style.stats_info__item}>
                <div className={style.stats_name}>Выиграно карт</div>
                <div className={style.stats_value}>
                    {mapsWon} из {mapsAll}
                </div>
            </div>
        </div>
    );
};

export default PlayerStatsTournament;
