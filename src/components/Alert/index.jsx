import { Button, IconButton, Snackbar } from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./Alert.styles";
import MuiAlert from "@material-ui/lab/Alert";
import { Close } from "@material-ui/icons";

const AlertMessage = ({ type, message }) => {
	const classes = useStyles({});

	const [alertOpen, setAlertOpen] = useState(false);
	const [open, setOpen] = useState(true);

	const handleClick = () => {
		setAlertOpen(true);
	};

	function Alert(props) {
		return <MuiAlert elevation={6} variant="filled" {...props} />;
	}

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setAlertOpen(false);
	};

	return (
		<div className={classes.root}>
			<Button variant="outlined" onClick={handleClick}>
				Open success snackbar
			</Button>
			<Snackbar
				open={alertOpen}
				autoHideDuration={3000}
				onClose={handleClose}
				variant={type}
				anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
				ContentProps={{ "aria-describedby": "message-id" }}
				action={[
					<IconButton key="close" onClick={handleClose}>
						<Close />
					</IconButton>,
				]}
			>
				<Alert onClose={handleClose} severity={type}>
					{message}
				</Alert>
			</Snackbar>
		</div>
	);
};

export default AlertMessage;
