import React from "react";
import style from "./playerStatsResults.module.scss";
import { ITournamentDb } from "../../../../../ts/models/ITournamentDb";
import editPercentNumber from "../../../../../utils/appUtils/other/editPercentNumber";

interface PlayerStatsResultsProps {
    bestResult: ITournamentDb;
    averageProximity: number;
    winrateByMaps: number;
    averagePlace: number;
}

const PlayerStatsResults: React.FC<PlayerStatsResultsProps> = ({
    bestResult,
    averageProximity,
    winrateByMaps,
    averagePlace
}) => {
    return (
        <div className={style.stats_result}>
            <div className={style.stats_info__item}>
                <div className={style.stats_name}>Лучший результат</div>
                <div className={style.stats_value__result}>
                    {`${bestResult.Место} место, турнир ${bestResult["Номер турнира"]},\nкоманда ${bestResult.Команда}`}
                </div>
            </div>

            <div className={style.stats_info__item}>
                <div className={style.stats_name}>Средний результат</div>
                <div className={style.stats_value}>{averagePlace} место</div>
            </div>

            <div className={style.stats_info__item}>
                <div className={style.stats_name}>Средняя близость</div>
                <div className={style.stats_value}>
                    {editPercentNumber(averageProximity)}%
                </div>
            </div>

            <div className={style.stats_info__item}>
                <div className={style.stats_name}>Винрейт</div>
                <div className={style.stats_value}>
                    {editPercentNumber(winrateByMaps)}%
                </div>
            </div>
        </div>
    );
};

export default PlayerStatsResults;
