import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../createStore";
import { IPlayerStats } from "../../ts/models/IPlayerStats";
import { ITournamentDb } from "../../ts/models/ITournamentDb";
import { IPlayer } from "../../ts/models/IPlayer";
import countPlayerStatisticsData from "../../utils/appUtils/countData/countSortStatisticData/countStatisticData/countPlayerStatisticsData";

interface IPlayerStatisticsDataSlice {
    entities: IPlayerStats[];
    isCounting: boolean;
}

const initialState: IPlayerStatisticsDataSlice = {
    entities: [],
    isCounting: true
};

const playerStatisticsDataSlice = createSlice({
    name: "playerStatisticsData",
    initialState,
    reducers: {
        playerStatisticsDataRequestedCounting: (state) => {
            state.isCounting = true;
        },
        playerStatisticsDataReceivedCounting: (
            state,
            action: PayloadAction<IPlayerStats[]>
        ) => {
            state.entities = action.payload;
            state.isCounting = false;
        }
    }
});

const { actions, reducer: playerStatisticsDataReducer } =
    playerStatisticsDataSlice;
const {
    playerStatisticsDataRequestedCounting,
    playerStatisticsDataReceivedCounting
} = actions;

export const countingPlayerStatisticsData =
    (tournaments: ITournamentDb[], players: IPlayer[]) =>
    async (dispatch: AppDispatch) => {
        dispatch(playerStatisticsDataRequestedCounting());
        const data = countPlayerStatisticsData(tournaments, players);
        dispatch(playerStatisticsDataReceivedCounting(data));
    };

export const playerStatisticsDataActions = actions;
export default playerStatisticsDataReducer;
