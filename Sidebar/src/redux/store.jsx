import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";

const store =configureStore({
    reducer: {
        menu: sidebarSlice,
    }
})

export default store;