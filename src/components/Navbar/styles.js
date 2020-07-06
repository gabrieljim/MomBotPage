import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const navVariants = {
	hidden: {
		opacity: 0,
		y: "-50%"
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5
		}
	}
};

export const Navbar = styled(motion.nav).attrs(() => ({
	variants: navVariants,
	initial: "hidden",
	animate: "visible"
}))`
	width: 100%;
	background-color: ${props => props.theme.background};
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	height: 60px;
	position: sticky;
	top: 0;
	z-index: 1;
	box-shadow: 0 0 4px ${props => props.theme.nav};

	@media screen and (max-width: 800px) {
		justify-content: space-between;
		padding-left: 30px;
		padding-right: 30px;
	}
`;

export const Buttons = styled.ul`
  width: 50%;
  height: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
	transition: all 0.2s;

	& a {
		display: block;
		height: 100%;
		font-weight: bold;
		color: ${props => props.theme.text};
		width: 100%;
		display: flex;
		align-items: center;
		text-align: center;
		justify-content: center;
		transition: all 0.2s linear;
		background: linear-gradient(to right, ${props =>
			props.theme.purpleContrast} 50%, ${props => props.theme.background} 50%);
		background-size: 200% 100%;
		background-position: right bottom;
	}

	& a:hover {
		color: ${props => props.theme.background};
		background-position: left bottom;
	}

	@media screen and (max-width: 800px) {
		opacity: 0;
    position: absolute;
		display: none;
    top: 59px;
    right: 0;
		height: 100vh;
		width: 100vw;
		background-color: ${props => props.theme.nav};
		flex-direction: column;
		transform: translateX(200px);

		& a {
			opacity: 0;
			translateX(200px);
			font-size: 33px;
			align-items: center;
			justify-content: flex-start;
			padding: 28px;
		}
	}
`;

export const NavLink = styled(Link)`
	color: ${props => props.theme.text};
	text-align: center;
`;

export const Premium = styled(Link)`
	color: ${props => props.theme.contrast};

	&&:hover {
		color: ${props => props.theme.nav};
		background-color: #f1c40f;
	}
`;

export const BurgerContainer = styled.div`
	display: none;

	@media screen and (max-width: 800px) {
		display: block;
	}
`;

export const Burger = styled.i`
	font-size: 27px;

	@media screen and (max-width: 800px) {
	}
`;
