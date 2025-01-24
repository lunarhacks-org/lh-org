import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import "../index.css";

const Home = () => {
  const sectionRefs = {
    about: useRef(null),
    pastEvents: useRef(null),
    ourTeam: useRef(null),
    contact: useRef(null),
  };

  return (
    <div>
      <Navbar sectionRefs={sectionRefs} />
      <section ref={sectionRefs.lunarhacks} className="section">
        <h1>LunarHacks</h1>
      </section>
      <section ref={sectionRefs.about} className="section">
        <h1>About Us</h1>
      </section>
      <section ref={sectionRefs.pastEvents} className="section">
        <h1>Past Events</h1>
      </section>
      <section ref={sectionRefs.ourTeam} className="section">
        <h1>Our Team</h1>
      </section>
      <section ref={sectionRefs.contact} className="section">
        <h1>Contact Us!</h1>
      </section>
    </div>
  );
};

export default Home;
