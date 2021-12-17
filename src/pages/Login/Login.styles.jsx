import { makeStyles } from "@material-ui/core";
import Splash from "../../images/Splash1.svg";

export const useStyles = makeStyles((theme) => ({
	toolbar: {
		background: `url(${Splash})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		display: "flex",
		justifyContent: "space-between",
		backgroundColor: "#FF8400",
		height: 50,

		[theme.breakpoints.down("sm")]: {
			height: 40,
		},
	},
}));
