import React, { useEffect } from "react";
import { Route, Switch, useHistory, useParams } from "react-router-dom";
import PlayerPage from "../pages/PlayerPage/PlayerPage";
import { useAppSelector } from "../../hooks/reduxHooks/reduxHooks";
import { useActions } from "../../hooks/reduxHooks/useActions";
import { useAppStructure } from "../../hooks/appHooks/appContext/useAppStructure";
import usePlayer from "../../hooks/appHooks/playerHooks/usePlayer";
import useDelayLoading from "../../hooks/appHooks/useDelayLoading";
import ComponentContainer from "../common/ComponentContainer/ComponentContainer";
import {
    NOTFOUND_ROUTE,
    PLAYER_ID_ROUTE,
    PLAYER_ROUTE
} from "../../data/routes";

const PlayerPageLayout: React.FC = () => {
    const history = useHistory<any>();
    const { playerId } = useParams<{ playerId: string | undefined }>();

    const { playerOption: memoryOption } = useAppSelector(
        (state) => state.memory.entities.searchMemory
    );
    const { player, isSettingPlayer } = usePlayer();
    const { setPlayerData } = useActions();

    const { isLoading } = useDelayLoading(100);
    const { appStructureRef } = useAppStructure();

    useEffect(() => {
        if (playerId) {
            setPlayerData(Number(playerId));
        }

        if (memoryOption && !playerId) {
            setPlayerData(Number(memoryOption.value));
            history.push({
                pathname: `/player/${memoryOption.value}`
            });
        }
    }, []);

    useEffect(() => {
        let timeout: any;

        if (appStructureRef) {
            timeout = setTimeout(() => {
                appStructureRef.current?.scrollTo(0, 0);
            }, 100);
        }

        if (playerId) {
            setPlayerData(Number(playerId));
        }

        return () => clearTimeout(timeout);
    }, [playerId]);

    useEffect(() => {
        if (!isSettingPlayer && playerId) {
            !player && history.push(NOTFOUND_ROUTE);
        }
    }, [isSettingPlayer, playerId]);

    return (
        <section>
            <ComponentContainer>
                {!isLoading && (
                    <Switch>
                        <Route
                            exact
                            path={PLAYER_ROUTE}
                            component={PlayerPage.NotSearch}
                        />

                        <Route path={PLAYER_ID_ROUTE} component={PlayerPage} />
                    </Switch>
                )}
            </ComponentContainer>
        </section>
    );
};

export default PlayerPageLayout;
