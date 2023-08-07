import React from "react";
import style from "./topTwentyByCardsWonTable.module.scss";
import { IPlayerStats } from "../../../../../ts/models/IPlayerStats";
import Table from "../../../../common/TableComponents/Table";
import { ColumnType } from "../../../../../ts/types/ColumnType";
import TablePlayerLink from "../../../../common/TableComponents/TablePlayerLink/TablePlayerLink";

interface TopTwentyByCardsWonTableProps {
    data: IPlayerStats[];
}

const TopTwentyByCardsWonTable: React.FC<TopTwentyByCardsWonTableProps> = ({
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
            key: "Выиграно карт",
            name: "Карт",
            component: (player) => <>{player["Выиграно карт"]}</>
        }
    ];

    return (
        <div className={style.top_twenty_table}>
            <div className={style.top_twenty_table__title}>
                Топ-20 по выигранным картам
            </div>
            <Table columns={columns} dataBody={data} />
        </div>
    );
};

export default TopTwentyByCardsWonTable;
