import React from "react";
import style from "./playerStats.module.scss";
import PlayerStatsTournament from "../PlayerStatsTournament/PlayerStatsTournament";
import PlayerStatsResults from "../PlayerStatsResults/PlayerStatsResults";
import PlayerStatsRole from "../PlayerStatsRole/PlayerStatsRole";
import { IPlayer } from "../../../../../ts/models/IPlayer";
import usePlayerStats from "../../../../../hooks/appHooks/playerHooks/usePlayerStats";
import Loading from "../../../../common/LoadingComponents/Loading/Loading";
import useDelayLoading from "../../../../../hooks/appHooks/useDelayLoading";

interface PlayerStatsProps {
    player: IPlayer;
}

const PlayerStats: React.FC<PlayerStatsProps> = ({ player }) => {
    const {
        tournamentsPlayed,
        tournamentsWon,
        winrateZero,
        winrateByMaps,
        bestResult,
        averageProximity,
        mapsWon,
        mapsAll,
        averagePlace,
        roleStatisticsData
    } = usePlayerStats(player);

    const { isLoading } = useDelayLoading(676);

    return (
        <div className={style.player_stats}>
            {!isLoading ? (
                <>
                    {bestResult !== null && roleStatisticsData !== null && (
                        <>
                            <div className={style.player_stats__wrap}>
                                <PlayerStatsTournament
                                    {...{
                                        tournamentsPlayed,
                                        tournamentsWon,
                                        winrateZero,
                                        winrateByMaps
                                    }}
                                />
                            </div>

                            <div className={style.player_stats__wrap}>
                                <PlayerStatsResults
                                    {...{
                                        bestResult,
                                        averageProximity,
                                        mapsWon,
                                        mapsAll,
                                        averagePlace
                                    }}
                                />
                            </div>

                            <div className={style.player_stats__wrap}>
                                <PlayerStatsRole {...{ roleStatisticsData }} />
                            </div>
                        </>
                    )}
                </>
            ) : (
                <Loading />
            )}
        </div>
    );
};

export default PlayerStats;
