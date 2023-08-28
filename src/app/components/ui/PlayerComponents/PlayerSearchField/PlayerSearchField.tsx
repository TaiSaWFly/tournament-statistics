import React, { useState, useMemo, useEffect, useCallback } from "react";
import "./playerSearchField.scss";
import style from "./playerSearchField.module.scss";
import { useHistory, useRouteMatch } from "react-router-dom";
import { SelectOption } from "../../../../ts/types/SelectOption";
import SelectField from "../../../common/SelectField/SelectField";
import tansformDataToSelectOptionByKeys from "../../../../utils/appUtils/transformAndCreateData/transformData/tansformDataToSelectOptionByKeys";
import { useActions } from "../../../../hooks/reduxHooks/useActions";
import { useAppSelector } from "../../../../hooks/reduxHooks/reduxHooks";
import usePlayer from "../../../../hooks/appHooks/playerHooks/usePlayer";

const PlayerSearchField: React.FC = () => {
    const history = useHistory();
    const match = useRouteMatch();
    const { params } = useRouteMatch<{ playerId: string | undefined }>();

    const players = useAppSelector((state) => state.playersDb.entities);
    const { setSearchMemoryPlayer, setPlayerData } = useActions();
    const playerOptions = useMemo(
        () => tansformDataToSelectOptionByKeys(players, "_id", "Nickname"),
        []
    );

    const { player } = usePlayer();
    const { playerOption } = useAppSelector(
        (state) => state.memory.entities.searchMemory
    );

    const [search, setSearch] = useState<SelectOption | null>(playerOption);

    useEffect(() => {
        if (!params.playerId && player) {
            setSearch(null);
        } else if (player) {
            const findPlayerOption =
                playerOptions.find(
                    (data) => data.value === String(player._id)
                ) || null;
            setSearchMemoryPlayer(findPlayerOption);
            setSearch(findPlayerOption);
        }
    }, [player, params]);

    useEffect(() => {
        if (!params.playerId && playerOption) {
            setSearch(null);
        } else if (playerOption) {
            const findPlayerOption =
                playerOptions.find(
                    (data) => data.value === playerOption.value
                ) || null;
            setSearch(findPlayerOption);
        }
    }, [playerOption, params]);

    const redirectToPlayer = (playerId: string, stateTitle: string): void => {
        setPlayerData(Number(playerId));
        history.push({
            pathname: `/player/${playerId}`,
            state: {
                from: match.url
            }
        });
    };

    const handleChange = useCallback((target: SelectOption | null): void => {
        setSearch(target);
        setSearchMemoryPlayer(target);
        target && redirectToPlayer(target.value, target.label);
    }, []);

    return (
        <div className={style.search}>
            <SelectField
                className="select_field__player"
                placeholder="Выбери своего покемона..."
                options={playerOptions}
                value={search}
                onChange={handleChange}
                maxMenuHeight={230}
                isSearchable={true}
                noOptionsMessage={"покемон не найден :*("}
            />
        </div>
    );
};

export default PlayerSearchField;
