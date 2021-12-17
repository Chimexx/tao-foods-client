import { makeStyles } from "@material-ui/core";

import bg from "../../images/bg.svg";

export const useStyles = makeStyles((theme) => ({
	container: {
		marginTop: theme.spacing(10),
		marginBottom: theme.spacing(2),
		display: "grid",
		gridTemplateColumns: "repeat(2, 1fr)",
		minHeight: "calc(100vh - 100px)",

		[theme.breakpoints.down("sm")]: {
			display: "block",
		},
	},

	summary: {
		position: "fixed",
		Top: 0,
		right: theme.spacing(6),

		[theme.breakpoints.down("sm")]: {
			position: "relative",
			right: theme.spacing(0),
		},
	},
	summarytitle: {
		marginBottom: theme.spacing(2),
		color: "#8c8c8c",
		[theme.breakpoints.down("xs")]: {
			marginBottom: theme.spacing(0.3),
		},
	},
	cardcontainer: {
		marginBottom: theme.spacing(2),

		[theme.breakpoints.down("sm")]: {
			// padding: theme.spacing(2),
		},
	},
	cartcard: {
		marginBottom: theme.spacing(2),
		background: `url(${bg})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundAttachment: "fixed",
		display: "flex",

		// [theme.breakpoints.down("sm")]: {
		// 	marginRight: theme.spacing(2),
		// 	// maxWidth: "380px",
		// },
	},
	topbar: {
		display: "flex",
		justifyContent: "space-between",
	},
	title: {
		color: "#8c8c8c",
		marginBottom: theme.spacing(1),
		borderBottom: "solid 2px #ff8400",

		[theme.breakpoints.down("xs")]: {
			borderBottom: "solid 1px #ff8400",
		},
	},
	cardactionarea: {
		display: "flex",
		justifyContent: "flex-start",

		[theme.breakpoints.down("sm")]: {
			display: "block",
		},
	},
	content: {
		padding: 0,
		minWidth: 400,

		[theme.breakpoints.down("sm")]: {
			padding: theme.spacing(2),
			display: "block",
			minWidth: 0,
		},
	},
	summarycontent: {
		minWidth: 400,
		padding: 0,

		[theme.breakpoints.down("sm")]: {
			display: "block",
			minWidth: 0,
		},
	},
	media: {
		maxWidth: 200,

		[theme.breakpoints.down("sm")]: {
			maxWidth: 480,
			// width: 360,
			height: 200,
		},
	},
	typogroup: {
		maxWidth: "300px",
		textWrap: "wrap",
		borderRight: "1px solid #f1f1f1",
		paddingRight: theme.spacing(2),
		marginLeft: theme.spacing(2),
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",

		[theme.breakpoints.down("sm")]: {
			maxWidth: "100%",
			borderRight: "none",
			paddingRight: theme.spacing(0),
			marginRight: theme.spacing(0),
			marginLeft: theme.spacing(0),
		},
	},

	remove: { marginTop: theme.spacing(1), marginLeft: theme.spacing(2) },
	details: {
		display: "flex",
		marginRight: theme.spacing(2),

		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
			marginRight: theme.spacing(0),
		},
	},
	detailsright: {
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),

		[theme.breakpoints.down("xs")]: {
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			marginTop: theme.spacing(2),
			paddingTop: theme.spacing(1),
			borderTop: "1px solid #e6e6e6",
			marginLeft: theme.spacing(0),
		},
	},
	btngrp: {
		marginTop: theme.spacing(4),

		[theme.breakpoints.down("xs")]: {
			marginTop: theme.spacing(0),
		},
	},
	option: {
		marginTop: theme.spacing(1),

		[theme.breakpoints.down("sm")]: {
			marginTop: theme.spacing(0.5),
		},
	},

	button: {
		marginBottom: theme.spacing(2),

		[theme.breakpoints.down("sm")]: {
			width: "100%",
		},
	},
	checkoutbutton: {
		color: theme.button.success.main,
	},

	backbutton: {
		marginBottom: theme.spacing(2),
	},
	listitem: {
		display: "flex",
		justifyContent: "space-between",
		width: "100%",

		[theme.breakpoints.down("sm")]: {
			width: "100%",
		},
	},
	listcontent: {
		fontSize: 18,
		padding: theme.spacing(2, 3),

		[theme.breakpoints.down("sm")]: {
			padding: theme.spacing(1, 2),
		},
	},
}));
