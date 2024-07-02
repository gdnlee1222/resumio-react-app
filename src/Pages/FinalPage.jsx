import React, { useRef } from "react";
import { useBasicInfo } from "../Context/InfoProvider";
import { RiArrowLeftLine, RiDownload2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import ReactToPrint from "react-to-print";
import ProfileLogo from "../assets/profile-logo.png";
import "./Final.css";

const FinalPage = () => {
  const { basicInfo, profile, education, experience, skills, image, newEducation } = useBasicInfo();
  const navigate = useNavigate();
  const componentRef = useRef();

  const handleBack = () => {
    navigate("/home");
  };

  return (
    <div className="final-page-container">
      <h5>Final Preview</h5>
      <div className="controls">
        <div>
          <ReactToPrint
            trigger={() => (
              <button className="download-button">
                <RiDownload2Line />
                Download
              </button>
            )}
            content={() => componentRef.current}
          />
        </div>
        <div>
          <button onClick={handleBack} className="back-button">
            <RiArrowLeftLine />
            Back
          </button>
        </div>
      </div>
      <div ref={componentRef} className="preview-container">
        {/* Header */}
        <div className="header-container">
          <div className="image-container">
            <img src={image || ProfileLogo} alt="Profile logo" className="profile-image" />
          </div>
          <div className="header-info">
            <div className="name">{basicInfo.name}</div>
            <div className="profession">{basicInfo.profession}</div>
          </div>
          <div className="contact-info">
            <div className="address">{basicInfo.address}</div>
            <div className="city-state-zip">
              {basicInfo.barangay}, {basicInfo.city}, {basicInfo.zip}
            </div>
            <div className="email">{basicInfo.email}</div>
            <div className="phone">{basicInfo.phone}</div>
          </div>
        </div>

        {/* Profile */}
        <div className="profile-container">
          <p className="profile-text">{profile}</p>
        </div>

        {/* Professional Experience */}
        {experience.length > 0 && (
          <div className="experience-container">
            <h2 className="section-header">Professional Experience</h2>
            {experience.map((exp, id) => (
              <div key={id} className="experience-item">
                <div className="position">{exp.position}</div>
                <div className="company-year">
                  {exp.company} | {exp.startyear} - {exp.endyear}
                </div>
                <div className="description">{exp.describe}</div>
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        <div className="education-container">
          <h2 className="section-header">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="school">{edu.schoolName}</div>
              <div className="school-details">
                {edu.schoolLocation} | {edu.schoolStartYear} - {edu.schoolEndYear}
              </div>
              <div className="degree">{edu.degree} in {edu.fieldOfStudy}</div>
            </div>
          ))}
        </div>

        {/* Masteral */}
        {newEducation.length > 0 && (
          <div className="masteral-container">
            <h2 className="section-header">Masteral</h2>
            {newEducation.map((edu, id) => (
              <div key={id} className="masteral-item">
                <div className="course">{edu.course}</div>
                <div className="institution-details">
                  at {edu.institution} | {edu.startDate} - {edu.endDate}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        <div className="skills-container">
          <h2 className="section-header">Skills</h2>
          <ul className="skills-list">
            {skills.map((skill, index) => (
              <li key={index} className="skill">{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FinalPage;
