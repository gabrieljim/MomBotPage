import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { FaDiscord } from "react-icons/fa";
import mom from "../../assets/mom2.jpg";
import circle from "../../assets/drawing.svg";

/***************** VARIANTS *****************/

const momContainerVariants = {
	hidden: {
		opacity: 0,
		rotate: -90,
		x: -200
	},
	visible: {
		opacity: 1,
		x: 0,
		rotate: 0,
		transition: {
			type: "tween",
			ease: "easeOut",
			duration: 0.5
		}
	}
};

const spin = keyframes`
  0% {
    transform: rotate(0deg) scale(1.25);
  }

	25% {
    transform: rotate(90deg) scale(1.5);
	}

  50% {
    transform: rotate(180deg) scale(1.25);
  }

	75% {
    transform: rotate(270deg) scale(1.5);
	}

  100% {
    transform: rotate(360deg) scale(1.25);
  }
`;

const textContainerVariants = {
	hidden: {
		opacity: 0,
		x: 200
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: "tween",
			ease: "easeOut",
			delay: 0.5,
			duration: 0.5
		}
	}
};

const addVariants = {
	hidden: {
		opacity: 0,
		y: 30
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: "tween",
			ease: "easeOut",
			delay: 1,
			duration: 0.5
		}
	}
};

/**************** COMPONENTS ****************/

export const Content = styled.div`
	background-color: #34495e;
	background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232c3e50' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
	padding-top: 50px;
	padding-bottom: 80px;
	height: calc(100vh - 60px);
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const HomeContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

export const MomContainer = styled(motion.div).attrs(() => ({
	variants: momContainerVariants,
	initial: "hidden",
	animate: "visible"
}))`
	position: relative;

	@media screen and (max-width: 768px) {
		margin-bottom: 40px;
	}
`;

export const Circle = styled(motion.img).attrs(() => ({
	//variants: circleVariants,
	animate: "visible",
	src: circle
}))`
	position: absolute;
	height: 100%;
	animation: ${spin} 15s linear infinite;
`;

export const Mom = styled.img.attrs(() => ({
	alt: "Beautiful mom",
	src: mom
}))`
	position: relative;
	width: auto;
	height: 320px;
	border-radius: 50%;

	@media screen and (max-width: 768px) {
		height: 210px;
	}
`;

export const TextContainer = styled(motion.div).attrs(() => ({
	variants: textContainerVariants,
	initial: "hidden",
	animate: "visible"
}))`
	display: flex;
	flex-direction: column;
	width: 35%;
	text-align: left;

	& h1 {
		font-size: 50px;
		margin-left: 0;
		margin-bottom: 20px;
	}

	& p {
		font-size: 30px;
	}

	@media screen and (max-width: 768px) {
		width: 80%;
		text-align: center;
	}
`;

export const MomTitle = styled.span`
	cursor: default;
	color: ${props => props.theme.purpleContrast};
`;

export const DiscordIcon = styled(FaDiscord)`
	font-size: 40px;
	margin-right: 16px;
`;

export const Add = styled(motion.a).attrs(() => ({
	variants: addVariants,
	initial: "hidden",
	animate: "visible"
}))`
	margin: 40px auto 0 0;
	position: relative;
	display: flex;
	align-items: center;
	margin-top: 40px;
	border: 5px solid ${props => props.theme.purpleContrast};
	background: linear-gradient(
		to right,
		${props => props.theme.purpleContrast} 50%,
		transparent 50%
	);
	background-size: 200% 100%;
	background-position: right bottom;
	color: ${props => props.theme.purpleContrast};
	padding: 20px;
	border-radius: 20px;
	font-size: 26px;
	transition: all 0.2s linear;

	&:hover {
		cursor: pointer;
		background-position: left bottom;
		color: ${props => props.theme.background};
	}

	@media screen and (max-width: 768px) {
		margin: 40px auto 0 auto;
	}
`;
