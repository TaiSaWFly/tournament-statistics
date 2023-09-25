import React from "react";
import style from "./tablePlayerLink.module.scss";
import usePlayer from "../../../../hooks/appHooks/playerHooks/usePlayer";
import { useHistory } from "react-router-dom";
import { SelectOption } from "../../../../ts/types/SelectOption";
import { useActions } from "../../../../hooks/reduxHooks/useActions";
import TablePlayerLinkCurrentPlayerWithСaptain, {
    TablePlayerLinkCurrentPlayerWithСaptainProps
} from "./TablePlayerLinkCurrentPlayerWithСaptain";
import TablePlayerLinkСaptain, {
    TablePlayerLinkСaptainProps
} from "./TablePlayerLinkСaptain";
import { useAppSelector } from "../../../../hooks/reduxHooks/reduxHooks";

interface TablePlayerLinkProps {
    teammateName: string;
    teammateId: number;
}

interface TablePlayerLinkComponentsProps {
    CurrentPlayerWithСaptain: React.FC<TablePlayerLinkCurrentPlayerWithСaptainProps>;
    Сaptain: React.FC<TablePlayerLinkСaptainProps>;
}

const TablePlayerLink: React.FC<TablePlayerLinkProps> &
    TablePlayerLinkComponentsProps = ({ teammateName, teammateId }) => {
    const history = useHistory();
    const { isMobileDevice } = useAppSelector((state) => state.system);
    const { playerLink } = usePlayer(teammateId, teammateName);
    const { setSearchMemoryPlayer, setPlayerData } = useActions();

    const redirectToPlayer = () => {
        const playerOption: SelectOption = {
            value: String(playerLink[0]._id),
            label: teammateName
        };
        setPlayerData(Number(playerOption.value));
        history.push(`/player/${playerOption.value}`);
        setSearchMemoryPlayer(playerOption);
    };

    return (
        <div className={isMobileDevice ? style.link__visible : style.link}>
            {playerLink.length !== 0 ? (
                <a onClick={redirectToPlayer}>{teammateName}</a>
            ) : (
                <span>{teammateName}</span>
            )}
        </div>
    );
};

TablePlayerLink.CurrentPlayerWithСaptain =
    TablePlayerLinkCurrentPlayerWithСaptain;
TablePlayerLink.Сaptain = TablePlayerLinkСaptain;

export default TablePlayerLink;
