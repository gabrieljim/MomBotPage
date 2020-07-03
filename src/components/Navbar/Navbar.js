import React, { useEffect, useState } from "react";
import { TimelineLite } from "gsap/TweenMax";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  let [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    let tl = new TimelineLite();
    tl.fromTo(".navbar", 0.6, { x: -200 }, { opacity: 1, x: 0 });
  }, []);

  useEffect(() => {
    if (openNav) {
      Array.from(document.getElementsByClassName("navbar")[0].children).forEach(
        el => {
          if (el.id === "burger-container") return;
          el.addEventListener("click", () => {
            setOpenNav(false);
            document
              .getElementsByClassName("navbar")[0]
              .classList.remove("open");
          });
        }
      );
    }
  }, [openNav]);
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Mom</h1>
      </Link>
      <ul className="buttons">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/commands">
          <li>Commands</li>
        </Link>
        <Link to="/premium" id="premium">
          <li>Premium</li>
        </Link>
      </ul>
      <div
        id="burger-container"
        onClick={() => {
          document.getElementsByClassName("navbar")[0].classList.toggle("open");
          setOpenNav(true);
        }}
      >
        <i id="burger" className="fa fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;
