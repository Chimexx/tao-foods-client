import React from "react";
import { useStyles } from "./Footer.styles";
import logo from "../../images/tao.svg";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";

const Footer = () => {
	const classes = useStyles({});

	return (
		<div className={classes.container}>
			<div className={classes.leftContent}>
				<img src={logo} alt="" className={classes.logo} />
				<Link to="#">
					<Typography className={classes.typo}>Terms of Service </Typography>
				</Link>
				<Link to="#">
					<Typography className={classes.typo}>Copyright </Typography>
				</Link>
			</div>
			<div className={classes.rightContent}>
				<Typography className={classes.typo}>Connect with us </Typography>
				<div className={classes.iconContainer}>
					<Link to="/">
						<Twitter className={classes.icon} />
					</Link>
					<Link to="/">
						<Facebook className={classes.icon} />
					</Link>
					<Link to="/">
						<Instagram className={classes.icon} />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
