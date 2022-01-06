import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	container: {
		// alignItems: "center",
		// justifyContent: "center",
		// [theme.breakpoints.down("xs")]: {
		// 	// maxHeight: "100vh",
		// 	// width: "100vw",
		// },
	},
	card: {
		width: "700px",
		margin: "50px auto",
		[theme.breakpoints.down("xs")]: {
			margin: "10px",
			width: "inherit",
		},
	},
	image: {
		[theme.breakpoints.down("xs")]: {
			width: "100%",
			objectFit: "cover",
		},
	},
	typo: {
		wordWrap: "wrap",
	},
	beenhere: {
		fontSize: "100px",
		color: "#00be00",
	},
	wrap: {
		margin: 0,
	},
}));
