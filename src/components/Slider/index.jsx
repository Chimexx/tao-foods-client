import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

import { useStyles } from "./Slider.styles";
import { useSelector } from "react-redux";
import { getState } from "../../redux/productSlice";

const Slider = () => {
	const classes = useStyles();
	const { itemList } = useSelector(getState);

	if (!itemList) {
		return <div></div>;
	}

	return (
		<>
			<div className={classes.container}>
				<Slide>
					{itemList?.map((item) => (
						<div key={item._id}>
							<div
								className={classes.slide}
								style={{ backgroundImage: `url(${item.img})` }}
							></div>
						</div>
					))}
				</Slide>
			</div>
		</>
	);
};

export default Slider;
