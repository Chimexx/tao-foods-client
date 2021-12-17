import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	spinner: {
		backgroundColor: "rgba(255, 132, 0)",
		borderRadius: "30px",
		width: "100px",
		margin: "20px 0",
	},
	container: {
		marginTop: theme.spacing(10),
		width: "70vw",
		minHeight: "calc(100vh - 100px)",

		[theme.breakpoints.down("sm")]: {
			width: "100%",
		},
	},
	media: {
		maxWidth: 400,
		margin: "0 auto",

		[theme.breakpoints.down("sm")]: {
			width: "100vw",
			height: 200,
		},
	},

	tray: {
		marginTop: theme.spacing(3.5),
	},
	btngrp: {
		marginTop: theme.spacing(0),
		borderColor: "bebebe",

		[theme.breakpoints.down("sm")]: {
			marginTop: theme.spacing(2),
		},
	},
	span: {
		fontSize: "10px",
		color: "#aaa",

		// [theme.breakpoints.down("sm")]: {
		// 	width: 380,
		// 	height: 200,
		// },
	},
	content: {
		margin: "0 auto",
		// [theme.breakpoints.down("sm")]: {
		// 	width: 380,
		// 	height: 200,
		// },
	},
	card: {
		display: "flex",
		marginBottom: theme.spacing(2),
		// margin: "0 auto",
		marginLeft: 0,
		justifyContent: "space-between",
		alignItems: "center",

		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
		},
	},
	title: {
		marginBottom: theme.spacing(2),
		[theme.breakpoints.down("xs")]: {
			marginBottom: theme.spacing(0.5),
			fontSize: 18,
		},
	},
	desc: {
		marginBottom: theme.spacing(2),
		[theme.breakpoints.down("xs")]: {
			marginBottom: theme.spacing(0.5),
			fontSize: 12,
		},
	},

	checkoutbutton: {
		color: theme.button.success.main,
		marginBottom: theme.spacing(1),
		marginRight: theme.spacing(1),

		[theme.breakpoints.down("sm")]: {
			width: "100%",
		},
	},
	item: {
		marginBottom: theme.spacing(2),
		marginRight: theme.spacing(1),
	},
	button: {
		marginBottom: theme.spacing(1),
		marginRight: theme.spacing(1),

		[theme.breakpoints.down("sm")]: {
			width: "100%",
		},
	},
	addbutton: {
		marginBottom: theme.spacing(1),
		marginRight: theme.spacing(1),
		color: theme.button.primary.main,
		borderColor: theme.button.primary.main,

		hover: {
			"&:hover": {
				borderColor: theme.button.primary.main,
			},
		},

		[theme.breakpoints.down("sm")]: {
			width: "100%",
		},
	},
	backbutton: {
		marginBottom: theme.spacing(1),
	},
	soupandmeat: {
		display: "flex",
		justifyContent: "space-between",

		[theme.breakpoints.down("sm")]: {
			display: "block",
			width: "100%",
		},
	},
}));
