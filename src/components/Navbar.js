import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../img/logo.png";
import "./Navbar.css";

const Navbar = ({ sectionRefs }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false); // Controls menu visibility

  // Function to scroll to section
  const scrollToSection = (section) => {
    setMenuOpen(false); // Close menu when an item is clicked
    if (location.pathname === "/events") {
      window.location.replace(`/#${section}`);
    } else {
      if (sectionRefs?.[section]?.current) {
        sectionRefs[section].current.scrollIntoView({ behavior: "smooth" });
      }
      window.location.hash = section;
    }
  };

  // Dynamic class for the navbar
  const navClass = location.pathname === "/events" ? "nav-events" : "nav-home";

  return (
    <nav className={`nav ${navClass}`}>
      <div className="nav-left">
        <button className="logo-button" onClick={() => scrollToSection("lunarhacks")}>
          <img src={logo} alt="Logo" className="section-logo" />
        </button>
      </div>

      {/* Hamburger Button */}
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Navigation Links */}
      <div className={`nav-right ${menuOpen ? "menu-open" : ""}`}>
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

// ✅ Make sure Navbar is exported correctly
export default Navbar;
