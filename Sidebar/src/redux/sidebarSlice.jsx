import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice =createSlice({
    name: 'menu',
    initialState: {
        isOpen: false,
    },
    reducers:{
        setSidebar(state){
            state.isOpen =true;
        },
        closeSidebar(state){
            state.isOpen =false;
        },
        
       
    }
})

export const {setSidebar, closeSidebar, toggleSidebar} =sidebarSlice.actions;
export default sidebarSlice.reducer;