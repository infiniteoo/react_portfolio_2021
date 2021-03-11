import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";


const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <canvas></canvas>
        <h1>Troy Dorman</h1>
        <h1>full stack web development</h1>
        <Typed
          className="typed-text"
          strings={["React/Redux", "Node/Express", "MySQL/NoSQL", "Linux Administration"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link smooth={true} to="contacts" offset={-110} className="btn-main-offer">contact me</Link>
      </div>
    </div>
  )
}

export default Header;
