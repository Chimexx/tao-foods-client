import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
	cartTotalQty: 0,
	cartTotalAmount: 0,
	takeAway: 100,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const itemIndex = state.cartItems.findIndex((item) => item._id === action.payload._id);
			if (itemIndex >= 0) {
				if (state.cartItems[itemIndex].meat === action.payload.meat) {
					state.cartItems[itemIndex].quantity += 1;
				} else {
					state.cartItems.push(action.payload);
				}
			} else {
				state.cartItems.push(action.payload);
			}

			localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
		},

		removeFromCart: (state, action) => {
			const newItems = state.cartItems.filter((item) => item._id !== action.payload._id);
			state.cartItems = newItems;

			localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
		},

		decQty: (state, action) => {
			const itemIndex = state.cartItems.findIndex((item) => item._id === action.payload._id);
			if (state.cartItems[itemIndex].quantity > 1) {
				state.cartItems[itemIndex].quantity -= 1;
			} else if ((state.cartItems[itemIndex].quantity = 1)) {
				const newItems = state.cartItems.filter((item) => item._id !== action.payload._id);
				state.cartItems = newItems;
			}
			localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
		},
		clearCart: (state, action) => {
			state.cartItems = [];
			localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
		},
		getTotals: (state, action) => {
			//reduce takes in a callback function(accumulator and an iterator)
			//and another parameter of initial values, in this case an object
			let { totalAmount, totalQuantity } = state.cartItems.reduce(
				(cartTotal, cartItem) => {
					const { price, quantity, meatPrice } = cartItem;

					//calculating total for each item in the cart
					const itemTotal = (price + meatPrice) * quantity;

					//summing up totals of each cartItem
					cartTotal.totalAmount += itemTotal;
					cartTotal.totalQuantity += quantity;

					return cartTotal;
				},
				//initial values
				{
					totalAmount: 0,
					totalQuantity: 0,
				}
			);

			state.cartTotalAmount = totalAmount;
			state.cartTotalQty = totalQuantity;
		},
	},
});

export const { addToCart, removeFromCart, decQty, getTotals, clearCart } = cartSlice.actions;
export const getCart = (state) => state.cart;
export default cartSlice.reducer;
