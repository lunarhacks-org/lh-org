import React from "react";
import "./index.css"; // Use the global CSS file

const AnotherPage = () => {
  return (
    <div className="another-page">
      {/* Styled button linking to the home page */}
      <a href="/" className="event-button">LunarHacks</a>
      
      <h1>Spark x Lunar Hacks</h1>
      <p>best workshop everrrr!!!! please come</p>
    </div>
  );
};

export default AnotherPage;
