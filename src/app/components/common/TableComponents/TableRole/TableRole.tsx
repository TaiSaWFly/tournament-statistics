import React from "react";
import style from "./tableRole.module.scss";
import useSvgIcon from "../../../../hooks/appHooks/useSvgIcon";
import { ITournamentDbRole } from "../../../../ts/models/ITournamentDb";

interface TableRoleProps {
    role: ITournamentDbRole;
}

const TableRole: React.FC<TableRoleProps> = ({ role }) => {
    const { Tank, Dps, Support } = useSvgIcon();

    const returnRole = () => {
        let roleSvg = <></>;

        if (role === "tank") {
            roleSvg = <Tank />;
        }

        if (role === "dps") {
            roleSvg = <Dps />;
        }

        if (role === "support") {
            roleSvg = <Support />;
        }

        if (role === "Flex") {
            roleSvg = (
                <div className={style.table_role__flex}>
                    <span>fl</span>
                </div>
            );
        }

        return roleSvg;
    };

    return <div className={style.table_role}>{returnRole()}</div>;
};

export default TableRole;
