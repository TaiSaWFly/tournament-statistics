import React, { useEffect } from "react";
import style from "./playerPage.module.scss";
import { useHistory, useParams } from "react-router-dom";
import { useActions } from "../../../hooks/reduxHooks/useActions";
import usePlayer from "../../../hooks/appHooks/playerHooks/usePlayer";
import useSvgIcon from "../../../hooks/appHooks/useSvgIcon";
import PlayerSearchField from "../../ui/PlayerComponents/PlayerSearchField/PlayerSearchField";
import PlayerInfoTournamentStats from "../../ui/PlayerComponents/PlayerInfoTournamentStats/PlayerInfoTournamentStats";
import { useAppSelector } from "../../../hooks/reduxHooks/reduxHooks";

const PlayerPage: React.FC = () => {
    const { playerId } = useParams<{ playerId: string | undefined }>();
    const history = useHistory();

    const { ArrowLeft, ArrowRight } = useSvgIcon();
    const { setPlayerData } = useActions();
    const { player, playerData } = usePlayer();
    const { playerOption } = useAppSelector(
        (state) => state.searchMemory.entities
    );

    useEffect(() => {
        playerId && setPlayerData(Number(playerId));
        window.scrollTo(0, 0);

        playerOption !== null &&
            !playerId &&
            history.push(`/player/${playerOption.value}`);
        playerId && !player && !playerOption && history.push(`/404`);
    }, [playerId]);

    return (
        <div className={style.player_page}>
            <PlayerSearchField />

            {playerOption !== null && !playerId ? null : playerOption ===
                  null && playerId ? (
                <>
                    {playerData.length !== 0 && player && (
                        <PlayerInfoTournamentStats
                            {...{ player, playerData }}
                        />
                    )}
                </>
            ) : playerOption !== null && playerId ? (
                <>
                    {playerData.length !== 0 && player && (
                        <PlayerInfoTournamentStats
                            {...{ player, playerData }}
                        />
                    )}
                </>
            ) : (
                <div className={style.player_page__not_search}>
                    <ArrowRight />
                    <span>здесь будет статистика покемона</span>
                    <ArrowLeft />
                </div>
            )}
        </div>
    );
};

export default PlayerPage;
