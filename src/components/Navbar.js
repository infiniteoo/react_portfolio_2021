import React from "react";
/* import logo from "../logo.png"; */
import { Link } from "react-scroll";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-dark fixed-top text-center"
      id="myNavBar"
    >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
      </button>

      <ul className="navbar-nav  mx-auto text-center">
        <li className="nav-item active">
          <Link smooth={true} to="home" className="nav-link" href="#">
            Home <span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} to="about" offset={-60} className="nav-link">
            about me
          </Link>
        </li>
        <li className="nav-item">
          <Link
            smooth={true}
            to="services"
            offset={-60}
            className="nav-link"
            href="#"
          >
            services
          </Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} to="experience" offset={-60} className="nav-link">
            experience
          </Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} to="portfolio" offset={-60} className="nav-link">
            portfolio
          </Link>
        </li>

        <li className="nav-item">
          <Link smooth={true} to="contacts" offset={-60} className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
