import React from "react";
import style from "./mainPage.module.scss";
import useGlobalTourStats from "../../../hooks/appHooks/tournamentsHooks/useGlobalTourStats";
import ComponentContainer from "../../common/ComponentContainer/ComponentContainer";
import TournamentStatisticsInfo from "../../ui/MainComponents/GlobalTournamentsStatisticComponents/GlobalTournamentStatisticsInfoComponents/TournamentStatisticsInfo/TournamentStatisticsInfo";
import TopTwentyStatisticTables from "../../ui/MainComponents/GlobalTournamentsStatisticComponents/GlobalTournamentsTopTwentyStatisticTables/TopTwentyStatisticTables/TopTwentyStatisticTables";

const MainPage: React.FC = () => {
    const { globalTournamentChart, topTwenty } = useGlobalTourStats();

    return (
        <section className={style.main_page}>
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
