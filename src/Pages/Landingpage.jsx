// LandingPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="main">
      <div className="paragraph">
        <p>
          Highlight your skills and accomplishments with a stunning resume created using Resumio
        </p>
        <span>
          free online resume maker from <span>Resumio</span>
        </span>
      </div>
      <div className="button-container">
        <Link to="/home" className="button">Build your resume</Link>
      </div>
    </div>
  );
};

export default LandingPage;
