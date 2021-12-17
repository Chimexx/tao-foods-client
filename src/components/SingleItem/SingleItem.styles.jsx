import { makeStyles } from "@material-ui/core";
import bg from "../../images/bg.svg";

export const useStyles = makeStyles((theme) => ({
	card: {
		marginTop: theme.spacing(2),
		background: `url(${bg})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
	},
	title: {
		[theme.breakpoints.down("xs")]: {
			fontSize: 18,
		},
	},
}));
