import React from "react";
import { Toolbar, AppBar } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import { useStyles } from "./NavBar.styles";
import { ShoppingBasketOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCart } from "../../redux/cartSlice";
import logo from "../../images/tao-white.svg";

const Navbar = () => {
	const classes = useStyles({});
	const { cartItems } = useSelector(getCart);

	return (
		<AppBar position="fixed" className={classes.appBar}>
			<Toolbar className={classes.toolbar}>
				<Link to="/">
					<img src={logo} alt="tao" className={classes.logo} />
				</Link>

				<Link to="/cart">
					<div className={classes.icons}>
						<Badge badgeContent={cartItems.length} color="secondary" className={classes.badge}>
							<ShoppingBasketOutlined />
						</Badge>
					</div>
				</Link>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
