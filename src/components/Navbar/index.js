import React, { useState, useRef } from "react";
import * as SC from "./styles.js";

const Navbar = () => {
	const [openNav, setOpenNav] = useState(false);

	const buttonsTweenRef = useRef();
	const linksTweenRef = useRef();

	const handleOpenNav = () => {
		setOpenNav(prevState => !prevState);
		buttonsTweenRef.current.getGSAP().play(0);
		linksTweenRef.current.getGSAP().play(0);
	};

	return (
		<SC.Navbar>
			<SC.NavLink to="/">
				<h1>Mom</h1>
			</SC.NavLink>
			<SC.Buttons openNav={openNav}>
				<SC.NavLink to="/">
					<li>Home</li>
				</SC.NavLink>
				<SC.NavLink to="/about">
					<li>About</li>
				</SC.NavLink>
				<SC.NavLink to="/commands">
					<li>Commands</li>
				</SC.NavLink>
				<SC.Premium to="/premium">
					<li>Premium</li>
				</SC.Premium>
			</SC.Buttons>
			<SC.BurgerContainer onClick={handleOpenNav}>
				<SC.Burger className="fa fa-bars" />
			</SC.BurgerContainer>
		</SC.Navbar>
	);
};

export default Navbar;
