import React from "react";
import style from "./topTwentyLosersTable.module.scss";
import { IPlayerStats } from "../../../../../ts/models/IPlayerStats";
import { ColumnType } from "../../../../../ts/types/ColumnType";
import TablePlayerLink from "../../../../common/TableComponents/TablePlayerLink/TablePlayerLink";
import TableRole from "../../../../common/TableComponents/TableRole/TableRole";
import { ITournamentDbRole } from "../../../../../ts/models/ITournamentDb";
import Table from "../../../../common/TableComponents/Table";

interface TopTwentyLosersTableProps {
    data: IPlayerStats[];
}

const TopTwentyLosersTable: React.FC<TopTwentyLosersTableProps> = ({
    data
}) => {
    const columns: ColumnType<IPlayerStats, keyof IPlayerStats>[] = [
        {
            key: "Игрок",
            name: "Игрок",
            component: (player) => (
                <TablePlayerLink
                    teammateId={player.PlayerID}
                    teammateName={player.Игрок}
                />
            )
        },
        {
            key: "Отлётов в ноль",
            name: "Отлётов",
            component: (player) => <>{player["Отлётов в ноль"]}</>
        },
        {
            key: "Отлётов в ноль роль",
            name: "Роль",
            component: (player) => (
                <ul className={style.top_twenty_table__list_role}>
                    {player["Отлётов в ноль роль"].map((role, index) => (
                        <li key={role + index}>
                            <TableRole role={role as ITournamentDbRole} />
                        </li>
                    ))}
                </ul>
            )
        }
    ];

    return (
        <div className={style.top_twenty_table}>
            <div className={style.top_twenty_table__title}>
                Топ-20 отлетов в ноль
            </div>
            <Table columns={columns} dataBody={data} />
        </div>
    );
};

export default TopTwentyLosersTable;
