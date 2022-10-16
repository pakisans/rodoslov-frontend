import {createSlice} from "@reduxjs/toolkit";

export const dataManagement = createSlice({
    name: 'dataManagement',
    initialState: {
        title: '',
    },
    reducers: {
        setDataManagementTitle: (state, action) => {
            state.title = action.payload
        },
    }
});

export const { setDataManagementTitle } = dataManagement.actions

export default dataManagement.reducer;
