import React from "react";
import "./About.css";
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
);

const About = () => {
  return (
    <div className="about">
      <div className="info">
        <h1>
          What is <span className="momh1">Mom</span> Bot for?
        </h1>
        <p>Mom was made in memory of a very special cat.</p>{" "}
        <p>
          I wanted to commemorate my love for mom the cat in the form of this, a
          discord bot that all can enjoy.
        </p>
      </div>
    </div>
  );
};

export default About;
