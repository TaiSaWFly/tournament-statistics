import React from "react";
import GlobalTournamentStatisticsInfo from "./GlobalTournamentStatisticsInfo/GlobalTournamentStatisticsInfo";
import { GlobalTournamentStatisticInfoType } from "../../../ts/types/GlobalTournamentStatisticInfoType";
import renderPhrase from "../../../utils/appUtils/renderPhrase";

interface TournamentStatisticInfoProps {
    tournamentTeamsQty: number;
    tournamentPlayersQty: number;
    tournamentMatchesQty: number;
    tournamentMapsQty: number;
    tournamentNewPlayersQty: number;
}

const TournamentStatisticInfo: React.FC<TournamentStatisticInfoProps> = ({
    tournamentTeamsQty,
    tournamentPlayersQty,
    tournamentMatchesQty,
    tournamentMapsQty,
    tournamentNewPlayersQty
}) => {
    const dataStatisticsInfo: GlobalTournamentStatisticInfoType[] = [
        {
            title: "Набаланшено",
            content: `${tournamentTeamsQty} ${renderPhrase(tournamentTeamsQty, {
                nominativeCase: "команда",
                genitiveCase: "команды",
                instrumentalCase: "команд"
            })}`
        },
        {
            title: "Отбаланшено",
            content: `${tournamentPlayersQty} ${renderPhrase(
                tournamentPlayersQty,
                {
                    nominativeCase: "игрок",
                    genitiveCase: "игрока",
                    instrumentalCase: "игроков"
                }
            )}`
        },
        {
            title: "Сыграно",
            content: `${tournamentMatchesQty} ${renderPhrase(
                tournamentMatchesQty,
                {
                    nominativeCase: "матч",
                    genitiveCase: "матча",
                    instrumentalCase: "матчей"
                }
            )}`
        },
        {
            title: "Сыграно",
            content: `${tournamentMapsQty} ${renderPhrase(tournamentMapsQty, {
                nominativeCase: "карта",
                genitiveCase: "карты",
                instrumentalCase: "карт"
            })}`
        },
        {
            title: "Отбаланшено",
            content: `${tournamentNewPlayersQty} ${renderPhrase(
                tournamentNewPlayersQty,
                {
                    nominativeCase: "новичок",
                    genitiveCase: "новичка",
                    instrumentalCase: "новичков"
                }
            )}`
        }
    ];

    return (
        <GlobalTournamentStatisticsInfo
            statisticsInfo={dataStatisticsInfo}
            isGlobalComponent={false}
        />
    );
};

export default TournamentStatisticInfo;
