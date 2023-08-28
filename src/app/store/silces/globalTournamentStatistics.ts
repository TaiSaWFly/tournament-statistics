import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPlayerStats } from "../../ts/models/IPlayerStats";
import { TournamentStatisticInfoType } from "../../ts/types/TournamentTypes/TournamentStatisticInfoType";
import definedLengthArray from "../../utils/appUtils/other/definedLengthArray";
import _ from "lodash";
import { ITournamentDb } from "../../ts/models/ITournamentDb";
import { IMatchesDb } from "../../ts/models/IMatchesDb";
import returnGlobalTournamentStatistic from "../../utils/appUtils/transformAndCreateData/createData/tornamentStatisticData/returnGlobalTournamentStatistic";
import { TopTwentyDataObjType } from "../../ts/types/TopTwentyDataObjType";

type GlobalTournamentChartDataPayloadType = {
    tournaments: ITournamentDb[];
    matches: IMatchesDb[];
};

type TopTwentyDataPayloadType = {
    fillterDataByQtyTournaments: IPlayerStats[];
    playerStatisticsData: IPlayerStats[];
};

interface IGlobalTournamentStatisticsSlice {
    entities: {
        topTwentyData: TopTwentyDataObjType | null;
        globalTournamentChartData: TournamentStatisticInfoType[] | null;
    };
}

const initialState: IGlobalTournamentStatisticsSlice = {
    entities: {
        topTwentyData: null,
        globalTournamentChartData: null
    }
};

const globalTournamentStatisticsSlice = createSlice({
    name: "globalTournamentStatistics",
    initialState,
    reducers: {
        setTopTwentyData: (
            state,
            action: PayloadAction<TopTwentyDataPayloadType>
        ) => {
            const fillterDataByQtyTournaments =
                action.payload.fillterDataByQtyTournaments;
            const playerStatisticsData = action.payload.playerStatisticsData;

            const topTwentyData: TopTwentyDataObjType = {
                topTwentyByCardsWon: definedLengthArray(
                    _.orderBy(
                        fillterDataByQtyTournaments,
                        ["Выиграно карт"],
                        ["desc"]
                    ),
                    20
                ),
                topTwentyChampions: definedLengthArray(
                    _.orderBy(playerStatisticsData, ["Чемпионств"], ["desc"]),
                    20
                ),
                topTwentyByWinrate: definedLengthArray(
                    _.orderBy(
                        fillterDataByQtyTournaments,
                        ["Винрейт"],
                        ["desc"]
                    ),
                    20
                ),
                topTwentyLosers: definedLengthArray(
                    _.orderBy(
                        fillterDataByQtyTournaments,
                        ["Отлётов в ноль"],
                        ["desc"]
                    ),
                    20
                )
            };

            state.entities.topTwentyData = topTwentyData;
        },
        setGlobalTournamentChartData: (
            state,
            action: PayloadAction<GlobalTournamentChartDataPayloadType>
        ) => {
            state.entities.globalTournamentChartData =
                returnGlobalTournamentStatistic(
                    action.payload.tournaments,
                    action.payload.matches
                );
        }
    }
});

const { actions, reducer: globalTournamentStatisticsReduser } =
    globalTournamentStatisticsSlice;

export const globalTournamentStatisticsActions = actions;
export default globalTournamentStatisticsReduser;
