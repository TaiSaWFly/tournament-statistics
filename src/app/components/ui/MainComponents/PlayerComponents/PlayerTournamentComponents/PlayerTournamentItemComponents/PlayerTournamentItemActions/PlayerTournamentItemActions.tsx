import React from "react";
import style from "./playerTournamentItemActions.module.scss";
import Button from "../../../../../../common/Button/Button";
import useSvgIcon from "../../../../../../../hooks/appHooks/someHooks/useSvgIcon";
import useViewInfo from "../../../../../../../hooks/appHooks/someHooks/useViewInfo";

interface PlayerTournamentItemActionsProps {
    isOpenTeamMatches: boolean;
    onOpenTeamMatches: () => void;
}

const PlayerTournamentItemActions: React.FC<
    PlayerTournamentItemActionsProps
> = ({ isOpenTeamMatches, onOpenTeamMatches }) => {
    const { isMobileDevice, isViewInfo, setIsViewInfo } = useViewInfo();
    const { Book } = useSvgIcon();

    return (
        <div className={style.action__action_btn}>
            <Button
                onClick={onOpenTeamMatches}
                onMouseEnter={() => setIsViewInfo(true)}
                onMouseLeave={() => setIsViewInfo(false)}
                className={
                    isOpenTeamMatches ? style.action__action_btn_active : ""
                }
            >
                <div className={style.action__action_icon}>
                    <Book />
                </div>
            </Button>

            {!isMobileDevice && isViewInfo && (
                <span className={style.action__action_btn__info}>матчи</span>
            )}
        </div>
    );
};

export default PlayerTournamentItemActions;
