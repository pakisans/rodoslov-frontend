import {createSlice} from "@reduxjs/toolkit";

export const fetchSlice = createSlice({
    name: 'fetch',
    initialState: {
        isReadyForFetch: false,
    },
    reducers: {
        setIsReadyForFetch: (state) => {
            state.isReadyForFetch = !state.isReadyForFetch
        },
    }
});

export const { setIsReadyForFetch } = fetchSlice.actions

export default fetchSlice.reducer;
