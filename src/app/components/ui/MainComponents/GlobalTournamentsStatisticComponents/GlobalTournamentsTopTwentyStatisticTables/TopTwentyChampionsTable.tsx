import React from "react";
import { IPlayerStats } from "../../../../../ts/models/IPlayerStats";
import TablePlayerLink from "../../../../common/TableComponents/TablePlayerLink/TablePlayerLink";
import Table from "../../../../common/TableComponents/Table/Table";
import { createColumnHelper } from "@tanstack/react-table";
import TableRoleList from "../../../../common/TableComponents/TableRoleList/TableRoleList";

interface TopTwentyChampionsTableProps {
    data: IPlayerStats[];
}

const TopTwentyChampionsTable: React.FC<TopTwentyChampionsTableProps> = ({
    data
}) => {
    const column = createColumnHelper<IPlayerStats>();
    const columns = [
        column.display({
            id: "Игрок",
            header: () => "Игрок",
            cell: ({ row }) => (
                <TablePlayerLink
                    teammateId={row.original.PlayerID}
                    teammateName={row.original.Игрок}
                />
            )
        }),
        column.accessor("Чемпионств", {
            header: () => "Чемпионств",
            cell: ({ row }) => <>{row.original.Чемпионств}</>
        }),
        column.display({
            id: "Чемпионство роль",
            header: () => "Pоль",
            cell: ({ row }) => (
                <TableRoleList roles={row.original["Чемпионство роль"]} />
            )
        })
    ];

    return <Table {...{ data, columns, title: "чемпионов" }} />;
};

export default TopTwentyChampionsTable;
