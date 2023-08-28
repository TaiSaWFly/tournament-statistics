import React from "react";
import { IPlayerStats } from "../../../../ts/models/IPlayerStats";
import TablePlayerLink from "../../../common/TableComponents/TablePlayerLink/TablePlayerLink";
import editPercentNumber from "../../../../utils/appUtils/other/editPercentNumber";
import { createColumnHelper } from "@tanstack/react-table";
import Table from "../../../common/TableComponents/Table/Table";

interface TopTwentyByWinrateTableProps {
    data: IPlayerStats[];
}

const TopTwentyByWinrateTable: React.FC<TopTwentyByWinrateTableProps> = ({
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
            id: "Винрейт",
            header: () => "Винрейт",
            cell: ({ row }) => <>{editPercentNumber(row.original.Винрейт)}%</>
        })
    ];

    return <Table {...{ data, columns, title: "по Винрейту" }} />;
};

export default TopTwentyByWinrateTable;
