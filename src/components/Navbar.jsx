import React from "react";
import { useState } from "react";
import "../assets/navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [mobileIcon, setMobileIcon] = useState(false);
  const handleClick = () => setMobileIcon((icon) => !icon);
  const closedMenu = () => setMobileIcon(false);
  return (
    <div className="header">
      <div className="logo">
        Shlok <span>Shrestha</span>
      </div>
      <div className="navbar">
        <ul id="nav-links" className={mobileIcon ? "active" : "nav-links"}>
          <li className="nav-link">
            <Link
              to="homepage"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closedMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav-link">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              onClick={closedMenu}
            >
              About
            </Link>
          </li>
          <li className="nav-link">
            <Link
              to="skill"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              onClick={closedMenu}
            >
              Skill
            </Link>
          </li>
          <li className="nav-link">
            <Link
              to="project"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
              onClick={closedMenu}
            >
              Project
            </Link>
          </li>
          <li className="nav-link">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              onClick={closedMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="nav-icon cursor-pointer" onClick={handleClick}>
          <i
            className={mobileIcon ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
