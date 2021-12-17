import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: "#000414",
		height: 40,
		display: "flex",
		marginTop: "20px",
		padding: "10px 40px",
		position: "relative",
		clear: "both",

		// bottom: 0,
		// left: 0,

		[theme.breakpoints.down("xs")]: {
			padding: "10px 15px",
			color: "#b9b9b9",
		},
	},
	logo: {
		width: 60,
		paddingRight: 10,
		borderRight: "1px solid #b9b9b9",
	},
	content: {
		display: "flex",
	},
	typo: {
		color: "#7c7c7c",
		padding: " 10px",
		textJustify: "center",
	},
}));
