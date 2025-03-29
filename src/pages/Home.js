import React, { useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import "./Home.css";
import LHLogo from "../img/lh.png"; // Import the "lh" image
import aboutTxt from "../img/aboutUs.png";
import industry from "../img/industry.png";
import parts from "../img/participants.png";
import hacks from "../img/threeHackathons.png";
import lh3 from "../img/lh3.jpg";
import lhOrg from "../img/lhOrg.jpg";
import grace from "../img/grace.jpg";
import aroob from "../img/aroob.png";
import tishya from "../img/tishya.jpg"
import vivian from "../img/vivan.jpeg";
import sophie from "../img/sophie.jpeg";

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
        <h2>LunarHacks strives to engage youth in the fields of
STEM. We wish to create an encouraging environment
for our participants of all ages to build the next
generation of STEM leaders while breaking barriers that
exist in today's society. The galaxy’s the limit.
</h2>
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
      <h3>
        Interested in <span style={{ textDecoration: 'underline' }}>sponsoring</span> or <span style={{ textDecoration: 'underline' }}>starting a chapter</span>?
      </h3>
      <h4>
        Reach out at <a href="mailto:hello@lunarhacks.com" style={{ color:"#F7D683", fontWeight:"normal" }}> hello@lunarhacks.com</a> !
      </h4>

    

    <div className="past">
      <img
      src={lh3}
      className="lh-past"
      />
      <img
      src={lhOrg}
      className="lh-past"
      />

    </div >
      </section>
      <section id="ourTeam" ref={sectionRefs.ourTeam} className="section">
        <h1>Our Team</h1>

        <div className="team">
            
          <div className="profile">
            <img
            src={aroob}
            className="person"
            />
            <h3>aroob</h3>
            </div>

            <div className="profile">
            <img
            src={tishya}
            className="person"
            />
            <h3>tishya</h3>
            </div>

            <div className="profile">
            <img
            src={vivian}
            className="person"
            />
            <h3>vivian</h3>
            </div>

            <div className="profile">
            <img
            src={sophie}
            className="person"
            />
            <h3>sophie</h3>
            </div>

            <div className="profile">
            <img
            src={grace}
            className="person"
            />
            <h3>linda</h3>
          </div>

        </div>
        <div className="team">
            
          
          <div className="profile">
            <img
            src={aroob}
            className="person"
            />
            <h3>anerie</h3>
            </div>

            <div className="profile">
            <img
            src={tishya}
            className="person"
            />
            <h3>ariel</h3>
            </div>

            <div className="profile">
            <img
            src={vivian}
            className="person"
            />
            <h3>eileen</h3>
            </div>

            <div className="profile">
            <img
            src={sophie}
            className="person"
            />
            <h3>emily</h3>
            </div>

        </div>


{/* add spacing between names -> perhaps try columns within a flex*/}

      </section>
      <section id="contact" ref={sectionRefs.contact} className="section">

      <h5>Contact Us!</h5>

      <h4 style={{ fontSize: "20px" }}>
        We'd love to answer any inquires you have. </h4>

      <h5 style={{ fontSize: "30px" , fontWeight: "normal"}}>
      <a href="mailto:hello@lunarhacks.com" style={{ color: "inherit" }}>
    hello@lunarhacks.com
  </a>
      </h5>

      <footer className="footer">
  © made with ♡ by the LunarHacks team
</footer>


      </section>
    </div>
  );
};

export default Home;
