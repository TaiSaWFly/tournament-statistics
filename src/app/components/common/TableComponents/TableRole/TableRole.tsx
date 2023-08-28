import React from "react";
import style from "./tableRole.module.scss";
import useSvgIcon from "../../../../hooks/appHooks/useSvgIcon";
import { PlayerRoles } from "../../../../ts/types/PlayerTypes/PlayerRoles";

interface TableRoleProps {
    role: PlayerRoles;
}

const TableRole: React.FC<TableRoleProps> = ({ role }) => {
    const { Tank, Dps, Support, Flex } = useSvgIcon();

    const returnRole = () => {
        let roleSvg = <></>;

        if (role === "tank") {
            roleSvg = (
                <div className={style.table_role__icon}>
                    <Tank />
                </div>
            );
        }

        if (role === "dps") {
            roleSvg = (
                <div className={style.table_role__icon}>
                    <Dps />
                </div>
            );
        }

        if (role === "support") {
            roleSvg = (
                <div className={style.table_role__icon}>
                    <Support />
                </div>
            );
        }

        if (role === "Flex") {
            roleSvg = (
                <div className={style.table_role__icon}>
                    <Flex />
                </div>
            );
        }

        return roleSvg;
    };

    return <div className={style.table_role}>{returnRole()}</div>;
};

export default TableRole;
