import React, { useRef } from "react";
import "./index.css";
import logo from './logo.png'; 
import grace from './img/grace.jpg'
import aroob from './img/aroob.png'
import sophie from './img/sophie.jpeg'
import tishya from './img/tishya.jpg'
import vivan from './img/vivan.jpeg'
import silly from './img/silly.jpg'

const App = () => {
  // Create refs for each section
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);


  // Scroll to a section using its ref
  const scrollToSection = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMouseEnter = (e) => {
    const sillyImage = e.target.getAttribute("data-silly"); // Get the "silly" image path
    if (sillyImage) {
      e.target.src = sillyImage; // Change the src to the silly image
    }
  };
  
  const handleMouseLeave = (e) => {
    const originalImage = e.target.getAttribute("alt"); // Use the alt text to determine the original image
    if (originalImage === "grace") {
      e.target.src = grace; // Reset to the original image
    } else if (originalImage === "tishya") {
      e.target.src = tishya;
    } else if (originalImage === "aroob") {
      e.target.src = aroob;
    } else if (originalImage === "sophie") {
      e.target.src = sophie;
    } else if (originalImage === "vivan") {
      e.target.src = vivan;
    }
  };
  
  return (
    <div>
      {/* Navigation Buttons */}
      <nav className="nav">
        <div className="nav-left">
            <img
              src={logo} // Path to your logo image
              alt="Logo"
              className="section-logo"
              onClick={() => scrollToSection(section1Ref)} // Scroll to Section 1
            />
          </div>
          <div className="nav-right">
            <button className="button" onClick={() => scrollToSection(section2Ref)}>
              About Us
            </button>

            <button className="button" onClick={() => scrollToSection(section3Ref)}>
              Past Events
            </button>
            <button className="button" onClick={() => scrollToSection(section4Ref)}>
              Our Team
            </button>
            <button className="button" onClick={() => scrollToSection(section5Ref)}>
              Contact Us
            </button>

            <a href="/page" className="spec-button">
              Events
            </a>
          </div>
        </nav>
      

      {/* Sections Information here*/}
      <section ref={section1Ref} className="section">
        <h1>LunarHacks</h1>
 
      </section>

      <section ref={section2Ref} className="section">
        <h1>About Us</h1>

      </section>

      <section ref={section3Ref} className="section">
        <h1>Past Events</h1>
      </section>

      <section ref={section4Ref} className="section">
        <h1>Our Team</h1>

        <div className="image-container">
          <img 
            src={grace} 
            alt="grace" 
            className="img" 
            data-silly={silly}
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
          />
          <img 
            src={tishya} 
            alt="tishya" 
            className="img" 
            data-silly={silly} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
          />
          <img 
            src={aroob} 
            alt="aroob" 
            className="img" 
            data-silly={silly}
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
          />
          <img 
            src={sophie} 
            alt="sophie" 
            className="img" 
            data-silly={silly}
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
          />
          <img 
            src={vivan} 
            alt="vivan" 
            className="img" 
            data-silly={silly}
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
          />
          </div>

      </section>

      <section ref={section5Ref} className="section">
        <h1>Contact Us!</h1>
      </section>

    </div>
  );
};

export default App;
