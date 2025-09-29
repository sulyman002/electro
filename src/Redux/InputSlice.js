import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
    name: "input",
    initialState: {valueEnter: ""},
    reducers: {
        setInputData: (state, action) => {
            state.valueEnter = action.payload
        }
    }
})


export default inputSlice.reducer;
export const { setInputData } = inputSlice.actions;