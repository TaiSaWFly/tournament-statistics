import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../createStore";
import matchesDbService from "../../services/app.services/matchesDb.service";
import { IMatchesDb } from "../../ts/models/IMatchesDb";
import transformData from "../../utils/general/transformData";

interface IMatchesDbSlice {
    entities: IMatchesDb[];
    isLoading: boolean;
}

const initialState: IMatchesDbSlice = {
    entities: [],
    isLoading: true
};

const matchesDbSlice = createSlice({
    name: "matchesDb",
    initialState,
    reducers: {
        matchesDbRequested: (state) => {
            state.isLoading = true;
        },
        matchesDbReceived: (state, action: PayloadAction<IMatchesDb[]>) => {
            state.entities = transformData.transformMatchesDb(action.payload);
            state.isLoading = false;
        }
    }
});

const { actions, reducer: matchesDbReducer } = matchesDbSlice;
const { matchesDbRequested, matchesDbReceived } = actions;

export const loadmatchesDbList = () => async (dispatch: AppDispatch) => {
    dispatch(matchesDbRequested());
    try {
        const { content } = await matchesDbService.getList();
        dispatch(matchesDbReceived(content));
    } catch (error) {
        console.log(error);
    }
};

export const matchesDbActions = actions;
export default matchesDbReducer;
