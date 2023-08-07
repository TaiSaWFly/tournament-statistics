import React from "react";
import style from "./playerInfoTournamentStats.module.scss";
import { IPlayer } from "../../../../ts/models/IPlayer";
import PlayerInfo from "../PlayerInfo/PlayerInfo";
import PlayerStats from "../PlayerStatisticComponents/PlayerStats/PlayerStats";
import PlayerTournaments from "../PlayerTournamentComponents/PlayerTournaments/PlayerTournaments";
import { useAppSelector } from "../../../../hooks/reduxHooks/reduxHooks";
import Loading from "../../../common/LoadingComponents/Loading/Loading";
import useDelayLoading from "../../../../hooks/appHooks/useDelayLoading";

interface PlayerInfoTournamentStatsProps {
    player: IPlayer;
    playerData: IPlayer[];
}

const PlayerInfoTournamentStats: React.FC<PlayerInfoTournamentStatsProps> = ({
    player,
    playerData
}) => {
    const { isLoading } = useDelayLoading(676);

    const playerStatisticsData = useAppSelector(
        (state) => state.playerStatisticsData.entities
    ).filter((data) => data.PlayerID === player.ID);

    return (
        <div className={style.player_info_stats}>
            {!isLoading ? (
                <>
                    {playerStatisticsData.length !== 0 ? (
                        <>
                            <PlayerInfo
                                nickname={player.Nickname}
                                twitch={player.twitch}
                                playerData={playerData}
                            />

                            <PlayerStats {...{ player }} />
                            <PlayerTournaments {...{ player }} />
                        </>
                    ) : (
                        <div>
                            <PlayerInfo
                                nickname={player.Nickname}
                                twitch={player.twitch}
                                playerData={playerData}
                            />

                            <div
                                className={style.player_info_stats__no_results}
                            >
                                не сыграно ни одного турнира
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <Loading />
            )}
        </div>
    );
};

export default PlayerInfoTournamentStats;
