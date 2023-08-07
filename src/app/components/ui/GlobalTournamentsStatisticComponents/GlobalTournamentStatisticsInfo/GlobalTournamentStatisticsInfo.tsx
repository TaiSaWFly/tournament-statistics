import React from "react";
import style from "./globalTournamentStatisticsInfo.module.scss";
import { GlobalTournamentStatisticInfoType } from "../../../../ts/types/GlobalTournamentStatisticInfoType";

interface GlobalTournamentStatisticsInfoProps {
    statisticsInfo: GlobalTournamentStatisticInfoType[];
    isGlobalComponent: boolean;
}

const GlobalTournamentStatisticsInfo: React.FC<
    GlobalTournamentStatisticsInfoProps
> = ({ statisticsInfo, isGlobalComponent }) => {
    return (
        <div
            className={
                isGlobalComponent
                    ? style.global_statistics__info
                    : style.statistics__info
            }
        >
            {statisticsInfo.map((info, index) => (
                <div
                    key={index + info.title}
                    className={style.statistics__info_item}
                >
                    <div>{info.content}</div>
                    <div className={style.info_title}>{info.title}</div>
                </div>
            ))}
        </div>
    );
};

export default GlobalTournamentStatisticsInfo;
