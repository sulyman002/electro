import { createSlice } from "@reduxjs/toolkit";

const allCollectionSlice = createSlice({
    name: "allCollection",
    initialState: {allCollectionData: []},
    reducers: {
        setAllCollectionData: (state, action) => {
            state.allCollectionData = action.payload

        }
    },
});



export default allCollectionSlice.reducer;
export const { setAllCollectionData } =allCollectionSlice.actions;