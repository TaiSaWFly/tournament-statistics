import React from "react";
import style from "./tablePlayerLink.module.scss";
import { useHistory } from "react-router-dom";
import usePlayer from "../../../../hooks/appHooks/playerHooks/usePlayer";
import { useActions } from "../../../../hooks/reduxHooks/useActions";
import useSvgIcon from "../../../../hooks/appHooks/useSvgIcon";
import { SelectOption } from "../../../../ts/types/SelectOption";

export interface TablePlayerLinkСaptainProps {
    teammateName: string;
    teammateId: number;
    teamName: string;
}

const TablePlayerLinkСaptain: React.FC<TablePlayerLinkСaptainProps> = ({
    teammateName,
    teammateId,
    teamName
}) => {
    const history = useHistory();
    const { playerLink, currentPlayerData } = usePlayer(
        teammateId,
        teammateName
    );
    const { setSearchMemoryPlayer } = useActions();
    const { Crown } = useSvgIcon();

    const redirectToPlayer = () => {
        const playerOption: SelectOption = {
            value: String(playerLink[0]._id),
            label: teammateName
        };
        history.push(`/player/${playerOption.value}`);
        setSearchMemoryPlayer(playerOption);
    };

    const isСaptain = currentPlayerData.some(
        (data) => data.Nickname.toLowerCase() === teamName.toLowerCase()
    );

    return (
        <div className={style.link}>
            {playerLink.length !== 0 ? (
                <>
                    {isСaptain ? (
                        <div className={style.link__cap_link__wrap}>
                            <div className={style.link__cap_link}>
                                <a onClick={redirectToPlayer}>{teammateName}</a>

                                <div className={style.link__cap_icon}>
                                    <Crown />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <a onClick={redirectToPlayer}>{teammateName}</a>
                    )}
                </>
            ) : (
                <span>{teammateName}</span>
            )}
        </div>
    );
};

export default TablePlayerLinkСaptain;
