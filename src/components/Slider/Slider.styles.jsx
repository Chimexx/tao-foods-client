import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	container: {
		// marginTop: theme.spacing(10),
	},
	slide: {
		margin: "30px px",
		backgroundSize: "cover",
		backgroundPosition: "center",
		justifyContent: "space-between",
		height: "200px",
		borderRadius: "10px",
		padding: "10px 10px",
		color: "#ffffff",

		[theme.breakpoints.down("sm")]: {
			height: "150px",
		},
	},
}));
