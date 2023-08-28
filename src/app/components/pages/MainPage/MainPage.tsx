import React from "react";
import useGlobalTourStats from "../../../hooks/appHooks/tournamentsHooks/useGlobalTourStats";
import TournamentStatisticsInfo from "../../ui/GlobalTournamentsStatisticComponents/GlobalTournamentStatisticsInfoComponents/TournamentStatisticsInfo/TournamentStatisticsInfo";
import TopTwentyStatisticTables from "../../ui/GlobalTournamentsStatisticComponents/GlobalTournamentsTopTwentyStatisticTables/TopTwentyStatisticTables/TopTwentyStatisticTables";
import ComponentContainer from "../../common/ComponentContainer/ComponentContainer";

const MainPage: React.FC = () => {
    const { globalTournamentChart, topTwenty } = useGlobalTourStats();
    return (
        <section>
            <ComponentContainer>
                {globalTournamentChart && topTwenty && (
                    <>
                        <TournamentStatisticsInfo
                            statisticsInfo={globalTournamentChart}
                        />

                        <TopTwentyStatisticTables
                            topTwentyByCardsWon={topTwenty.topTwentyByCardsWon}
                            topTwentyChampions={topTwenty.topTwentyChampions}
                            topTwentyByWinrate={topTwenty.topTwentyByWinrate}
                            topTwentyLosers={topTwenty.topTwentyLosers}
                        />
                    </>
                )}
            </ComponentContainer>
        </section>
    );
};

export default MainPage;
