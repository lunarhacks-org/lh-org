import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import "./Events.css";

const Events = () => {
  const sectionRefs = {
    lunarhacks: useRef(null),
    about: useRef(null),
    pastEvents: useRef(null),
    ourTeam: useRef(null),
    contact: useRef(null),
  };

  // Handle URL hash on load
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Get the section from URL hash
      if (hash && sectionRefs[hash]?.current) {
        sectionRefs[hash].current.scrollIntoView({ behavior: "smooth" });
      }
    };

    // Handle hash on initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="events">
      <Navbar sectionRefs={sectionRefs} />
      
    </div>
  );
};

export default Events;
