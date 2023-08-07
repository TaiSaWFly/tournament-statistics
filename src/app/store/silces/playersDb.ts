import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPlayer } from "../../ts/models/IPlayer";
import { AppDispatch } from "../createStore";
import playersDbService from "../../services/app.services/playersDb.service";
import transformData from "../../utils/general/transformData";

interface IPlayersDbSlice {
    entities: IPlayer[];
    player: IPlayer | null;
    playerData: IPlayer[];
    isLoading: boolean;
}

const initialState: IPlayersDbSlice = {
    entities: [],
    player: null,
    playerData: [],
    isLoading: true
};

const playersDbSlice = createSlice({
    name: "playersDb",
    initialState,
    reducers: {
        playersDbRequested: (state) => {
            state.isLoading = true;
        },
        playersDbReceived: (state, action: PayloadAction<IPlayer[]>) => {
            state.entities = transformData.transformPlayerDb(action.payload);
            state.isLoading = false;
        },
        setPlayerData: (state, action: PayloadAction<number>) => {
            const findPlayer =
                state.entities.find((data) => data._id === action.payload) ||
                null;
            state.player = findPlayer;
            state.playerData = findPlayer
                ? state.entities.filter((d) => d.ID === findPlayer.ID)
                : [];
        }
    }
});

const { actions, reducer: playersDbReducer } = playersDbSlice;
const { playersDbRequested, playersDbReceived } = actions;

export const loadplayersDbList = () => async (dispatch: AppDispatch) => {
    dispatch(playersDbRequested());
    try {
        const { content } = await playersDbService.getList();
        dispatch(playersDbReceived(content));
    } catch (error) {
        console.log(error);
    }
};

export const playersDbActions = actions;
export default playersDbReducer;
