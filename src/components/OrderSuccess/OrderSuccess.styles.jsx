import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	container: {
		position: "fixed",
		backgroundColor: "rgb(0,0,0,0.5)",
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
	},
	card: {
		height: "50vh",
		width: "30vw",
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		borderRadius: "5px",
		position: "absolute",
		margin: "auto",

		[theme.breakpoints.down("xs")]: {
			marginTop: theme.spacing(7),
			height: "100vh",
			width: "100vw",

			borderRadius: "0px",
		},
	},
	image: {
		[theme.breakpoints.down("xs")]: {
			width: "380px",
			borderRadius: "0px",
		},
	},
	typo: {
		wordWrap: "wrap",
	},
}));
