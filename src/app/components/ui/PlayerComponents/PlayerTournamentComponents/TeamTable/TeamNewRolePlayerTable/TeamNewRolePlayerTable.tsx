import React from "react";
import style from "./teamNewRolePlayerTable.module.scss";
import useSvgIcon from "../../../../../../hooks/appHooks/useSvgIcon";

interface TeamNewRolePlayerTableProps {
    isNew: number;
}

const TeamNewRolePlayerTable: React.FC<TeamNewRolePlayerTableProps> = ({
    isNew
}) => {
    const { Check, NotCheck } = useSvgIcon();
    return (
        <div className={style.new_role_player}>
            {isNew !== 0 ? (
                <Check className={style.icon__check} />
            ) : (
                <NotCheck className={style.icon__not_check} />
            )}
        </div>
    );
};

export default TeamNewRolePlayerTable;
