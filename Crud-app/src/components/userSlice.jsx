import { createSlice } from '@reduxjs/toolkit';
import {data} from './Data'
const userSlice =createSlice({
    name : 'users',
    initialState: data, 
    reducers: {
        addUser : (state, action) =>{
            state.push(action.payload);
        } ,
        editUser:(state, action) =>{
            const {id, name, email} =action.payload;
             const updtUser =state.find(user =>user.id == id);
            if(updtUser){
                updtUser.name= name;
                updtUser.email = email;
            }
        },
        deleteUser: (state, action)=>{
            const {id} =action.payload;
            const deleteUser =state.find(user =>user.id == id);
            if(deleteUser){
               return state.filter(ele =>ele.id !==id)
            }
            
          
        }
    } 
})
export const { addUser, editUser, deleteUser } =userSlice.actions;
export default userSlice.reducer; 