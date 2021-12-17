import { Container } from "@material-ui/core";
import { useLocation } from "react-router";
import Items from "../../components/Items";
import { useStyles } from "./ItemList.styles";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ItemList = () => {
	const classes = useStyles({});

	const location = useLocation();
	const cat = location.pathname.split("/")[2];

	return (
		<>
			<Navbar />
			<Container className={classes.container}>
				<Items cat={cat} />
			</Container>
			<Footer />
		</>
	);
};

export default ItemList;
