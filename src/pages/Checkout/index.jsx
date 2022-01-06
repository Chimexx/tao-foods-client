import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	Container,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
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
import { ClassicSpinner } from "react-spinners-kit";
import { publicRequest } from "../../requestMethods";
import { setSnackbar } from "../../redux/snackbarSlice";

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
	const [inputE, setInputE] = useState(false);
	const [loading, setLoading] = useState(false);

	console.log(paymentMethod);
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
		try {
			await publicRequest.post("orders/new", order);
			dispatch(
				setSnackbar({
					snackbarOpen: true,
					snackbarType: "success",
					snackbarMessage: `Order Placed!`,
				})
			);
		} catch (error) {
			console.log(error);
			dispatch(
				setSnackbar({
					snackbarOpen: true,
					snackbarType: "error",
					snackbarMessage: `There was a problem, Please return to your tray.`,
				})
			);
		}
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
			setLoading(true);
			postData();
			setEmail("");
			setFirstName("");
			setLastName("");
			setPhoneNumber("");
			setAddress("");
			setInstructions("");
			setLoading(false);
			handleclearCart();
			navigate("/orderSuccess");
		},
		onClose: () => alert("Transaction canceled"),
	};

	const payOnDelivery = async () => {
		setLoading(true);
		await postData();
		setEmail("");
		setFirstName("");
		setLastName("");
		setPhoneNumber("");
		setAddress("");
		setInstructions("");
		handleclearCart();
		navigate("/orderSuccess");
		setLoading(false);
	};

	let complete = false;
	if (firstName && lastName && email && phoneNumber && address && cartItems.length > 0 && amount > 100) {
		complete = true;
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

							<Typography className={classes.info}>
								Complete the form to proceed with your order
							</Typography>
							<div className={classes.personal}>
								<TextField
									required
									error={inputE}
									helperText={inputE && "Field Required"}
									className={classes.item}
									type="text"
									size="small"
									label="First Name"
									variant="filled"
									color="primary"
									onChange={(e) => setFirstName(e.target.value)}
								/>
								<TextField
									className={classes.item}
									required
									error={inputE}
									helperText={inputE && "Field Required"}
									type="text"
									size="small"
									label="Last Name"
									variant="filled"
									color="primary"
									onChange={(e) => setLastName(e.target.value)}
								/>
								<TextField
									className={classes.item}
									required
									error={inputE}
									helperText={inputE && "Field Required"}
									type="number"
									size="small"
									label="Phone"
									variant="filled"
									color="primary"
									onChange={(e) => setPhoneNumber(e.target.value)}
								/>
								<TextField
									required
									error={inputE}
									helperText={inputE && "Field Required"}
									className={classes.item}
									type="email"
									size="small"
									label="Email"
									variant="filled"
									color="primary"
									onChange={(e) => setEmail(e.target.value)}
								/>

								<TextField
									className={classes.item}
									required
									error={inputE}
									helperText={inputE && "Field Required, Your concise location"}
									type="text"
									size="small"
									label="Address"
									variant="filled"
									multiline
									color="primary"
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
						<>
							<CardActions className={classes.personal}>
								<FormControl variant="filled">
									<InputLabel id="demo-simple-select-filled-label">
										SELECT PAYMENT METHOD
									</InputLabel>
									<Select
										labelId="demo-simple-select-filled-label"
										id="demo-simple-select-filled"
										value={paymentMethod}
										size="small"
										onChange={(e) => setPaymentMethod(e.target.value)}
									>
										<MenuItem value="online">PAY ONLINE</MenuItem>
										<MenuItem value="on-delivery">PAY ON DELIVERY</MenuItem>
									</Select>
								</FormControl>
								{loading ? (
									<ClassicSpinner color="#ffae00" size={20} />
								) : (
									<>
										{paymentMethod === "on-delivery" ? (
											<Button className={classes.onlinebtn} onClick={payOnDelivery}>
												Pay on delivery
											</Button>
										) : (
											<PaystackButton
												className={classes.onlinebtn}
												{...componentProps}
											/>
										)}
									</>
								)}
							</CardActions>
						</>
					)}
				</Card>
			</Container>
			<Footer />
		</>
	);
};
export default Checkout;
