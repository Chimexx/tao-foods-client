import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";

const rootReducer = combineReducers({ items: productReducer, cart: cartReducer });

export const store = configureStore({
	reducer: rootReducer,
});
