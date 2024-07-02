// Preview.jsx
import React from "react";
import { useBasicInfo } from "../Context/InfoProvider";
import ProfileLogo from "../assets/profile-logo.png";
import "./Preview.css";

const Preview = () => {
  const { basicInfo, profile, education, experience, skills, image } = useBasicInfo();

  // Ensure education is always an array
  const educations = Array.isArray(education) ? education : [];

  return (
    <div className="preview">
      {/* Profile Image */}
      <div className="profile-image">
        <img src={image || ProfileLogo} alt="Profile" />
      </div>

      {/* Basic Info */}
      <div className="basic-info-preview">
        <p>{basicInfo.name}</p>
        <p>{basicInfo.profession}</p>
        <p>{basicInfo.address}</p>
        <p>{basicInfo.barangay}</p>
        <p>{basicInfo.city}</p>
        <p>{basicInfo.zip}</p>
        <p>{basicInfo.email}</p>
        <p>{basicInfo.phone}</p>
      </div>

      {/* Profile */}
      <div className="profile-preview">
        <h2>Profile</h2>
        <p>{profile}</p>
      </div>

      {/* Education */}
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
                  <p key={courseIndex}>{course.courseName} at {course.institution} ({course.startDate} - {course.endDate})</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Experience */}
      <div className="experience-preview">
        <h2>Experience</h2>
        {experience.map((exp, index) => (
          <div key={index} className="experience-item-preview">
            <h3>{exp.position} at {exp.company}</h3>
            <p>{exp.startyear} - {exp.endyear}</p>
            <p>{exp.describe}</p>
          </div>
        ))}
      </div>

      {/* Skills */}
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
