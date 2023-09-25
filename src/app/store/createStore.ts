import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tournamentDbReducer from "./silces/tournamentDb";
import playersDbReducer, { playersDbActions } from "./silces/playersDb";
import matchesDbReducer from "./silces/matchesDb";
import playerStatisticsDataReducer from "./silces/playerStatisticsData";
import globalTournamentStatisticsReduser, {
    globalTournamentStatisticsActions
} from "./silces/globalTournamentStatistics";
import memoryReducer, { memoryActions } from "./silces/memory";
import systemReduser, { systemActions } from "./silces/systemSlice";

const rootReducer = combineReducers({
    system: systemReduser,
    memory: memoryReducer,
    tournamentDb: tournamentDbReducer,
    playersDb: playersDbReducer,
    matchesDb: matchesDbReducer,
    playerStatisticsData: playerStatisticsDataReducer,
    globalTournamentStatistics: globalTournamentStatisticsReduser
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false
        }),
    devTools: process.env.NODE_ENV !== "production"
});

export const rootActions = {
    ...playersDbActions,
    ...memoryActions,
    ...globalTournamentStatisticsActions,
    ...systemActions
};

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
