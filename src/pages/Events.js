import React from "react";
import "./Events.css";
import lumText from "../img/lumText.png";
import lumLogo from "../img/lumLogo.png";
import Navbar from "../components/Navbar";

const Events = () => {
  return (
    <div className="events">
      <Navbar />
      {/* FIX NAV BAR STUFF! */}
      <div className="header-container">
        <img src={lumLogo} alt="Lum Logo" className="lum-logo" />
        <img src={lumText} alt="Lum Text" className="lum-text" />
      </div>
    </div>
  );
};

export default Events;
