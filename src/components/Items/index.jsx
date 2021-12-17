import { useEffect } from "react";
import SingleItem from "../SingleItem";
import { Grid } from "@material-ui/core";
import { useStyles } from "./Items.styles";
import { itemsFetch } from "../../redux/productApi";
import { useDispatch, useSelector } from "react-redux";
import { getState } from "../../redux/productSlice";
import { MetroSpinner } from "react-spinners-kit";

const Items = ({ cat }) => {
	const classes = useStyles({});
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(itemsFetch(cat));
	}, [cat, dispatch]);

	const { itemList, pending, error } = useSelector(getState);

	if (pending) {
		return (
			<div className={classes.spinner}>
				<MetroSpinner />
			</div>
		);
	} else if (error) {
		return <div className={classes.spinner}> Please check your network </div>;
	} else {
		return (
			<div className={classes.container}>
				<Grid
					container
					direction="row"
					justifyContent="flex-start"
					alignItems="flex-start"
					spacing={2}
				>
					{itemList?.map((item) => (
						<Grid item xs={12} md={3} key={item._id}>
							<SingleItem item={item} key={item._id} />
						</Grid>
					))}
				</Grid>
			</div>
		);
	}
};

export default Items;
