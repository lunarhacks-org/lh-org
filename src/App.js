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
        <button className="button" onClick={() => scrollToSection(section1Ref)}>
          Section 1
        </button>
        <button className="button" onClick={() => scrollToSection(section2Ref)}>
          Section 2
        </button>
        <button className="button" onClick={() => scrollToSection(section3Ref)}>
          Section 3
        </button>
        <a href="/page" className="button">
          Another Page
        </a>
      </nav>

      {/* Sections */}
      <section ref={section1Ref} className="section" style={{ backgroundColor: "#f4f4f4" }}>
        <h1>Section 1</h1>
        <p>This is the content of Section 1.</p>
      </section>
      <section ref={section2Ref} className="section" style={{ backgroundColor: "#eaeaea" }}>
        <h1>Section 2</h1>
        <p>This is the content of Section 2.</p>
      </section>
      <section ref={section3Ref} className="section" style={{ backgroundColor: "#dcdcdc" }}>
        <h1>Section 3</h1>
        <p>This is the content of Section 3.</p>
      </section>
    </div>
  );
};

export default App;
