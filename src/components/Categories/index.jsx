import React, { useState } from "react";
import { Paper, Tab, Tabs, Typography } from "@material-ui/core";
import { useStyles } from "./Categories.styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getState } from "../../redux/productSlice";

const Categories = () => {
	const classes = useStyles({});
	const { itemList } = useSelector(getState);

	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	if (!itemList) {
		return <div></div>;
	}

	return (
		<>
			<div className={classes.categories}>
				<Typography component="h5" variant="h5" className={classes.option}>
					Categories
				</Typography>

				<Paper className={classes.root}>
					<Tabs value={value} onChange={handleChange} indicatorColor="primary" centered>
						<Link to="/">
							<Tab label="All" className={classes.tab} />
						</Link>
						<Link to="items/fries">
							<Tab label="Fries" className={classes.tab} />
						</Link>
						<Link to="items/rice">
							<Tab label="Rice" className={classes.tab} />
						</Link>
						<Link to="items/swallow">
							<Tab label="Swallow" className={classes.tab} />
						</Link>
					</Tabs>
				</Paper>
			</div>
		</>
	);
};

export default Categories;
