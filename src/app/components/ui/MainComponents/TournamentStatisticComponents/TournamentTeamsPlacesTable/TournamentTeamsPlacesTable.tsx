import React from "react";
import style from "./tournamentTeamsPlacesTable.module.scss";
import { ITournamentDb } from "../../../../../ts/models/ITournamentDb";
import TablePlayerLink from "../../../../common/TableComponents/TablePlayerLink/TablePlayerLink";
import { createColumnHelper } from "@tanstack/react-table";
import Table from "../../../../common/TableComponents/Table/Table";

interface TournamentTeamsPlacesTableProps {
    placeTeams: ITournamentDb[];
}

const TournamentTeamsPlacesTable: React.FC<TournamentTeamsPlacesTableProps> = ({
    placeTeams
}) => {
    const column = createColumnHelper<ITournamentDb>();
    const columns = [
        column.display({
            id: "Место",
            header: () => "Место",
            cell: ({ row }) => row.original.Место
        }),
        column.display({
            id: "Команда",
            header: () => "Команда",
            cell: ({ row }) => (
                <TablePlayerLink
                    teammateId={row.original.PlayerID}
                    teammateName={row.original.Игрок}
                />
            )
        })
    ];

    return (
        <Table
            {...{
                data: placeTeams,
                columns,
                className: style.team_places__table,
                title: "Команды"
            }}
        />
    );
};

export default TournamentTeamsPlacesTable;
