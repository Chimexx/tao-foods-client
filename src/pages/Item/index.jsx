import {
	Button,
	ButtonGroup,
	Card,
	CardContent,
	CardMedia,
	Container,
	MenuItem,
	TextField,
	Typography,
} from "@material-ui/core";
import { AddCircleOutline, ArrowLeft, RemoveCircleOutline } from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getState } from "../../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./Item.styles";
import { addToCart } from "../../redux/cartSlice";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { MetroSpinner } from "react-spinners-kit";
import { setSnackbar } from "../../redux/snackbarSlice";

const Item = () => {
	const classes = useStyles({});
	const location = useLocation();
	const dispatch = useDispatch();

	const id = location.pathname.split("/")[2];

	const [meat, setMeat] = useState("");
	const [sauce, setSauce] = useState("");
	const [price, setPrice] = useState(false);
	const [meatPrice, setMeatPrice] = useState("");
	const [quantity, setQuantity] = useState(1);

	const { itemList, sauceList, meatList, pending, error } = useSelector(getState);
	const item = itemList.find((item) => item._id === id);

	const handleChange = (e) => {
		e.preventDefault();

		setMeat(e.target.value);
		setMeatPrice(parseInt(e.currentTarget.dataset.price));
		setPrice(true);
	};

	const handleAddToCart = () => {
		dispatch(
			addToCart({
				...item,
				quantity,
				meat,
				meatPrice,
				sauce,
			})
		);
		dispatch(
			setSnackbar({
				snackbarOpen: true,
				snackbarType: "success",
				snackbarMessage: `${item.title} added to tray!`,
			})
		);
	};

	const set = (action) => {
		if (action === "inc") {
			setQuantity(quantity + 1);
		}
		if (action === "dec") {
			if (quantity === 1) {
				setQuantity(1);
			} else {
				setQuantity(quantity - 1);
			}
		}
	};

	if (pending) {
		return (
			<>
				<Navbar />
				<div className={classes.spinner}>
					<MetroSpinner />
				</div>
			</>
		);
	}

	if (error) {
		return (
			<>
				<Navbar />
				<div>Please Check your network</div>
			</>
		);
	}

	return (
		<>
			<Navbar />
			<Container className={classes.container}>
				<Link to="/">
					<Button variant="outlined" size="small" color="primary" className={classes.backbutton}>
						<ArrowLeft /> Go Back
					</Button>
				</Link>
				<Card className={classes.card}>
					<CardMedia
						component="img"
						className={classes.media}
						alt=""
						height="400"
						image={item.img}
						title="Assorted food"
					/>
					<CardContent className={classes.content}>
						<Typography component="h5" variant="h5" className={classes.title}>
							{item.title}
						</Typography>
						<Typography variant="subtitle1" className={classes.desc}>
							{item.desc}
						</Typography>
						<Typography variant="subtitle1" className={classes.price}>
							Price:
							{price
								? ` ₦${(item.price + meatPrice) * quantity}`
								: ` ₦${item.price} - ₦${item.price + 500}`}
							{price ? "" : <span className={classes.span}> (depending on meat type)</span>}
						</Typography>
						<div className={classes.soupandmeat}>
							<TextField
								select
								className={classes.item}
								label="Meat"
								size="small"
								style={{ width: "100%" }}
								variant="filled"
								value={meat}
								onChange={handleChange}
								helperText="Please select a type of meat"
							>
								{meatList?.map((meat) => (
									<MenuItem key={meat._id} value={meat.title} data-price={meat.price}>
										{meat.title}
									</MenuItem>
								))}
							</TextField>
							{item.requireSauce && (
								<TextField
									select
									className={classes.item}
									label="Soup or Stew"
									size="small"
									style={{ width: "100%" }}
									variant="filled"
									value={sauce}
									onChange={(e) => {
										setSauce(e.target.value);
									}}
									helperText="Type of soup or stew"
								>
									{sauceList?.map((sauce) => (
										<MenuItem key={sauce._id} value={sauce.title}>
											{sauce.title}
										</MenuItem>
									))}
								</TextField>
							)}
						</div>

						<ButtonGroup aria-label="outlined secondary button group" className={classes.btngrp}>
							<Button onClick={() => set("dec")}>
								<RemoveCircleOutline style={{ color: "bebebe" }} />
							</Button>
							<Button>{quantity}</Button>
							<Button onClick={() => set("inc")}>
								<AddCircleOutline style={{ color: "bebebe" }} />
							</Button>
						</ButtonGroup>
						<div className={classes.tray}>
							<Button
								variant="outlined"
								href="#outlined-buttons"
								className={classes.checkoutbutton}
								onClick={handleAddToCart}
							>
								ADD TO TRAY
							</Button>
							<Link to="/cart">
								<Button variant="outlined" color="primary" className={classes.button}>
									VIEW TRAY
								</Button>
							</Link>
						</div>
					</CardContent>
				</Card>
			</Container>
			<Footer />
		</>
	);
};

export default Item;
