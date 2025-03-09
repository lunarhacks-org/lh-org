import React, { useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import "./Home.css";
import LHLogo from "../img/lh.png"; // Import the "lh" image
import aboutTxt from "../img/aboutUs.png";
import industry from "../img/industry.png";
import parts from "../img/participants.png";
import hacks from "../img/threeHackathons.png";

const Home = () => {
  const sectionRefs = {
    lunarhacks: useRef(null),
    about: useRef(null),
    pastEvents: useRef(null),
    ourTeam: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    // Check if there's a hash in the URL and scroll to the corresponding section
    const hash = window.location.hash.slice(1); // Get the section from URL hash
    if (hash && sectionRefs[hash]?.current) {
      sectionRefs[hash].current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div>
      <Navbar sectionRefs={sectionRefs} />
      <section id="lunarhacks" ref={sectionRefs.lunarhacks} className="section">
        <img 
          src={LHLogo} 
          alt="LunarHacks Logo"
          className="lh-logo"
        />
      </section>
      <section id="about" ref={sectionRefs.about} className="section">
      <img 
          src={aboutTxt} 
          alt="About Us"
          className="ab-txt"
        />
        <h2>we are v cool people</h2>
      </section>
      <section id="pastEvents" ref={sectionRefs.pastEvents} className="section">
        <h1>Past Events</h1>
          <img
          src={hacks}
          alt="three hackathons"
          className="hacks-img"
          />
        
        <img
        src={parts}
        alt="600+ participants"
        className="parts-img"
        />

        <img
          src={industry}
          alt="40+ industry profs"
          className="ind-img"
        />
      
      </section>
      <section id="ourTeam" ref={sectionRefs.ourTeam} className="section">
        <h1>Our Team</h1>
      </section>
      <section id="contact" ref={sectionRefs.contact} className="section">
        <h1>Contact Us!</h1>
      </section>
    </div>
  );
};

export default Home;
