import React from "react";
import style from "./topTwentyByWinrateTable.module.scss";
import { IPlayerStats } from "../../../../../ts/models/IPlayerStats";
import { ColumnType } from "../../../../../ts/types/ColumnType";
import TablePlayerLink from "../../../../common/TableComponents/TablePlayerLink/TablePlayerLink";
import Table from "../../../../common/TableComponents/Table";
import editPercentNumber from "../../../../../utils/appUtils/editPercentNumber";

interface TopTwentyByWinrateTableProps {
    data: IPlayerStats[];
}

const TopTwentyByWinrateTable: React.FC<TopTwentyByWinrateTableProps> = ({
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
            key: "Винрейт",
            name: "Винрейт",
            component: (player) => <> {editPercentNumber(player["Винрейт"])}%</>
        }
    ];

    return (
        <div className={style.top_twenty_table}>
            <div className={style.top_twenty_table__title}>
                Топ-20 по Винрейту
            </div>
            <Table columns={columns} dataBody={data} />
        </div>
    );
};

export default TopTwentyByWinrateTable;
