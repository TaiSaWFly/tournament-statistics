import React from "react";
import style from "./playerPage.module.scss";
import { Link } from "react-router-dom";
import usePlayer from "../../../hooks/appHooks/playerHooks/usePlayer";
import ArrowsIndicator from "../../common/ArrowsIndicator/ArrowsIndicator";
import { useAppSelector } from "../../../hooks/reduxHooks/reduxHooks";
import PlayerSearchField from "../../ui/MainComponents/PlayerComponents/PlayerSearchField/PlayerSearchField";
import PlayerInfoTournamentStats from "../../ui/MainComponents/PlayerComponents/PlayerInfoTournamentStats/PlayerInfoTournamentStats";

interface PlayerPageComponentsProps {
    NotSearch: React.FC;
}

const PlayerPage: React.FC & PlayerPageComponentsProps = () => {
    const { player } = usePlayer();

    return (
        <>
            <PlayerSearchField />
            {player && <PlayerInfoTournamentStats {...{ player }} />}
        </>
    );
};

const PlayerPageNotSearch: React.FC = () => {
    const { isMobileDevice } = useAppSelector((state) => state.system);
    const { playerOption: memoryOption } = useAppSelector(
        (state) => state.memory.entities.searchMemory
    );

    return (
        <>
            <PlayerSearchField />

            <div className={style.player_page__not_search}>
                <div className={style.not_search__indicator}>
                    <ArrowsIndicator />
                </div>

                <div className={style.not_search__title}>
                    <span>здесь будет статистика</span>
                </div>

                {memoryOption && (
                    <>
                        <div className={style.not_search__indicator}>
                            <ArrowsIndicator />
                        </div>

                        <div
                            className={
                                isMobileDevice
                                    ? style.not_search__info_redirect__visible
                                    : style.not_search__info_redirect
                            }
                        >
                            <span>Перейти к</span>{" "}
                            <Link to={`/player/${memoryOption.value}`}>
                                {memoryOption.label}
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

PlayerPage.NotSearch = PlayerPageNotSearch;
export default PlayerPage;
