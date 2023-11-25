import { useEffect, useState } from "react";
import { useAppSelector } from "../../reduxHooks/reduxHooks";
import { TopTwentyDataObjType } from "../../../ts/types/TopTwentyDataObjType";
import { useActions } from "../../reduxHooks/useActions";
import { TournamentStatisticInfoType } from "../../../ts/types/TournamentTypes/TournamentStatisticInfoType";

const useGlobalTourStats = () => {
    const tournamentDb = useAppSelector((state) => state.tournamentDb.entities);
    const matchesDb = useAppSelector((state) => state.matchesDb.entities);
    const { data: playerStatisticsData } = useAppSelector(
        (state) => state.playerStatisticsData.entities.playerStats
    );

    const { setTopTwentyData, setGlobalTournamentChartData } = useActions();
    const { topTwentyData, globalTournamentChartData } = useAppSelector(
        (state) => state.globalTournamentStatistics.entities
    );

    const [topTwenty, setTopTwenty] = useState<TopTwentyDataObjType | null>(
        topTwentyData
    );
    const [globalTournamentChart, setGlobalTournamentChart] = useState<
        TournamentStatisticInfoType[] | null
    >(globalTournamentChartData);

    useEffect(() => {
        if (!topTwentyData) {
            const fillterDataByQtyTournaments = playerStatisticsData.filter(
                (data) => data["Колличество турниров"] >= 5
            );

            setTopTwentyData({
                fillterDataByQtyTournaments,
                playerStatisticsData
            });
        }

        if (!globalTournamentChartData) {
            setGlobalTournamentChartData({
                tournaments: tournamentDb,
                matches: matchesDb
            });
        }
    }, []);

    useEffect(() => {
        setTopTwenty(topTwentyData);
        setGlobalTournamentChart(globalTournamentChartData);
    }, [topTwentyData, globalTournamentChartData]);

    return {
        globalTournamentChart,
        topTwenty
    };
};

export default useGlobalTourStats;
