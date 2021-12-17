import { createAsyncThunk } from "@reduxjs/toolkit";

export const itemsFetch = createAsyncThunk("items/itemsFetch", async (cat) => {
	try {
		const endpoint = cat
			? `https://tao-foods.herokuapp.com/api/dishes?category=${cat}`
			: "https://tao-foods.herokuapp.com/api/dishes";

		return await (await fetch(endpoint))?.json();
	} catch (error) {
		console.log(error);
	}
});

export const itemFetch = createAsyncThunk("items/itemFetch", async (id) => {
	try {
		const endpoint = `https://tao-foods.herokuapp.com/api/dishes/find/${id}`;
		return await (await fetch(endpoint))?.json();
	} catch (error) {
		console.log(error);
	}
});

export const meatFetch = createAsyncThunk("items/meatFetch", async () => {
	try {
		const endpoint = "https://tao-foods.herokuapp.com/api/meat";
		return await (await fetch(endpoint))?.json();
	} catch (error) {
		console.log(error);
	}
});

export const sauceFetch = createAsyncThunk("items/sauceFetch", async () => {
	try {
		const endpoint = "https://tao-foods.herokuapp.com/api/sauce";
		return await (await fetch(endpoint))?.json();
	} catch (error) {
		console.log(error);
	}
});
