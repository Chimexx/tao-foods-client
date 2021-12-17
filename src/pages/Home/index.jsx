import { Container } from "@material-ui/core";
import Items from "../../components/Items";
import { useStyles } from "./Home.styles";
import Categories from "../../components/Categories";
import Slider from "../../components/Slider";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Home = () => {
	const classes = useStyles({});

	return (
		<div className={classes.wrapper}>
			<Container className={classes.container}>
				<Navbar />
				<Slider />
				<Categories />
				<Items />
			</Container>
			<Footer />
		</div>
	);
};

export default Home;
