import React from "react";
import "./index.css"; // Use the same CSS file for consistent styling

const Page = () => {
  return (
    <div className="page">
      <h1>Welcome to Another Page</h1>
      <p>This is the content of the other page.</p>
      <a href="/" className="button">Go Back to Home</a>
    </div>
  );
};

export default Page;
