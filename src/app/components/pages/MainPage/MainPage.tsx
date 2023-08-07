import React from "react";
import style from "./mainPage.module.scss";
import GlobalTournamentStatistics from "../../ui/GlobalTournamentsStatisticComponents/GlobalTournamentStatistics/GlobalTournamentStatistics";
import useGlobalTourStats from "../../../hooks/appHooks/tournamentsHooks/useGlobalTourStats";
import TopTwentyByCardsWonTable from "../../ui/GlobalTournamentsStatisticComponents/GlobalTournamentsTopTwentyStatisticTables/TopTwentyByCardsWonTable/TopTwentyByCardsWonTable";
import TopTwentyChampionsTable from "../../ui/GlobalTournamentsStatisticComponents/GlobalTournamentsTopTwentyStatisticTables/TopTwentyChampionsTable/TopTwentyChampionsTable";
import TopTwentyByWinrateTable from "../../ui/GlobalTournamentsStatisticComponents/GlobalTournamentsTopTwentyStatisticTables/TopTwentyByWinrateTable/TopTwentyByWinrateTable";
import TopTwentyLosersTable from "../../ui/GlobalTournamentsStatisticComponents/GlobalTournamentsTopTwentyStatisticTables/TopTwentyLosersTable/TopTwentyLosersTable";

const MainPage: React.FC = () => {
    const {
        qtyGlobalTournaments,
        qtyGlobalTeams,
        qtyGlobalPlayers,
        qtyGlobalMatches,
        qtyGlobalPlayerChampions,
        topTwentyByCardsWon,
        topTwentyChampions,
        topTwentybyWinrate,
        topTwentyLosers
    } = useGlobalTourStats();

    return (
        <div>
            <GlobalTournamentStatistics
                {...{
                    qtyGlobalTournaments,
                    qtyGlobalTeams,
                    qtyGlobalPlayers,
                    qtyGlobalMatches,
                    qtyGlobalPlayerChampions
                }}
            />

            <div className={style.main_page__tables}>
                <TopTwentyByCardsWonTable data={topTwentyByCardsWon} />
                <TopTwentyChampionsTable data={topTwentyChampions} />
                <TopTwentyByWinrateTable data={topTwentybyWinrate} />
                <TopTwentyLosersTable data={topTwentyLosers} />
            </div>
        </div>
    );
};

export default MainPage;
