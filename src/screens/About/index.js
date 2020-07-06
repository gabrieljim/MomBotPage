import React from "react";
import "./styles.css";
import * as SC from "./styles";


/*
function importAll(r) {
	return r.keys().map(r);
}

const images = importAll(
  require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
);
*/

const About = () => {
	return (
		<SC.About>
			<SC.Info>
				<h1>
					What is <SC.MomTitle>Mom</SC.MomTitle> Bot for?
				</h1>
				<p>Mom was made in memory of a very special cat.</p>{" "}
				<p>
					I wanted to commemorate my love for mom the cat in the form of this, a
					discord bot that all can enjoy.
				</p>
			</SC.Info>
		</SC.About>
	);
};

export default About;
