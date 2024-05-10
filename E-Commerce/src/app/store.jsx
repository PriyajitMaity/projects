import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../Redux/Product/ProductSlice";
import CartReducer from "../Redux/Cart/CartSlice";
import WishListReducer from "../Redux/wishlist/WishListSlice";
import FilterProductReducer from "../Redux/ProductFilter/FilterSlice";

export const store = configureStore({
  reducer: {
    products: ProductReducer,
    cart: CartReducer,
    wishlist: WishListReducer,
    productFilter: FilterProductReducer,
  },
});