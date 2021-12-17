import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	container: {
		marginTop: theme.spacing(10),
		marginBottom: theme.spacing(2),
		width: "60vw",
		minHeight: "calc(100vh - 100px)",

		[theme.breakpoints.down("sm")]: {
			width: "100%",
		},
	},

	personal: {
		display: "grid",
		gridTemplateColumns: "repeat(2, 1fr)",

		[theme.breakpoints.down("sm")]: {
			gridTemplateColumns: "repeat(1, 1fr)",
		},
	},
	item: {
		margin: theme.spacing(2, 2),
		[theme.breakpoints.down("xs")]: {
			margin: theme.spacing(2, 0),
		},
	},

	button: {
		marginBottom: theme.spacing(1),
	},
	onlinebtn: {
		height: "40px",
		padding: "10px, 20px",
		border: "1px solid #ff8400",
		borderRadius: "5px",
		background: "white",
		cursor: "pointer",
		fontSize: 16,
		margin: "8px",
		fontWeight: 600,
		color: "#ff8400",

		[theme.breakpoints.down("sm")]: {
			height: "30px",
			fontSize: 14,
		},
	},
	btngrp: {
		display: "grid",
		gridTemplateColumns: "repeat(2, 1fr)",
		justifyContent: "space-between",
	},
}));
