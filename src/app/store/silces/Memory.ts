import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SelectOption } from "../../ts/types/SelectOption";
import { SearchMemoryType } from "../../ts/types/LocalStorageDataTypes/SearchMemoryType";
import localStorageService from "../../services/app.services/localStorage.service";
import {
    dashboardMemoryInitialState,
    searchMemoryInitialState
} from "../../data/defaultInitialStateData";
import { DashboardMemoryType } from "../../ts/types/LocalStorageDataTypes/DashboardMemoryType";

interface IMemorySlice {
    entities: {
        searchMemory: SearchMemoryType;
        dashboardMemory: DashboardMemoryType;
    };
}

const initialState: IMemorySlice = {
    entities: {
        searchMemory: localStorageService.fromStorage("searchMemory")
            ? (localStorageService.fromStorage(
                  "searchMemory"
              ) as SearchMemoryType)
            : searchMemoryInitialState,
        dashboardMemory: localStorageService.fromStorage("dashboardMemory")
            ? (localStorageService.fromStorage(
                  "dashboardMemory"
              ) as DashboardMemoryType)
            : dashboardMemoryInitialState
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
            state.entities.dashboardMemory.menu.isOpen = action.payload;
            const dashboardMemoryDataToStorage = state.entities.dashboardMemory;
            localStorageService.toStorage(
                "dashboardMemory",
                dashboardMemoryDataToStorage
            );
        }
    }
});

const { actions, reducer: memoryReducer } = memorySlice;

export const memoryActions = actions;
export default memoryReducer;
