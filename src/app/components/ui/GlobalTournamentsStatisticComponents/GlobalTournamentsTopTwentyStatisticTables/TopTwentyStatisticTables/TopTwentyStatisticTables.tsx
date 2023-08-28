import React from "react";
import style from "./topTwentyStatisticTables.module.scss";
import TopTwentyByCardsWonTable from "../TopTwentyByCardsWonTable";
import TopTwentyChampionsTable from "../TopTwentyChampionsTable";
import TopTwentyByWinrateTable from "../TopTwentyByWinrateTable";
import TopTwentyLosersTable from "../TopTwentyLosersTable";
import { TopTwentyDataObjType } from "../../../../../ts/types/TopTwentyDataObjType";

interface TopTwentyStatisticTablesProps extends TopTwentyDataObjType {}

const TopTwentyStatisticTables: React.FC<TopTwentyStatisticTablesProps> = ({
    topTwentyByCardsWon,
    topTwentyChampions,
    topTwentyByWinrate,
    topTwentyLosers
}) => {
    return (
        <div className={style.tables}>
            <div className={style.tables_title}>Статистика Топ-20</div>

            <div className={style.table_wrap}>
                <div className={style.table_comp}>
                    <TopTwentyByCardsWonTable data={topTwentyByCardsWon} />
                </div>

                <div className={style.table_comp}>
                    <TopTwentyChampionsTable data={topTwentyChampions} />
                </div>

                <div className={style.table_comp}>
                    <TopTwentyByWinrateTable data={topTwentyByWinrate} />
                </div>

                <div className={style.table_comp}>
                    <TopTwentyLosersTable data={topTwentyLosers} />
                </div>
            </div>
        </div>
    );
};

export default TopTwentyStatisticTables;
