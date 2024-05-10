import { createSlice } from '@reduxjs/toolkit';

const cartSlice =createSlice({
    name: 'cart',
    initialState:{
        cartItems: [],
       
    },
    reducers:{     
        addItem(state, {payload}){
            const newItemsId =payload.id;
            const existItem =state.cartItems.find((item) =>item.id === newItemsId);
            if(existItem){
                existItem.quantity++;
            }else{
                state.cartItems.push(payload);
            }
        },
        increaseItem(state, {payload}){
            state.cartItems =state.cartItems.map((item) =>{
                if(item.id ===payload){
                     item.quantity++;
                }
                return item;
            })
        },

        decreaseItem(state, {payload}){
            state.cartItems =state.cartItems.map((item) =>{
                if(item.id === payload){
                    item.quantity--;
                }
                return item;
            }).filter(item =>item.quantity !== 0);
        },

        removeItem(state, { payload}){
           state.cartItems= state.cartItems.filter((item) =>item.id !== payload);
        },
        clearAllCart(state){
            state.cartItems =[];
        }
    }
})
export const { addItem, removeItem, increaseItem,getTotal , decreaseItem, clearAllCart } =cartSlice.actions;
export default cartSlice.reducer;