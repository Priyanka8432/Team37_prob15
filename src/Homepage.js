import React from "react";
import "./Homepage.css";

const Homepage = () => {
  const handleDrop = (e) => {
    e.preventDefault();
    alert("File dropped! (Handle upload logic here)");
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    alert("Upload triggered (simulate file picker)");
  };

  return (
    <div className="homepage-container">
      <h1 className="glitch-tagline">404 ERROR : Developer Not Needed</h1>

      <div
        className="drag-box"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={handleClick}
      >
        Drag & Drop Your Product Files Here or Click to Upload
      </div>

      <div className="template-suggestions">
        <h3>Recommended Templates for You</h3>
        <ul>
          <li>🌟 Modern SaaS Landing</li>
          <li>🎨 Creative Portfolio</li>
          <li>🛍️ E-Commerce Splash Page</li>
        </ul>
      </div>

      <button className="generate-button">Generate</button>
    </div>
  );
};

export default Homepage;
