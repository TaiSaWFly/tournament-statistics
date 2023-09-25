import React from "react";
import { IPlayerStats } from "../../../../../ts/models/IPlayerStats";
import TablePlayerLink from "../../../../common/TableComponents/TablePlayerLink/TablePlayerLink";
import { createColumnHelper } from "@tanstack/react-table";
import Table from "../../../../common/TableComponents/Table/Table";
import TableRoleList from "../../../../common/TableComponents/TableRoleList/TableRoleList";

interface TopTwentyLosersTableProps {
    data: IPlayerStats[];
}

const TopTwentyLosersTable: React.FC<TopTwentyLosersTableProps> = ({
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
        column.display({
            id: "Отлётов в ноль",
            header: () => "Отлётов",
            cell: ({ row }) => row.original["Отлётов в ноль"]
        }),
        column.display({
            id: "Отлётов в ноль роль",
            header: () => "Pоль",
            cell: ({ row }) => (
                <TableRoleList roles={row.original["Отлётов в ноль роль"]} />
            )
        })
    ];

    return <Table {...{ data, columns, title: "отлетов в ноль" }} />;
};

export default TopTwentyLosersTable;
