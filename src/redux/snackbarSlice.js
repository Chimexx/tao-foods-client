import { createSlice } from "@reduxjs/toolkit";

const snackbarSlice = createSlice({
	name: "snackbar",
	initialState: {
		snackbarType: "success",
		snackbarMessage: "",
		snackbarOpen: false,
	},
	reducers: {
		//Set Snackbar
		setSnackbar: (state, action) => {
			state.snackbarOpen = action.payload.snackbarOpen;
			state.snackbarMessage = action.payload.snackbarMessage;
			state.snackbarType = action.payload.snackbarType;
		},
	},
});
export const getSnackbar = (state) => state.snackbar;

export default snackbarSlice.reducer;
export const { setSnackbar } = snackbarSlice.actions;
