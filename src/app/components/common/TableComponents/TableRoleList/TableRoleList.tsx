import React from "react";
import style from "./tableRoleList.module.scss";
import TableRole from "../TableRole/TableRole";
import { PlayerRoles } from "../../../../ts/types/PlayerTypes/PlayerRoles";

interface TableRoleListProps {
    roles: string[];
}

const TableRoleList: React.FC<TableRoleListProps> = ({ roles }) => {
    return (
        <ul className={style.role_list}>
            <div className={style.role_list__wrap}>
                {roles.map((role, index) => (
                    <li key={role + index}>
                        <TableRole role={role as PlayerRoles} />
                    </li>
                ))}
            </div>
        </ul>
    );
};

export default TableRoleList;
