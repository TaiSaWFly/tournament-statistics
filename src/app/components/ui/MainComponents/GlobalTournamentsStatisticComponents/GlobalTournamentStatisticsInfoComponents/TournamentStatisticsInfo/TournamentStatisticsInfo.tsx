import React from "react";
import style from "./tournamentStatisticsInfo.module.scss";
import { TournamentStatisticInfoType } from "../../../../../../ts/types/TournamentTypes/TournamentStatisticInfoType";
import TournamentStatisticsInfoChart from "../TournamentStatisticsInfoChart";
import TournamentStatisticsInfoDiffBage from "../TournamentStatisticsInfoDiffBage/TournamentStatisticsInfoDiffBage";

interface TournamentStatisticsInfoProps {
    statisticsInfo: TournamentStatisticInfoType[];
}

const TournamentStatisticsInfo: React.FC<TournamentStatisticsInfoProps> = ({
    statisticsInfo
}) => {
    return (
        <div className={style.statistics__info}>
            <div className={style.statistics__info_wrap}>
                {statisticsInfo.map((info, index) => (
                    <div
                        key={index + info.title}
                        className={style.statistics__info_item}
                    >
                        <div className={style.info_stats}>
                            <div className={style.info_title}>{info.title}</div>
                            <div className={style.info_content}>
                                {info.content}
                            </div>
                            <div className={style.info_prefix}>
                                {info.prefix}
                            </div>
                        </div>

                        <div>
                            <TournamentStatisticsInfoDiffBage
                                lastStatsData={info.lastStatsData}
                            />

                            <TournamentStatisticsInfoChart
                                data={info.lastStatsData}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default React.memo(TournamentStatisticsInfo);
