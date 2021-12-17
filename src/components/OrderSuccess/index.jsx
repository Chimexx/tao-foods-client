import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./OrderSuccess.styles";
import Congrats from "../../images/congrats.jpg";

const OrderSuccess = () => {
	const classes = useStyles({});

	return (
		<div className={classes.container}>
			<Card className={classes.card}>
				<CardActionArea>
					<CardMedia
						className={classes.image}
						component="img"
						alt="Congrats image"
						height="140"
						image={Congrats}
						title="Congrats image"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							Order Placed!
						</Typography>
						<Typography
							variant="body2"
							color="textSecondary"
							component="p"
							className={classes.typo}
						>
							Thanks for your patronage, we sure hope you'll enjoy your meal. Your order will
							arrive soon.
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Link to="/">
						<Button size="small" variant="outlined" style={{ width: "100%" }} color="primary">
							Continue to home
						</Button>
					</Link>
				</CardActions>
			</Card>
		</div>
	);
};

export default OrderSuccess;
