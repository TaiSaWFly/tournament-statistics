import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITournamentDb } from "../../ts/models/ITournamentDb";
import { AppDispatch } from "../createStore";
import dbService from "../../services/app.services/tournamentDb.service";
import transformData from "../../utils/general/transformData";

interface ITournamentDbSlice {
    entities: ITournamentDb[];
    isLoading: boolean;
}

const initialState: ITournamentDbSlice = {
    entities: [],
    isLoading: true
};

const tournamentDbSlice = createSlice({
    name: "tournamentDb",
    initialState,
    reducers: {
        tournamentDbRequested: (state) => {
            state.isLoading = true;
        },
        tournamentDbReceived: (
            state,
            action: PayloadAction<ITournamentDb[]>
        ) => {
            state.entities = transformData.transformTournamentDb(
                action.payload
            );
            state.isLoading = false;
        }
    }
});

const { actions, reducer: tournamentDbReducer } = tournamentDbSlice;
const { tournamentDbRequested, tournamentDbReceived } = actions;

export const loadTournamentDbList = () => async (dispatch: AppDispatch) => {
    dispatch(tournamentDbRequested());
    try {
        const { content } = await dbService.getList();
        dispatch(tournamentDbReceived(content));
    } catch (error) {
        console.log(error);
    }
};

export const tournamentDbActions = actions;
export default tournamentDbReducer;
