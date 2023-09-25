import React from "react";
import style from "./tournamentTeamTable.module.scss";
import { ITournamentDb } from "../../../../../ts/models/ITournamentDb";
import TableRole from "../../../../common/TableComponents/TableRole/TableRole";
import TablePlayerLink from "../../../../common/TableComponents/TablePlayerLink/TablePlayerLink";
import { createColumnHelper } from "@tanstack/react-table";
import Table from "../../../../common/TableComponents/Table/Table";

interface TournamentTeamTableProps {
    team: ITournamentDb[];
}

const TournamentTeamTable: React.FC<TournamentTeamTableProps> = ({ team }) => {
    const column = createColumnHelper<ITournamentDb>();
    const columns = [
        column.display({
            id: "Команда",
            header: () => "Тиммейт",
            cell: ({ row }) => (
                <TablePlayerLink.Сaptain
                    teammateId={row.original.PlayerID}
                    teammateName={row.original.Игрок}
                    teamName={row.original.Команда}
                />
            )
        }),
        column.display({
            id: "Роль",
            header: () => "роль",
            cell: ({ row }) => <TableRole role={row.original.Роль} />
        }),
        column.display({
            id: "Рейтинг",
            header: () => "дивизион",
            cell: ({ row }) => (
                <div>
                    {row.original.Дивизион} ({row.original.Рейтинг})
                </div>
            )
        })
    ];

    return (
        <Table
            {...{
                data: team,
                columns,
                className: style.tornament_team__table,
                title: "команда чемпионов"
            }}
        />
    );
};

export default TournamentTeamTable;
