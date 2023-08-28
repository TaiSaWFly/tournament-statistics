import React from "react";
import style from "./teamTournamentTable.module.scss";
import { ITournamentDb } from "../../../../../../ts/models/ITournamentDb";
import TableRole from "../../../../../common/TableComponents/TableRole/TableRole";
import TablePlayerLink from "../../../../../common/TableComponents/TablePlayerLink/TablePlayerLink";
import TeamNewRolePlayerTable from "../TeamNewRolePlayerTable/TeamNewRolePlayerTable";
import { createColumnHelper } from "@tanstack/react-table";
import Table from "../../../../../common/TableComponents/Table/Table";

interface TeamTournamentTableProps {
    team: ITournamentDb[];
}

const TeamTournamentTable: React.FC<TeamTournamentTableProps> = ({ team }) => {
    const column = createColumnHelper<ITournamentDb>();
    const columns = [
        column.display({
            id: "Роль",
            cell: ({ row }) => <TableRole role={row.original.Роль} />
        }),
        column.display({
            id: "Подроль",
            header: () => "Подроль",
            cell: ({ row }) => row.original.Подроль
        }),
        column.display({
            id: "Игрок",
            header: () => "Тиммейт",
            cell: ({ row }) => (
                <TablePlayerLink.CurrentPlayerWithСaptain
                    teammateName={row.original.Игрок}
                    teammateId={row.original.PlayerID}
                    teamName={row.original.Команда}
                />
            )
        }),
        column.display({
            id: "Рейтинг",
            header: () => "Рейтинг",
            cell: ({ row }) => row.original.Рейтинг
        }),
        column.display({
            id: "Дивизион",
            header: () => "Дивизион",
            cell: ({ row }) => row.original.Дивизион
        }),
        column.display({
            id: "Новичок ",
            header: () => "Новичок",
            cell: ({ row }) => (
                <TeamNewRolePlayerTable isNew={row.original["Новичок "]} />
            )
        }),
        column.display({
            id: "Новичок на роли",
            header: () => "Нв. Роль",
            cell: ({ row }) => (
                <TeamNewRolePlayerTable
                    isNew={row.original["Новичок на роли"]}
                />
            )
        })
    ];

    return (
        <Table
            {...{
                data: team,
                columns,
                className: style.team_tournament_table
            }}
        />
    );
};

export default TeamTournamentTable;
