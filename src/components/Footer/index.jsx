import React from "react";
import { useStyles } from "./Footer.styles";
import logo from "../../images/tao.svg";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const Footer = () => {
	const classes = useStyles({});

	return (
		<div className={classes.container}>
			<img src={logo} alt="" className={classes.logo} />
			<div className={classes.content}>
				<Link to="#">
					<Typography className={classes.typo}>Terms of Service </Typography>
				</Link>
				<Typography> </Typography>
			</div>
		</div>
	);
};

export default Footer;
