import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SelectOption } from "../../ts/types/SelectOption";
import { SearchMemoryType } from "../../ts/types/SearchMemoryType";
import localStorageService from "../../services/app.services/localStorage.service";
import { searchMemoryInitialState } from "../../data/defaultInitialStateData";

interface ISearchMemorySlice {
    entities: SearchMemoryType;
}

const initialState: ISearchMemorySlice = {
    entities: localStorageService.fromStorage("searchMemory")
        ? (localStorageService.fromStorage("searchMemory") as SearchMemoryType)
        : searchMemoryInitialState
};

const searchMemorySlice = createSlice({
    name: "searchMemory",
    initialState,
    reducers: {
        setSearchMemoryTournamentNumber: (
            state,
            action: PayloadAction<SelectOption | null>
        ) => {
            state.entities.tournamentNumberOption = action.payload;
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
            state.entities.playerOption = action.payload;
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
        }
    }
});

const { actions, reducer: searchMemoryReducer } = searchMemorySlice;

export const searchMemoryActions = actions;
export default searchMemoryReducer;
