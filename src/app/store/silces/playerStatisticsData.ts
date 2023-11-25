import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../createStore";
import { IPlayerStats } from "../../ts/models/IPlayerStats";
import { ITournamentDb } from "../../ts/models/ITournamentDb";
import { IPlayer } from "../../ts/models/IPlayer";
import countPlayerStatisticsData from "../../utils/appUtils/countData/countSortStatisticData/countStatisticData/countPlayerStatisticsData";
import countAveragePlayersSatisticsData from "../../utils/appUtils/countData/countSortStatisticData/countStatisticData/countAveragePlayersSatisticsData";
import { UseSelectorHookType } from "../../hooks/reduxHooks/reduxHooks";
import { ChartDataType } from "../../ts/types/ChartTypes/ChartDataType";

interface IPlayerStatisticsDataSlice {
    entities: {
        playerStats: {
            data: IPlayerStats[];
            isCountingPlayerStats: boolean;
        };
        averagePlayersStatsChart: {
            data: ChartDataType[];
            isCountingAveragePlayersStatsChart: boolean;
        };
    };
}

const initialState: IPlayerStatisticsDataSlice = {
    entities: {
        playerStats: {
            data: [],
            isCountingPlayerStats: true
        },
        averagePlayersStatsChart: {
            data: [],
            isCountingAveragePlayersStatsChart: true
        }
    }
};

const playerStatisticsDataSlice = createSlice({
    name: "playerStatisticsData",
    initialState,
    reducers: {
        playerStatisticsDataRequestedCounting: (state) => {
            state.entities.playerStats.isCountingPlayerStats = true;
        },
        playersAverageStatisticsDataRequestedCounting: (state) => {
            state.entities.averagePlayersStatsChart.isCountingAveragePlayersStatsChart =
                true;
        },
        playerStatisticsDataReceivedCounting: (
            state,
            action: PayloadAction<IPlayerStats[]>
        ) => {
            state.entities.playerStats.data = action.payload;
            state.entities.playerStats.isCountingPlayerStats = false;
        },
        playersAverageStatisticsDataReceivedCounting: (
            state,
            action: PayloadAction<ChartDataType[]>
        ) => {
            state.entities.averagePlayersStatsChart.data = action.payload;
            state.entities.averagePlayersStatsChart.isCountingAveragePlayersStatsChart =
                false;
        }
    }
});

const { actions, reducer: playerStatisticsDataReducer } =
    playerStatisticsDataSlice;
const {
    playerStatisticsDataRequestedCounting,
    playersAverageStatisticsDataRequestedCounting,
    playerStatisticsDataReceivedCounting,
    playersAverageStatisticsDataReceivedCounting
} = actions;

export const countingPlayerStatisticsData =
    (tournaments: ITournamentDb[], players: IPlayer[]) =>
    async (dispatch: AppDispatch) => {
        dispatch(playerStatisticsDataRequestedCounting());
        const data = countPlayerStatisticsData(tournaments, players);
        dispatch(playerStatisticsDataReceivedCounting(data));
    };

export const countingAveragePlayerStatisticsData =
    () => async (dispatch: AppDispatch, getState: UseSelectorHookType) => {
        const { playerStatisticsData } = getState((state) => state);
        const countingData = playerStatisticsData.entities.playerStats.data;

        dispatch(playersAverageStatisticsDataRequestedCounting());
        const data = countAveragePlayersSatisticsData(countingData);
        dispatch(playersAverageStatisticsDataReceivedCounting(data));
    };

export const playerStatisticsDataActions = actions;
export default playerStatisticsDataReducer;
