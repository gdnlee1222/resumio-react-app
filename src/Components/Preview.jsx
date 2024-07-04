import React from "react";
import { useBasicInfo } from "../Context/InfoProvider";
import ProfileLogo from "../assets/profile-logo.png";
import "./Preview.css";

const Preview = () => {
  const { basicInfo, profile, education, experience, skills, image } = useBasicInfo();

  const educations = Array.isArray(education) ? education : [];

  return (
    <div className="preview">
      <div className="header-container">
        <div className="profile-image">
          <img src={image || ProfileLogo} alt="Profile" />
        </div>
        <div className="prev-header-info">
          <p className="name">{basicInfo.name}</p>
          <p className="profession">{basicInfo.profession}</p>
        </div>
        <div className="contact-info">
          <p className="address">{basicInfo.address}</p>
          <p className="city-state-zip">{basicInfo.barangay}, {basicInfo.city}, {basicInfo.zip}</p>
          <p className="email">{basicInfo.email}</p>
          <p className="phone">{basicInfo.phone}</p>
        </div>
      </div>

      <div className="profile-preview">
        <h2>Profile</h2>
        <p>{profile}</p>
      </div>

      <div className="experience-preview">
        <h2>Experience</h2>
        {experience.map((exp, index) => (
          <div key={index} className="experience-item-preview">
            <h3>{exp.position} <span> | {exp.company}</span></h3>
            <p>{exp.startyear} - {exp.endyear}</p>
            <p>{exp.describe}</p>
          </div>
        ))}
      </div>

      <div className="education-preview">
        <h2>Education</h2>
        {educations.map((edu, index) => (
          <div key={index} className="education-item-preview">
            <h3>{edu.schoolName}</h3>
            <p>{edu.schoolLocation}</p>
            <p>{edu.degree} {edu.fieldOfStudy}</p>
            <p>{edu.schoolStartYear} - {edu.schoolEndYear}</p>
            {edu.additionalCourses.length > 0 && (
              <div>
                <h4>Additional Courses:</h4>
                {edu.additionalCourses.map((course, courseIndex) => (
                  <p key={courseIndex}>{course.courseName} {course.institution} ({course.startDate} - {course.endDate})</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="skills-preview">
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Preview;
