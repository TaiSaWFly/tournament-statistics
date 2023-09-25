import React from "react";
import style from "./teamNewRolePlayerTable.module.scss";
import useSvgIcon from "../../../../../../../hooks/appHooks/someHooks/useSvgIcon";

interface TeamNewRolePlayerTableProps {
    isNew: number;
}

const TeamNewRolePlayerTable: React.FC<TeamNewRolePlayerTableProps> = ({
    isNew
}) => {
    const { Check, NotCheck } = useSvgIcon();
    return (
        <div className={style.new_role_player}>
            <div className={style.new_role__icon}>
                {isNew !== 0 ? (
                    <Check />
                ) : (
                    <div className={style.new_role__icon_not_check}>
                        <NotCheck />
                    </div>
                )}
            </div>
        </div>
    );
};

export default TeamNewRolePlayerTable;
