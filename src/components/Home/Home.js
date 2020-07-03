import React, { useEffect } from "react";
import { TimelineLite } from "gsap/TweenMax";
import "./Home.css";
import mom from "../../assets/mom2.jpg";

const Home = () => {
  useEffect(() => {
    let tl = new TimelineLite();
    tl.fromTo(".mom", 0.3, { opacity: 0, x: -100 }, { opacity: 1, x: 0 })
      .fromTo(
        ".textcontainer",
        0.3,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0 }
      )
      .to("#add", 0.2, { opacity: 1, fontSize: "40px" }, "-=0.2");
  }, []);
  return (
    <div>
      <div className="homepage">
        <img className="mom" src={mom} alt="Beautiful mom" />
        <div className="textcontainer">
          <h1>
            <span className="momh1">Mom</span> bot
          </h1>
          <p>Your best friend for I don't know yet</p>
        </div>
      </div>
      <a
        href="https://discordapp.com/oauth2/authorize?client_id=541024861678600193&scope=bot&permissions=8"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button id="add">Add to Discord</button>
      </a>
    </div>
  );
};

export default Home;
