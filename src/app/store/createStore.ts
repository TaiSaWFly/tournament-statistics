import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tournamentDbReducer from "./silces/tournamentDb";
import playersDbReducer, { playersDbActions } from "./silces/playersDb";
import matchesDbReducer from "./silces/matchesDb";
import playerStatisticsDataReducer from "./silces/playerStatisticsData";
import searchMemoryReducer, {
    searchMemoryActions
} from "./silces/searchMemory";

const rootReducer = combineReducers({
    tournamentDb: tournamentDbReducer,
    playersDb: playersDbReducer,
    matchesDb: matchesDbReducer,
    playerStatisticsData: playerStatisticsDataReducer,
    searchMemory: searchMemoryReducer
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
    ...searchMemoryActions
};

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
