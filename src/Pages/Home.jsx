import React from "react";
import { useNavigate } from "react-router-dom";
import BasicInfo from "../Components/BasicInfo";
import Profile from "../Components/Profile";
import Experience from "../Components/Experience";
import Education from "../Components/Education";
import Skills from "../Components/Skills";
import Preview from "../Components/Preview";
import { useBasicInfo } from "../Context/InfoProvider";
import "./Home.css";

const Home = () => {
  const { currentPage, dispatch, basicInfo, image } = useBasicInfo();
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/'); // Navigate to the default home page
  };

  const handleBack = () => {
    const pages = ["basicinfo", "profile", "experience", "education", "skills"];
    const currentIndex = pages.indexOf(currentPage);
    if (currentIndex > 0) {
      dispatch({ type: "SET_CURRENT_PAGE", payload: pages[currentIndex - 1] });
    }
  };

  const handleContinue = () => {
    const pages = ["basicinfo", "profile", "experience", "education", "skills"];
    const currentIndex = pages.indexOf(currentPage);

    if (currentPage === "basicinfo") {
      if (!basicInfo.name || !basicInfo.email || !basicInfo.phone || !image) {
        alert("Please fill out your Full Name, Email, Phone, and upload your image before continuing.");
        return;
      }
    }

    if (currentIndex < pages.length - 1) {
      dispatch({ type: "SET_CURRENT_PAGE", payload: pages[currentIndex + 1] });
    } else {
      if (!basicInfo.name || !basicInfo.email || !basicInfo.phone || !image) {
        alert("You cannot print the resume unless all required fields are filled out properly.");
        return;
      }
      navigate("/final");
    }
  };

  return (
    <div className="home-container">
      <div className="preview-section">
        <Preview basicInfo={basicInfo} image={image} />
      </div>
      <div className="form-section">
        {currentPage === "basicinfo" && <BasicInfo />}
        {currentPage === "profile" && <Profile />}
        {currentPage === "experience" && <Experience />}
        {currentPage === "education" && <Education />}
        {currentPage === "skills" && <Skills />}
        <div className="navigation-buttons">
          {currentPage === "basicinfo" ? (
            <button onClick={handleHome}>
              Home
            </button>
          ) : (
            <button onClick={handleBack}>
              Back
            </button>
          )}
          <button onClick={handleContinue}>
            {currentPage === "skills" ? "Finish" : "Continue"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
