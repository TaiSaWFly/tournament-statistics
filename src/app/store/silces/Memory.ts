import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SelectOption } from "../../ts/types/SelectOption";
import { SearchMemoryType } from "../../ts/types/LocalStorageDataTypes/SearchMemoryType";
import localStorageService from "../../services/app.services/localStorage.service";
import {
    appMemoryInitialState,
    searchMemoryInitialState
} from "../../data/defaultInitialStateData";
import { AppMemoryType } from "../../ts/types/LocalStorageDataTypes/AppMemoryType";

interface IMemorySlice {
    entities: {
        searchMemory: SearchMemoryType;
        appMemory: AppMemoryType;
    };
}

const initialState: IMemorySlice = {
    entities: {
        searchMemory: localStorageService.fromStorage("searchMemory")
            ? (localStorageService.fromStorage(
                  "searchMemory"
              ) as SearchMemoryType)
            : searchMemoryInitialState,
        appMemory: localStorageService.fromStorage("appMemory")
            ? (localStorageService.fromStorage("appMemory") as AppMemoryType)
            : appMemoryInitialState
    }
};

const memorySlice = createSlice({
    name: "memory",
    initialState,
    reducers: {
        setSearchMemoryTournamentNumber: (
            state,
            action: PayloadAction<SelectOption | null>
        ) => {
            state.entities.searchMemory.tournamentNumberOption = action.payload;
            const searchMemoryData = localStorageService.fromStorage(
                "searchMemory"
            ) as SearchMemoryType | null;

            if (searchMemoryData) {
                searchMemoryData.tournamentNumberOption = action.payload;
                const searchMemoryDataToStorage = {
                    ...searchMemoryData,
                    tournamentNumberOption:
                        searchMemoryData.tournamentNumberOption
                };

                localStorageService.toStorage(
                    "searchMemory",
                    searchMemoryDataToStorage
                );
            } else {
                localStorageService.initialStorage();
            }
        },
        setSearchMemoryPlayer: (
            state,
            action: PayloadAction<SelectOption | null>
        ) => {
            state.entities.searchMemory.playerOption = action.payload;
            const searchMemoryData = localStorageService.fromStorage(
                "searchMemory"
            ) as SearchMemoryType | null;

            if (searchMemoryData) {
                searchMemoryData.playerOption = action.payload;
                const searchMemoryDataToStorage = {
                    ...searchMemoryData,
                    playerOption: searchMemoryData.playerOption
                };

                localStorageService.toStorage(
                    "searchMemory",
                    searchMemoryDataToStorage
                );
            } else {
                localStorageService.initialStorage();
            }
        },
        setDashboardMemory: (state, action: PayloadAction<boolean>) => {
            state.entities.appMemory.dashboard.menu.isOpen = action.payload;
            const appMemoryDataToStorage = state.entities.appMemory;
            localStorageService.toStorage("appMemory", appMemoryDataToStorage);
        },
        setAppThemeMemory: (state, action: PayloadAction<boolean>) => {
            state.entities.appMemory.appTheme.isDarkTheme = action.payload;
            const appMemoryDataToStorage = state.entities.appMemory;
            localStorageService.toStorage("appMemory", appMemoryDataToStorage);
        }
    }
});

const { actions, reducer: memoryReducer } = memorySlice;

export const memoryActions = actions;
export default memoryReducer;
