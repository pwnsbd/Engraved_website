import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grommet } from "grommet";
import { Menu as MenuIcon } from "grommet-icons";
import { grommet } from "grommet/themes";
import logo from "../../img/logo.png";
import { deepMerge } from "grommet/utils";
import "./Navbar.css";

const myTheme = deepMerge(grommet, {
  global: {
    colro: "white",
  },
});

const navdata = [
  { to: "/", label: "Home" },
  { to: "/Gallery", label: "Gallery" },
];

export const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [click, setClick] = useState(false);

  const hanldeClick = () => {
    setClick(!click);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  return (
    <>
      {width >= 790 ? (
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo">
              <img src={logo} height={100} width={150} />
            </Link>
            <div className="menu-icon">
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/How-Its-Done" className="nav-links">
                  How Its Done
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/About Us" className="nav-links">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      ) : (
        <div>
          <nav className="navbar-small">
            <Link to="/" style={{ justifySelf: "start", alignSelf: "left" }}>
              <img src={logo} height={100} width={150} />
            </Link>
            <MenuIcon className="menu-icon-small" onClick={hanldeClick} />

            <div className="menu-icon">
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <div >
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <Link to="/" className="nav-links" onClick={hanldeClick}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/How-Its-Done"
                    className="nav-links"
                    onClick={hanldeClick}
                  >
                    How Its Done
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/Contact Us"
                    className="nav-links"
                    onClick={hanldeClick}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>{" "}
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
export default Navbar;
