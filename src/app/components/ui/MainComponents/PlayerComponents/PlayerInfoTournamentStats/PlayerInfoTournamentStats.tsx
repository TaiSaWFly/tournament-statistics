import React from "react";
import style from "./playerInfoTournamentStats.module.scss";
import { IPlayer } from "../../../../../ts/models/IPlayer";
import PlayerInfo from "../PlayerInfo/PlayerInfo";
import PlayerStats from "../PlayerStatisticComponents/PlayerStats/PlayerStats";
import PlayerListTournaments from "../PlayerTournamentComponents/PlayerListTournaments/PlayerListTournaments";
import { useAppSelector } from "../../../../../hooks/reduxHooks/reduxHooks";
import useDelayLoading from "../../../../../hooks/appHooks/someHooks/useDelayLoading";
import Loader from "../../../../common/Loader/Loader";

interface PlayerInfoTournamentStatsProps {
    player: IPlayer;
}

const PlayerInfoTournamentStats: React.FC<PlayerInfoTournamentStatsProps> = ({
    player
}) => {
    const { isLoading } = useDelayLoading(676);

    const playerStatisticsData = useAppSelector(
        (state) => state.playerStatisticsData.entities.playerStats.data
    ).filter((data) => data.PlayerID === player.ID);

    if (isLoading) return <Loader />;
    return (
        <div>
            {player && playerStatisticsData.length !== 0 ? (
                <>
                    <div
                        className={style.player_info_tournament_stats__nickname}
                    >
                        {player.Nickname}
                    </div>

                    <div className={style.player_info_tournament_stats__group}>
                        <div
                            className={
                                style.player_info_tournament_stats__group_wrap
                            }
                        >
                            <div
                                className={
                                    style.player_info_tournament_stats__info
                                }
                            >
                                <PlayerInfo {...{ player }} />
                            </div>

                            <div
                                className={
                                    style.player_info_tournament_stats__stats
                                }
                            >
                                <PlayerStats {...{ player }} />
                            </div>
                        </div>
                    </div>

                    <PlayerListTournaments {...{ player }} />
                </>
            ) : (
                <>
                    <div
                        className={style.player_info_tournament_stats__nickname}
                    >
                        {player.Nickname}
                    </div>

                    <div
                        className={
                            style.player_info_tournament_stats__group__no_results
                        }
                    >
                        <div
                            className={style.player_info_tournament_stats__info}
                        >
                            <PlayerInfo {...{ player }} />
                        </div>

                        <div
                            className={
                                style.player_info_tournament_stats__no_results_wrap
                            }
                        >
                            <div
                                className={
                                    style.player_info_tournament_stats__no_results
                                }
                            >
                                <div>не сыграно ни одного турнира</div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default React.memo(PlayerInfoTournamentStats);
