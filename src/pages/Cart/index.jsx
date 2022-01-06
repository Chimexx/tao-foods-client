import {
	Button,
	ButtonGroup,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Container,
	Typography,
} from "@material-ui/core";
import { AddCircleOutline, ArrowLeft, RemoveCircleOutline } from "@material-ui/icons";
import Divider from "@material-ui/core/Divider";
import { useStyles } from "./Cart.styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart, decQty, getCart, clearCart, getTotals } from "../../redux/cartSlice";
import { removeFromCart } from "../../redux/cartSlice";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import { setSnackbar } from "../../redux/snackbarSlice";

const Cart = (props) => {
	const classes = useStyles(props);
	const dispatch = useDispatch();

	const { cartItems, cartTotalAmount, cartTotalQty, takeAway } = useSelector(getCart);

	const handleAddToCart = (item) => {
		dispatch(addToCart(item));
		dispatch(getTotals());
	};
	const handleRemoveFromCart = (item) => {
		dispatch(removeFromCart(item));
		dispatch(getTotals());
		dispatch(
			setSnackbar({
				snackbarOpen: true,
				snackbarType: "success",
				snackbarMessage: `${item.title} removed from tray!`,
			})
		);
	};
	const handleDecrease = (item) => {
		dispatch(decQty(item));
		dispatch(getTotals());
	};
	const handleclearCart = () => {
		dispatch(clearCart());
		dispatch(getTotals());
		dispatch(
			setSnackbar({
				snackbarOpen: true,
				snackbarType: "success",
				snackbarMessage: `Tray is empty!`,
			})
		);
	};

	useEffect(() => {
		dispatch(getTotals());
	}, [dispatch]);

	return (
		<>
			<Navbar />
			<Container className={classes.container}>
				<div className={classes.cardcontainer}>
					<Typography component="h6" variant="h6" className={classes.title}>
						Your Tray
					</Typography>
					<div className={classes.topbar}>
						<Link to="/">
							<Button
								variant="outlined"
								size="small"
								color="primary"
								className={classes.backbutton}
							>
								<ArrowLeft /> Continue Shopping
							</Button>
						</Link>
						<Button
							variant="outlined"
							size="small"
							color="primary"
							className={classes.backbutton}
							onClick={handleclearCart}
						>
							Clear Tray
						</Button>
					</div>
					{cartItems.map((item) => (
						<Card className={classes.cartcard} key={item._id}>
							<CardActionArea className={classes.cardactionarea}>
								<CardMedia
									className={classes.media}
									component="img"
									alt="item img"
									height="200"
									image={item.img}
									title="Dish"
								/>
								<CardContent className={classes.content}>
									<div className={classes.details}>
										<div className={classes.typogroup}>
											<Typography component="h6" variant="h6">
												Dish: {item.title}
											</Typography>
											<Typography variant="subtitle2" className={classes.option}>
												Meat: {item.meat}
											</Typography>
											<Typography variant="body2" className={classes.option}>
												ID: {item._id}
											</Typography>
										</div>
										<div>
											<div className={classes.detailsright}>
												<Typography variant="h6" component="h6">
													₦ {(item.price + item.meatPrice) * item.quantity}
												</Typography>
												<ButtonGroup
													color="default"
													aria-label="outlined secondary button group"
													className={classes.btngrp}
												>
													<Button onClick={() => handleDecrease(item)}>
														<RemoveCircleOutline
															style={{ color: "bebebe" }}
															data-id={item._id}
														/>
													</Button>
													<Button>{item.quantity}</Button>
													<Button onClick={() => handleAddToCart(item)}>
														<AddCircleOutline
															style={{ color: "bebebe" }}
															data-id={item._id}
														/>
													</Button>
												</ButtonGroup>
											</div>
											<Button
												size="small"
												color="primary"
												onClick={() => handleRemoveFromCart(item)}
												className={classes.remove}
											>
												Remove
											</Button>
										</div>
									</div>
								</CardContent>
							</CardActionArea>
						</Card>
					))}
				</div>

				<div className={classes.summary}>
					<Typography component="h6" variant="h6" className={classes.summarytitle}>
						Summary
					</Typography>
					<Card className={classes.cart}>
						<CardActionArea>
							<CardContent className={classes.summarycontent}>
								<div className={classes.listitem}>
									<span className={classes.listcontent}>Subtotal</span>
									<span className={classes.listcontent}>₦ {cartTotalAmount}</span>
								</div>
								<Divider />
								<div className={classes.listitem}>
									<span className={classes.listcontent}>Total Quantity</span>
									<span className={classes.listcontent}>{cartTotalQty}</span>
								</div>
								<Divider />
								<div className={classes.listitem}>
									<span className={classes.listcontent}>Take away plate</span>
									<span className={classes.listcontent}>₦ {takeAway * cartTotalQty}</span>
								</div>
								<Divider />
								<div className={classes.listitem}>
									<span type="total" className={classes.listcontent}>
										Total
									</span>
									<span type="total" className={classes.listcontent}>
										₦ {cartTotalAmount + takeAway * cartTotalQty}
									</span>
								</div>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Link to="/checkout">
								<Button
									size="medium"
									variant="outlined"
									color="primary"
									className={classes.checkoutbutton}
								>
									CHECKOUT NOW
								</Button>
							</Link>
						</CardActions>
					</Card>
				</div>
			</Container>
			<Footer />
		</>
	);
};

export default Cart;
