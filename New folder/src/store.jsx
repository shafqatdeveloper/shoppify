import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./featues/cart/CartSlice.jsx";

export const store = configureStore({
    reducer : {
        cart : CartReducer
    }
});
