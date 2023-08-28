import React from "react";
import style from "./tournamentStatisticsInfoDifferenceBage.module.scss";
import countDifferenceStats from "../../../../../utils/appUtils/countData/countTournamentStatistic/countDifferenceStats";
import { ChartDataType } from "../../../../../ts/types/ChartTypes/ChartDataType";

interface TournamentStatisticsInfoDifferenceBageProps {
    lastStatsData: ChartDataType[];
}

const TournamentStatisticsInfoDifferenceBage: React.FC<
    TournamentStatisticsInfoDifferenceBageProps
> = ({ lastStatsData }) => {
    const { difference, isPositive, isZero } =
        countDifferenceStats(lastStatsData);

    return (
        <div className={style.bage}>
            {!isPositive && !isZero && difference === 0 ? (
                <span className={style.bage__error}>Нет данных</span>
            ) : !isPositive && isZero ? (
                <span className={style.bage__zero}>
                    {difference} &#171;&#187;
                </span>
            ) : isPositive ? (
                <span className={style.bage__positive}>
                    &#43; {difference} &#187;
                </span>
            ) : (
                <span className={style.bage__not_positive}>
                    &#8722; {Math.abs(difference)} &#171;
                </span>
            )}
        </div>
    );
};

export default TournamentStatisticsInfoDifferenceBage;
