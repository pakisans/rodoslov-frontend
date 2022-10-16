import { configureStore } from '@reduxjs/toolkit'
import authSlice  from './Slices/AuthSlice'
import DataManagementSlice from './Slices/DataManagementSlice'
import FetchSlice from './Slices/FetchSlice'

export default configureStore({
    reducer : {
        auth: authSlice,
        fetch: FetchSlice,
        dataManagement: DataManagementSlice
    }
})