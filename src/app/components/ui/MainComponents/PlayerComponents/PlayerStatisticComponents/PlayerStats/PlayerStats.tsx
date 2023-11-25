import React from "react";
import style from "./playerStats.module.scss";
import PlayerStatsTournament from "../PlayerStatsTournament/PlayerStatsTournament";
import PlayerStatsResults from "../PlayerStatsResults/PlayerStatsResults";
import PlayerStatsRole from "../PlayerStatsRoleComponents/PlayerStatsRole/PlayerStatsRole";
import { IPlayer } from "../../../../../../ts/models/IPlayer";
import usePlayerStats from "../../../../../../hooks/appHooks/playerHooks/usePlayerStats";
import useDelayLoading from "../../../../../../hooks/appHooks/someHooks/useDelayLoading";
import Loader from "../../../../../common/Loader/Loader";
import PlayerStatsDiffOfAverage from "../PlayerStatsDiffOfAverage/PlayerStatsDiffOfAverage";

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

    if (isLoading) return <Loader />;
    return (
        <div className={style.player_stats}>
            {bestResult !== null && roleStatisticsData !== null && (
                <>
                    <div className={style.player_stats__group_item}>
                        <div className={style.player_stats__item_tournament}>
                            <PlayerStatsTournament
                                {...{
                                    tournamentsPlayed,
                                    tournamentsWon,
                                    winrateZero,
                                    mapsWon,
                                    mapsAll
                                }}
                            />
                        </div>

                        <div className={style.player_stats__item_results}>
                            <PlayerStatsResults
                                {...{
                                    bestResult,
                                    winrateByMaps,
                                    averagePlace,
                                    averageProximity
                                }}
                            />
                        </div>
                    </div>

                    <div className={style.player_stats__item_role}>
                        <PlayerStatsRole {...{ roleStatisticsData }} />
                    </div>

                    <div className={style.player_stats__item_diff_of_average}>
                        <PlayerStatsDiffOfAverage
                            {...{
                                averageProximity,
                                winrateByMaps,
                                roleStatisticsData
                            }}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default PlayerStats;
