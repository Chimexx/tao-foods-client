import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},

	container: {
		marginTop: theme.spacing(10),
		minHeight: "calc(100vh - 150px)",
	},

	categories: {
		margin: "10px auto",
		display: "block",

		[theme.breakpoints.down("sm")]: {
			margin: "20px auto",
		},
	},
	option: {
		color: "#444",
		marginBottom: "5px",
		[theme.breakpoints.down("sm")]: {
			fontSize: "16px",
		},
	},
}));
