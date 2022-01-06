import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { getSnackbar, setSnackbar } from "../../redux/snackbarSlice";
import { useSelector, useDispatch } from "react-redux";

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		"& > * + *": {
			marginTop: theme.spacing(2),
		},
	},
}));

export default function CustomizedSnackbars() {
	const dispatch = useDispatch();
	const classes = useStyles();

	const { snackbarType, snackbarMessage, snackbarOpen } = useSelector(getSnackbar);

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		dispatch(setSnackbar(false, snackbarType, snackbarMessage));
	};

	return (
		<div className={classes.root}>
			<Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleClose}>
				<Alert onClose={handleClose} severity={snackbarType}>
					{snackbarMessage}
				</Alert>
			</Snackbar>
		</div>
	);
}
