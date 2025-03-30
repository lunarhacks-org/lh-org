import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import "./Events.css";
import SoLLogo from "../img/sollogo.svg";
import SoLText from "../img/soltext.svg";
import Sparkle from "../img/sparkle.svg";
import Ross from "../img/Ross.png";
import VV from "../img/VV.png";
import Nokia from "../img/NOKIA.png";
import DPI from "../img/DPI.png";
import LH from "../img/logo.png";
import syrc from "../img/syrc.png";

// should auto go to the start of the page

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
        sectionRefs[hash].current.scrollIntoView({ behavior: "smooth", block: "start" });
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
    <div 
      className="sol"
    >
      {/* Styled button linking to the home page */}
      <a href="/" className="event-button" >LunarHacks</a>
      
      <div 
        style={{ display:"flex" }}
      >
        <img 
          src={SoLLogo} alt="Spark of Luminosity logo"
          style={{ width:"50%" }}
        />
        <div
          style={{ width:"50%", paddingTop:"6%", paddingBottom:"10%", display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center" }}
        >
          <img src={SoLText} alt="Spark of Luminosity" 
            style={{ width:"80%" }}
          />
          <div>
            <p
              style={{ color:"#EC70A1", fontWeight:"bold", fontSize:"24px", marginBottom:"24px" }}
            >
              April 26th @ Carleton University
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScbndoP_zVvj2RsKam4-mmZ6n_YTY5-LmsqQERjhe_FAnFYfg/viewform?usp=sharing" className="reg-button"
              style={{ fontSize:"28px", fontWeight:"bold", paddingLeft:"10%", paddingRight:"10%" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              REGISTER NOW!
            </a>
          </div>
        </div>
      </div>
      <div
        style={{ display:"flex", justifyContent:"space-between", marginTop:"18px"
          }}
      >
        <div>
          <p className="solheader">WHAT IS IT?</p>
          <p className="soltext" >
            This spring LunarHacks and Spark Youth Robotics Club are presenting Spark of Luminosity! A children's symposium packed with a full day of workshops, crafts, experiments, and swag.
            Come join us to learn about coding, robotics, and tons of epic STEAM concepts!
          </p>
          
        </div>
        <img
        src={Sparkle}
        alt="sparkle"
        className="sparkle"
        />

      </div>
      <div
        style={{ marginTop:"18px" }}
      >
        <p className="solheader">WHO CAN PARTICIPATE?</p>
        <p className="soltext" >
          Any children in grade 1 to 8!</p>
          <p className="soltext" >Grade 9 or older? Apply to become a volunteer!</p>
          <p className="soltext" >16 and older? Apply to become a speaker!</p>
          <div
        style={{ marginTop:"5vh" }}
      ></div>

          <a 
              href="https://forms.gle/tFciNSJS3PhvvMHy8" className="reg-button"
              style={{ fontSize:"28px", fontWeight:"bold", paddingLeft:"3%", paddingRight:"3%" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              APPLY TO VOLUNTEER OR BECOME A SPEAKER!
            </a>
      </div>
      <div
        style={{ marginTop:"60px" }}
      >
        <p className="solheader">OUR SPONSORS</p>
        <p className="soltext" > A huge thank you to our sponsors to make this event possible!</p>
        
              <div className="sponsor-logos-container">
        
              <a 
          href="https://www.rossvideo.com/" 
          className="sponsorLogo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Ross} alt="Ross Video Ltd." />
        </a>


  
        <a 
          href="https://www.nokia.com/careers/our-locations/canada/" 
          className="sponsorLogo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Nokia} alt="Nokia" />
        </a>
        <a 
          href="https://carleton.ca/vv/" 
          className="vvLogo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={VV} alt="Virtual Ventures" />
        </a>

        <a 
          href="https://dpi-canada.com/" 
          className="sponsorLogo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={DPI} alt="DPI" />
        </a>
      </div>




        <p className="solheader">I HAVE MORE QUESTIONS!</p>
        <p className="soltext">
  Email us at 
  <a href="mailto:hello@lunarhacks.com" style={{ color:"#BA1757", fontWeight:"bold" }}> hello@lunarhacks.com</a> 
  <span style={{ margin: "0 4px" }}>or</span> 
  <a href="mailto:spark.youthrc@gmail.com" style={{ color:"#BA1757", fontWeight:"bold" }}> spark.youthrc@gmail.com</a>; 
  we'd be happy to chat!
</p>


<div className="orgLogos-container">
  <a 
    href="https://www.instagram.com/lunarhacks/" 
    className="orgLogos"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={LH} alt="Lunar Hacks" />
  </a>

  <span className="separator">×</span>

  <a 
    href="https://syrc.ca/" 
    className="orgLogos"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={syrc} alt="Spark Youth Robotics Club" />
  </a>
</div>



      </div>
    </div>
  );
};

export default Events;
