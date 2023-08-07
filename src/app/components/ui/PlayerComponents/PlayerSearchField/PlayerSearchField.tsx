import React, { useState, useMemo, useEffect, useCallback } from "react";
import style from "./playerSearchField.module.scss";
import "./searchSelectField.scss";
import ComponentContainer from "../../../common/ComponentContainer/ComponentContainer";
import { useHistory } from "react-router-dom";
import { SelectOption } from "../../../../ts/types/SelectOption";
import SelectField from "../../../common/SelectField/SelectField";
import tansformDataToSelectOptionByKeys from "../../../../utils/appUtils/tansformDataToSelectOptionByKeys";
import { useActions } from "../../../../hooks/reduxHooks/useActions";
import { useAppSelector } from "../../../../hooks/reduxHooks/reduxHooks";
import usePlayer from "../../../../hooks/appHooks/playerHooks/usePlayer";

const PlayerSearchField: React.FC = () => {
    const history = useHistory();
    const players = useAppSelector((state) => state.playersDb.entities);
    const { setSearchMemoryPlayer } = useActions();
    const playerOptions = useMemo(
        () => tansformDataToSelectOptionByKeys(players, "_id", "Nickname"),
        []
    );

    const { player } = usePlayer();
    const { playerOption } = useAppSelector(
        (state) => state.searchMemory.entities
    );

    const [search, setSearch] = useState<SelectOption | null>(playerOption);

    const handleChange = useCallback((target: SelectOption | null): void => {
        setSearch(target);
        setSearchMemoryPlayer(target);
        target !== null && history.push(`/player/${target.value}`);
    }, []);

    useEffect(() => {
        if (player && playerOption === null) {
            const findPlayerOption =
                playerOptions.find(
                    (data) => data.value === String(player._id)
                ) || null;

            handleChange(findPlayerOption);
        }
    }, [player]);

    useEffect(() => {
        const findPlayerOption =
            playerOptions.find((data) => data.value === playerOption?.value) ||
            null;
        handleChange(findPlayerOption);
    }, [playerOption]);

    return (
        <ComponentContainer>
            <div className={style.search}>
                <div className={style.search_wrapper}>
                    <SelectField
                        name="search"
                        placeholder="Выбери своего покемона..."
                        options={playerOptions}
                        value={search}
                        onChange={handleChange}
                        className="search-select"
                        maxMenuHeight={230}
                        isSearchable={true}
                        noOptionsMessage={"покемон не найден :*("}
                    />
                </div>
            </div>
        </ComponentContainer>
    );
};

export default PlayerSearchField;
