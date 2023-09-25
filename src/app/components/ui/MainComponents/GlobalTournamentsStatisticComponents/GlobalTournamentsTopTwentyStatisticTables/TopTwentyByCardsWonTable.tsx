import React from "react";
import { IPlayerStats } from "../../../../../ts/models/IPlayerStats";
import TablePlayerLink from "../../../../common/TableComponents/TablePlayerLink/TablePlayerLink";
import { createColumnHelper } from "@tanstack/react-table";
import Table from "../../../../common/TableComponents/Table/Table";

interface TopTwentyByCardsWonTableProps {
    data: IPlayerStats[];
}

const TopTwentyByCardsWonTable: React.FC<TopTwentyByCardsWonTableProps> = ({
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
            id: "Выиграно карт",
            header: () => "Карт",
            cell: ({ row }) => row.original["Выиграно карт"]
        })
    ];

    return <Table {...{ data, columns, title: "по выйгранным картам" }} />;
};

export default TopTwentyByCardsWonTable;
