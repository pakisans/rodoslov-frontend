import {createSlice} from "@reduxjs/toolkit";
import {setUserToLocalStorage} from "../Base/OAuth";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: undefined,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
            setUserToLocalStorage(action.payload)
        },
    }
});

export const { setUser } = authSlice.actions

export default authSlice.reducer
