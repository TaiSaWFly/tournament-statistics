import React from "react";
import style from "./playerTournamentItemActions.module.scss";
import Button from "../../../../../common/Button/Button";
import useSvgIcon from "../../../../../../hooks/appHooks/useSvgIcon";

interface PlayerTournamentItemActionsProps {
    isOpenTeamMatches: boolean;
    onOpenTeamMatches: () => void;
}

const PlayerTournamentItemActions: React.FC<
    PlayerTournamentItemActionsProps
> = ({ isOpenTeamMatches, onOpenTeamMatches }) => {
    const { Book } = useSvgIcon();

    return (
        <div className={style.action__action_btn}>
            <Button
                onClick={onOpenTeamMatches}
                className={
                    isOpenTeamMatches ? style.action__action_btn_active : ""
                }
            >
                <div className={style.action__action_icon}>
                    <Book />
                </div>
            </Button>

            <span className={style.action__action_btn__info}>матчи</span>
        </div>
    );
};

export default PlayerTournamentItemActions;
