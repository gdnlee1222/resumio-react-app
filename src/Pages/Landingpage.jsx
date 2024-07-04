// LandingPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="main">
      <div className="paragraph">
        <h3>
          Highlight your skills and accomplishments with a <span>stunning resume created using Resumio✨</span>
        </h3>
        
          <h4>Your free online resume maker
        </h4>
      </div>
      <div className="button-container">
        <Link to="/home" className="button">Build your resume</Link>
      </div>
    </div>
  );
};

export default LandingPage;
