import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	categories: { marginTop: theme.spacing(2) },

	option: {
		color: "#3d3d3d",
		[theme.breakpoints.down("xs")]: {
			fontSize: 16,
		},
	},
	tab: {
		color: "#ff8400",
	},
}));
