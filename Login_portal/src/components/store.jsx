import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features'
export default configureStore({
    reducer:{
        user: userReducer,
    }
})