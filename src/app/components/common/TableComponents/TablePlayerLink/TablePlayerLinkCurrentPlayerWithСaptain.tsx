import React from "react";
import style from "./tablePlayerLink.module.scss";
import { useHistory } from "react-router-dom";
import usePlayer from "../../../../hooks/appHooks/playerHooks/usePlayer";
import { useActions } from "../../../../hooks/reduxHooks/useActions";
import useSvgIcon from "../../../../hooks/appHooks/someHooks/useSvgIcon";
import { SelectOption } from "../../../../ts/types/SelectOption";
import { useAppSelector } from "../../../../hooks/reduxHooks/reduxHooks";

export interface TablePlayerLinkCurrentPlayerWithСaptainProps {
    teammateName: string;
    teammateId: number;
    teamName: string;
}

const TablePlayerLinkCurrentPlayerWithСaptain: React.FC<
    TablePlayerLinkCurrentPlayerWithСaptainProps
> = ({ teammateName, teammateId, teamName }) => {
    const history = useHistory();
    const { isMobileDevice } = useAppSelector((state) => state.system);
    const { player, currentPlayerData, playerLink } = usePlayer(
        teammateId,
        teammateName
    );
    const { setSearchMemoryPlayer, setPlayerData } = useActions();
    const { Crown } = useSvgIcon();

    const redirectToPlayer = () => {
        const playerOption: SelectOption = {
            value: String(playerLink[0]._id),
            label: teammateName
        };
        setPlayerData(Number(playerOption.value));
        history.push(`/player/${playerOption.value}`);
        setSearchMemoryPlayer(playerOption);
    };

    const isСaptain = currentPlayerData.some(
        (data) => data.Nickname.toLowerCase() === teamName.toLowerCase()
    );
    const isCurrentPlayer =
        playerLink.length !== 0 && player
            ? player.ID === playerLink[0].ID
            : false;

    return (
        <div className={isMobileDevice ? style.link__visible : style.link}>
            {playerLink.length !== 0 ? (
                <>
                    {isCurrentPlayer ? (
                        <div className={style.link__cap_link}>
                            {isСaptain ? (
                                <>
                                    <span className={style.link__current}>
                                        {teammateName}
                                    </span>

                                    <div className={style.link__cap_icon}>
                                        <Crown />
                                    </div>
                                </>
                            ) : (
                                <span className={style.link__current}>
                                    {teammateName}
                                </span>
                            )}
                        </div>
                    ) : (
                        <div className={style.link__cap_link}>
                            {isСaptain ? (
                                <>
                                    <a onClick={redirectToPlayer}>
                                        {teammateName}
                                    </a>

                                    <div className={style.link__cap_icon}>
                                        <Crown />
                                    </div>
                                </>
                            ) : (
                                <a onClick={redirectToPlayer}>{teammateName}</a>
                            )}
                        </div>
                    )}
                </>
            ) : (
                <span>{teammateName}</span>
            )}
        </div>
    );
};

export default TablePlayerLinkCurrentPlayerWithСaptain;
