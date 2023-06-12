import "./Header.css";
import logo from "../assets/logo.png";
import { useState } from "react";

function Header() {
  const [click, notclick] = useState(false);
  const handleClick = () => {
    notclick(!click);
  };
  return (
    <div id="Header">
      <nav>
        <a href="">
          {" "}
          <img id="logo" src={logo} alt="" />
        </a>
        <div>
          <ul id="navbar" className={click ? "#navbar active" : "#navbar"}>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Gallery</a>
            </li>
            <li>
              <a href="">Co-Traveller</a>
            </li>
            <li>
              <a href="">FAQs</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Register</a>
            </li>
          </ul>
        </div>
        <div id="nav-icon">
          <i
            id="bar"
            onClick={handleClick}
            className={click ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
      </nav>
    </div>
  );
}

export default Header;
