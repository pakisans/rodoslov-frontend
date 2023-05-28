import {createSlice} from "@reduxjs/toolkit";

export const dataManagement = createSlice({
    name: 'dataManagement',
    initialState: {
        title: '',
        trigger: false,
    },
    reducers: {
        setDataManagementTitle: (state, action) => {
            state.title = action.payload
        },
        setTrigger: (state, action) => {
            state.trigger = action.payload
        }
    }
});

export const { setDataManagementTitle, setTrigger } = dataManagement.actions

export default dataManagement.reducer;
