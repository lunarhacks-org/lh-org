import React from "react";
import "./index.css"; // Use the global CSS file

const AnotherPage = () => {
  return (
    <div className="another-page">
      {/* Styled button linking to the home page */}
      <a href="/" className="event-button">LunarHacks</a>
      
      <h1>Welcome to Another Page</h1>
      <p>This is the content of the other page.</p>
    </div>
  );
};

export default AnotherPage;
