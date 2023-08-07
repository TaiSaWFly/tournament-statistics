import React from "react";
import style from "./globalTournamentStatistics.module.scss";
import renderPhrase from "../../../../utils/appUtils/renderPhrase";
import { GlobalTournamentStatisticInfoType } from "../../../../ts/types/GlobalTournamentStatisticInfoType";
import GlobalTournamentStatisticsInfo from "../GlobalTournamentStatisticsInfo/GlobalTournamentStatisticsInfo";

interface GlobalTournamentStatisticsProps {
    qtyGlobalTournaments: number;
    qtyGlobalTeams: number;
    qtyGlobalPlayers: number;
    qtyGlobalMatches: number;
    qtyGlobalPlayerChampions: number;
}

const GlobalTournamentStatistics: React.FC<GlobalTournamentStatisticsProps> = ({
    qtyGlobalTournaments,
    qtyGlobalTeams,
    qtyGlobalPlayers,
    qtyGlobalMatches,
    qtyGlobalPlayerChampions
}) => {
    const dataStatisticsInfo: GlobalTournamentStatisticInfoType[] = [
        {
            title: "Проведено",
            content: `${qtyGlobalTournaments} ${renderPhrase(
                qtyGlobalTournaments,
                {
                    nominativeCase: "турнир",
                    genitiveCase: "турнира",
                    instrumentalCase: "турниров"
                }
            )}`
        },
        {
            title: "Набаланшено",
            content: `${qtyGlobalTeams} ${renderPhrase(qtyGlobalTeams, {
                nominativeCase: "команда",
                genitiveCase: "команды",
                instrumentalCase: "команд"
            })}`
        },
        {
            title: "Отбаланшено",
            content: `${qtyGlobalPlayers} ${renderPhrase(qtyGlobalPlayers, {
                nominativeCase: "игрок",
                genitiveCase: "игрока",
                instrumentalCase: "игроков"
            })}`
        },
        {
            title: "Сыграно",
            content: `${qtyGlobalMatches} ${renderPhrase(qtyGlobalMatches, {
                nominativeCase: "матч",
                genitiveCase: "матча",
                instrumentalCase: "матчей"
            })}`
        },
        {
            title: "Выведено",
            content: `${qtyGlobalPlayerChampions} ${renderPhrase(
                qtyGlobalPlayerChampions,
                {
                    nominativeCase: "чемпион",
                    genitiveCase: "чемпиона",
                    instrumentalCase: "чемпионов"
                }
            )}`
        }
    ];

    return (
        <div className={style.global_tour}>
            <h1 className={style.global_tour__title}>Anak tournaments</h1>

            <GlobalTournamentStatisticsInfo
                statisticsInfo={dataStatisticsInfo}
                isGlobalComponent={true}
            />
        </div>
    );
};

export default GlobalTournamentStatistics;
