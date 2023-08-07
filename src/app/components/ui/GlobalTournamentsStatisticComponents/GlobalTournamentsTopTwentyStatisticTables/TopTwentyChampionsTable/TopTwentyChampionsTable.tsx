import React from "react";
import style from "./topTwentyChampionsTable.module.scss";
import { IPlayerStats } from "../../../../../ts/models/IPlayerStats";
import { ColumnType } from "../../../../../ts/types/ColumnType";
import TablePlayerLink from "../../../../common/TableComponents/TablePlayerLink/TablePlayerLink";
import Table from "../../../../common/TableComponents/Table";
import TableRole from "../../../../common/TableComponents/TableRole/TableRole";
import { ITournamentDbRole } from "../../../../../ts/models/ITournamentDb";

interface TopTwentyChampionsTableProps {
    data: IPlayerStats[];
}

const TopTwentyChampionsTable: React.FC<TopTwentyChampionsTableProps> = ({
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
            key: "Чемпионств",
            name: "Чемпионств",
            component: (player) => <>{player["Чемпионств"]}</>
        },
        {
            key: "Чемпионство роль",
            name: "Роль",
            component: (player) => (
                <ul className={style.top_twenty_table__list_role}>
                    {player["Чемпионство роль"].map((role, index) => (
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
                Топ-20 чемпионов
            </div>
            <Table columns={columns} dataBody={data} />
        </div>
    );
};

export default TopTwentyChampionsTable;
