import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import "../index.css";

const Navbar = ({ sectionRefs }) => {
  const scrollToSection = (section) => {
    if (sectionRefs[section]?.current) {
      sectionRefs[section].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="nav">
      <div className="nav-left">
        <img
          src={logo}
          alt="Logo"
          className="section-logo"
          onClick={() => scrollToSection("lunarhacks")}
        />
      </div>
      <div className="nav-right">
        <button className="button" onClick={() => scrollToSection("about")}>
          About Us
        </button>
        <button className="button" onClick={() => scrollToSection("pastEvents")}>
          Past Events
        </button>
        <button className="button" onClick={() => scrollToSection("ourTeam")}>
          Our Team
        </button>
        <button className="button" onClick={() => scrollToSection("contact")}>
          Contact Us
        </button>
        <Link to="/events" className="spec-button">
          Events
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
