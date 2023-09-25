import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ISystemSlice {
    isMobileDevice: boolean;
}

const initialState: ISystemSlice = {
    isMobileDevice: false
};

const systemSlice = createSlice({
    name: "system",
    initialState,
    reducers: {
        setIsMobileDevice: (state, action: PayloadAction<boolean>) => {
            state.isMobileDevice = action.payload;
        }
    }
});

const { actions, reducer: systemReduser } = systemSlice;

export const systemActions = actions;
export default systemReduser;
