import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import { useStyles } from "./SingleItem.styles";

const SingleItem = ({ item }) => {
	const classes = useStyles({});

	return (
		<Card className={classes.card} key={item._id}>
			<CardActionArea>
				<CardMedia
					component="img"
					alt={item.title}
					height="200"
					image={item.img}
					title="Assorted food"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2" className={classes.title}>
						{item.title}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{item.desc}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Link to={`/item/${item._id}`}>
					<Button size="small" variant="outlined" color="primary" className={classes.button}>
						Choose Options
					</Button>
				</Link>
			</CardActions>
		</Card>
	);
};

export default SingleItem;
