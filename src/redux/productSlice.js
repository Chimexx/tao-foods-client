import { createSlice } from "@reduxjs/toolkit";
import { itemFetch, itemsFetch, meatFetch, sauceFetch } from "./productApi";

const initialState = {
	itemList: [],
	item: [],
	meatList: [],
	sauceList: [],
	pending: false,
	error: false,
};

const productSlice = createSlice({
	name: "items",
	initialState,
	reducers: {},
	extraReducers: {
		[itemsFetch.pending]: (state) => {
			return { ...state, pending: true };
		},
		[itemsFetch.fulfilled]: (state, { payload }) => {
			return { ...state, pending: false, itemList: payload };

			// if (payload) {
			// 	return { ...state, pending: false, itemList: payload };
			// } else {
			// 	return { ...state, pending: true };
			// }
		},
		[itemsFetch.rejected]: (state) => {
			return { ...state, error: true, pending: false };
		},
		[itemFetch.fulfilled]: (state, { payload }) => {
			return { ...state, item: payload, pending: false };
		},
		[meatFetch.fulfilled]: (state, { payload }) => {
			return { ...state, meatList: payload, pending: false };
		},
		[sauceFetch.fulfilled]: (state, { payload }) => {
			return { ...state, sauceList: payload, pending: false };
		},
	},
});

export default productSlice.reducer;
export const getState = (state) => state.items;
