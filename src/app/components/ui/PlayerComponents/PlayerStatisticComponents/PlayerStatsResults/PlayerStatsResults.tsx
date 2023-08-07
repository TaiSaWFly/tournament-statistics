import React from "react";
import style from "./playerStatsResults.module.scss";
import { ITournamentDb } from "../../../../../ts/models/ITournamentDb";
import editPercentNumber from "../../../../../utils/appUtils/editPercentNumber";

interface PlayerStatsResultsProps {
    bestResult: ITournamentDb;
    averageProximity: number;
    mapsWon: number;
    mapsAll: number;
    averagePlace: number;
}

const PlayerStatsResults: React.FC<PlayerStatsResultsProps> = ({
    bestResult,
    averageProximity,
    mapsWon,
    mapsAll,
    averagePlace
}) => {
    return (
        <div className={style.stats_result}>
            <div className={style.stats_name}>
                <div className={style.stats_info__wrap}>Лучший результат</div>
            </div>
            <div className={style.stats_value__result}>
                <div
                    className={style.stats_info__wrap}
                >{`${bestResult.Место} место,\nтурнир ${bestResult["Номер турнира"]},\nкоманда ${bestResult.Команда}`}</div>
            </div>

            <div className={style.stats_name}>
                <div className={style.stats_info__wrap}>Средняя близость</div>
            </div>
            <div className={style.stats_value}>
                <div className={style.stats_info__wrap}>
                    {editPercentNumber(averageProximity)}%
                </div>
            </div>

            <div className={style.stats_name}>
                <div className={style.stats_info__wrap}>Выиграно карт</div>
            </div>
            <div className={style.stats_value}>
                <div className={style.stats_info__wrap}>
                    {mapsWon} из {mapsAll}
                </div>
            </div>

            <div className={style.stats_name}>
                <div className={style.stats_info__wrap}>Средний результат</div>
            </div>
            <div className={style.stats_value}>
                <div className={style.stats_info__wrap}>
                    {averagePlace} место
                </div>
            </div>
        </div>
    );
};

export default PlayerStatsResults;
