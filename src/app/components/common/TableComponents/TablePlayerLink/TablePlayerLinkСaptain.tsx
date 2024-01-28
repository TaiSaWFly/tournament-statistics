import React from "react";
import style from "./tablePlayerLink.module.scss";
import { Link } from "react-router-dom";
import usePlayer from "../../../../hooks/appHooks/playerHooks/usePlayer";
import { useActions } from "../../../../hooks/reduxHooks/useActions";
import useSvgIcon from "../../../../hooks/appHooks/someHooks/useSvgIcon";
import { SelectOption } from "../../../../ts/types/SelectOption";
import { useAppSelector } from "../../../../hooks/reduxHooks/reduxHooks";

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
    const { isMobileDevice } = useAppSelector((state) => state.system);
    const { playerLink, currentPlayerData } = usePlayer(
        teammateId,
        teammateName
    );
    const { setSearchMemoryPlayer } = useActions();
    const { Crown } = useSvgIcon();

    const playerOption: SelectOption = {
        value: String(playerLink[0]._id),
        label: teammateName
    };

    const isСaptain = currentPlayerData.some(
        (data) => data.Nickname.toLowerCase() === teamName.toLowerCase()
    );

    return (
        <div className={isMobileDevice ? style.link__visible : style.link}>
            {playerLink.length !== 0 ? (
                <>
                    {isСaptain ? (
                        <div className={style.link__cap_link__wrap}>
                            <div className={style.link__cap_link}>
                                <Link
                                    to={`/player/${playerOption.value}`}
                                    onClick={() =>
                                        setSearchMemoryPlayer(playerOption)
                                    }
                                >
                                    {teammateName}
                                </Link>

                                <div className={style.link__cap_icon}>
                                    <Crown />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Link
                            to={`/player/${playerOption.value}`}
                            onClick={() => setSearchMemoryPlayer(playerOption)}
                        >
                            {teammateName}
                        </Link>
                    )}
                </>
            ) : (
                <span>{teammateName}</span>
            )}
        </div>
    );
};

export default TablePlayerLinkСaptain;
