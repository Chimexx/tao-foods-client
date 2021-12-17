import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	grid: {
		paddingTop: theme.spacing(1),

		[theme.breakpoints.down("sm")]: {},
	},
	container: {
		marginTop: theme.spacing(8),
		minHeight: "calc(100vh - 100px)",
	},
}));
