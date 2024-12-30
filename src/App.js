import React, { useRef } from "react";
import "./index.css";

const App = () => {
  // Create refs for each section
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  // Scroll to a section using its ref
  const scrollToSection = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Navigation Buttons */}
      <nav className="nav">
        <div className="nav-left">
          <button className="button" onClick={() => scrollToSection(section1Ref)}>
            Section 1
          </button>
        </div>
        <div className="nav-right">
          <button className="button" onClick={() => scrollToSection(section2Ref)}>
            Section 2
          </button>
          <button className="button" onClick={() => scrollToSection(section3Ref)}>
            Section 3

          </button>
          <a href="/page" className="button">
            Events
          </a>
        </div>
      </nav>

      {/* Sections Information here*/}
      <section ref={section1Ref} className="section">
        <h1>Welcome to Section 1</h1>
 
      </section>

      <section ref={section2Ref} className="section">
        <h1>Welcome to Section 2</h1>
       
      </section>

      <section ref={section3Ref} className="section">
        <h1>Welcome to Section 3</h1>
        Contact Us
      </section>

    </div>
  );
};

export default App;
