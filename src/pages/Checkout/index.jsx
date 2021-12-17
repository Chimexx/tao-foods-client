import {
	Button,
	Card,
	CardActionArea,
	CardContent,
	Container,
	TextField,
	Typography,
} from "@material-ui/core";
import { ArrowLeft } from "@material-ui/icons";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getCart, clearCart } from "../../redux/cartSlice";
import { useStyles } from "./Checkout.styles";
import { PaystackButton } from "react-paystack";
import { useDispatch } from "react-redux";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Checkout = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const classes = useStyles({});

	//states
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [instructions, setInstructions] = useState("");
	const [paymentMethod, setPaymentMethod] = useState("");

	// const [complete, setComplete] = useState(false);

	const handleclearCart = () => {
		dispatch(clearCart());
	};

	const { cartItems, cartTotalAmount, cartTotalQty, takeAway } = useSelector(getCart);
	const publicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY;
	const amount = (cartTotalAmount + takeAway * cartTotalQty) * 100;
	const reference = new Date().getTime().toString();

	const order = {
		items: cartItems,
		amount: cartTotalAmount + takeAway * cartTotalQty,
		shipping: { firstName, lastName, phoneNumber, email, address },
		instructions,
		totalQty: cartTotalQty,
		reference,
		paymentMethod,
	};

	const postData = async () => {
		const response = await fetch("https://tao-foods.herokuapp.com/api/orders/new", {
			method: "POST",
			body: JSON.stringify(order),
			headers: { "Content-type": "application/json" },
		});
		const orderRes = await response.json();
		console.log(orderRes);
	};
	const componentProps = {
		reference,
		email,
		amount,
		metadata: {
			firstName,
			lastName,
			phoneNumber,
		},
		publicKey,
		text: "PAY ONLINE",
		onSuccess: () => {
			setPaymentMethod("Card");
			postData();
			setEmail("");
			setFirstName("");
			setLastName("");
			setPhoneNumber("");
			setAddress("");
			setInstructions("");
			handleclearCart();
			navigate("/orderSuccess");
		},
		// onClose: () => console.log("Transaction canceled"),
	};

	const payOnDelivery = () => {
		setPaymentMethod("PoD");
		postData();
		setEmail("");
		setFirstName("");
		setLastName("");
		setPhoneNumber("");
		setAddress("");
		setInstructions("");
		handleclearCart();
		navigate("/orderSuccess");
	};

	let complete = false;
	let info = true;
	if (firstName && lastName && email && phoneNumber && address && cartItems.length > 0 && amount > 100) {
		complete = true;
		info = false;
	}

	return (
		<>
			<Navbar />
			<Container className={classes.container}>
				<Link to="/cart">
					<Button variant="outlined" size="small" color="primary" className={classes.button}>
						<ArrowLeft /> Go Back
					</Button>
				</Link>
				<Card className={classes.root}>
					<CardActionArea>
						<CardContent>
							<Typography
								variant="h6"
								className={classes.title}
								color="textSecondary"
								gutterBottom
							>
								Checkout
							</Typography>
							{info && <h6>Please fill the form below to place your order</h6>}
							<div className={classes.personal}>
								<TextField
									id="filled-basic"
									className={classes.item}
									type="text"
									size="small"
									label="First Name"
									variant="filled"
									color="primary"
									onChange={(e) => setFirstName(e.target.value)}
								/>
								<TextField
									id="filled-basic"
									className={classes.item}
									type="text"
									size="small"
									label="Last Name"
									variant="filled"
									color="primary"
									onChange={(e) => setLastName(e.target.value)}
								/>
								<TextField
									id="filled-basic"
									className={classes.item}
									type="number"
									size="small"
									label="Phone"
									variant="filled"
									color="primary"
									onChange={(e) => setPhoneNumber(e.target.value)}
								/>
								<TextField
									id="filled-basic"
									className={classes.item}
									type="email"
									size="small"
									label="Email"
									variant="filled"
									color="primary"
									onChange={(e) => setEmail(e.target.value)}
								/>

								<TextField
									id="filled-basic"
									className={classes.item}
									type="text"
									size="small"
									label="Address"
									variant="filled"
									multiline
									color="primary"
									helperText="Clearly described address to help locate you"
									onChange={(e) => setAddress(e.target.value)}
								/>
								<TextField
									id="filled-basic"
									className={classes.item}
									type="text"
									multiline
									size="small"
									label="Special notes"
									variant="filled"
									color="primary"
									helperText="Special instructions for delivery"
									onChange={(e) => setInstructions(e.target.value)}
								/>
							</div>
						</CardContent>
					</CardActionArea>
					{complete && (
						<div className={classes.btngrp}>
							<PaystackButton className={classes.onlinebtn} {...componentProps} />
							<Button className={classes.onlinebtn} onClick={payOnDelivery}>
								Pay on delivery
							</Button>
						</div>
					)}
				</Card>
			</Container>
			<Footer />
		</>
	);
};
export default Checkout;
