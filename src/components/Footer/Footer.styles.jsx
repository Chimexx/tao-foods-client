import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: "#000414",
		display: "flex",
		marginTop: "20px",
		padding: "10px 40px",
		position: "relative",
		clear: "both",
		justifyContent: "space-between",

		[theme.breakpoints.down("xs")]: {
			flexDirection: "column",
			padding: "10px 15px",
			color: "#b9b9b9",
		},
	},
	logo: {
		width: 60,
		paddingRight: 10,
		borderRight: "1px solid #414141",

		[theme.breakpoints.down("xs")]: {
			borderRight: "none",
		},
	},
	icon: {
		color: "#929292",
		margin: "0 10px",
		cursor: "pointer",
	},
	leftContent: {
		display: "flex",
		paddingRight: 10,
	},
	rightContent: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",

		// paddingRight: 10,
	},
	typo: {
		color: "#7c7c7c",
		padding: " 10px",
		textJustify: "center",
	},
	copy: {
		paddingRight: 10,
		borderRight: "1px solid #414141",

		color: "#7c7c7c",
		padding: " 10px",
		textJustify: "center",
	},
}));
