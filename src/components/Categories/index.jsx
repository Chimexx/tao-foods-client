import React, { useState } from "react";
import { Paper, Tab, Tabs, Typography } from "@material-ui/core";
import { useStyles } from "./Categories.styles";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getState } from "../../redux/productSlice";

const Categories = () => {
	const classes = useStyles({});
	const navigate = useNavigate();

	const { itemList } = useSelector(getState);

	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleClick = (cat) => {
		cat === "all" && navigate("/");
		cat === "rice" && navigate("items/rice");
		cat === "swallow" && navigate("items/swallow");
		cat === "others" && navigate("items/others");
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
						<Tab label="All" onClick={() => handleClick("all")} className={classes.tab} />
						<Tab label="Rice" onClick={() => handleClick("rice")} className={classes.tab} />
						<Tab label="Swallow" onClick={() => handleClick("swallow")} className={classes.tab} />
						<Tab label="Others" onClick={() => handleClick("others")} className={classes.tab} />
					</Tabs>
				</Paper>
			</div>
		</>
	);
};

export default Categories;
