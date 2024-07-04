import React, { useEffect } from "react";
import { useBasicInfo } from "../Context/InfoProvider";
import { FaSquarePlus, FaTrash } from "react-icons/fa6";
import "./Education.css"; // Import external CSS file

const Education = () => {
  const { education, dispatch } = useBasicInfo();

  const handleInputChange = (e, eduIndex) => {
    const { name, value } = e.target;
    const updatedEducation = education.map((edu, index) =>
      index === eduIndex ? { ...edu, [name]: value } : edu
    );
    dispatch({ type: "SET_EDUCATION", payload: updatedEducation });
  };

  const addEducation = () => {
    const newEducation = {
      schoolName: "",
      schoolLocation: "",
      schoolStartYear: "",
      schoolEndYear: "",
      degree: "",
      fieldOfStudy: "",
      degreeStartYear: "",
      degreeEndYear: "",
      additionalCourses: [],
    };
    dispatch({ type: "SET_EDUCATION", payload: [...education, newEducation] });
  };

  const deleteEducation = (index) => {
    const updatedEducation = education.filter((_, eduIndex) => eduIndex !== index);
    dispatch({ type: "SET_EDUCATION", payload: updatedEducation });
  };

  // Ensure at least one form is visible on initial render
  useEffect(() => {
    if (education.length === 0) {
      addEducation(); // Add an initial empty education form
    }
  }, []);

  return (
    <div className="education">
      <div className="education-header">
        <h2 className="education-title">Education</h2>
        <p className="education-description">
          Add your most relevant education, including programs you’re currently enrolled in.
        </p>
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-header">
              <span className="education-subtitle">Education {index + 1}</span>
              <button
                onClick={() => deleteEducation(index)}
                title="Delete Education"
                className="delete-button"
              >
                <FaTrash />
              </button>
            </div>
            <div className="education-details">
              <div className="form-group">
                <input
                  onChange={(e) => handleInputChange(e, index)}
                  type="text"
                  className="input-field"
                  id={`schoolName-${index}`}
                  name="schoolName"
                  placeholder="School Name"
                  value={edu.schoolName}
                />
                <label htmlFor={`schoolName-${index}`} className="input-label">
                  School Name
                </label>
              </div>
              <div className="form-group">
                <input
                  onChange={(e) => handleInputChange(e, index)}
                  type="text"
                  className="input-field"
                  id={`schoolLocation-${index}`}
                  name="schoolLocation"
                  placeholder="School Location"
                  value={edu.schoolLocation}
                />
                <label htmlFor={`schoolLocation-${index}`} className="input-label">
                  School Location
                </label>
              </div>
              <div className="form-group">
                <input
                  onChange={(e) => handleInputChange(e, index)}
                  type="date"
                  className="input-field"
                  id={`schoolStartYear-${index}`}
                  name="schoolStartYear"
                  placeholder="School Start Year"
                  value={edu.schoolStartYear}
                />
                <label htmlFor={`schoolStartYear-${index}`} className="input-label">
                  School Start Year
                </label>
              </div>
              <div className="form-group">
                <input
                  onChange={(e) => handleInputChange(e, index)}
                  type="date"
                  className="input-field"
                  id={`schoolEndYear-${index}`}
                  name="schoolEndYear"
                  placeholder="School End Year"
                  value={edu.schoolEndYear}
                />
                <label htmlFor={`schoolEndYear-${index}`} className="input-label">
                  School End Year
                </label>
              </div>
              <div className="form-group">
                <input
                  onChange={(e) => handleInputChange(e, index)}
                  type="text"
                  className="input-field"
                  id={`degree-${index}`}
                  name="degree"
                  placeholder="Degree"
                  value={edu.degree}
                />
                <label htmlFor={`degree-${index}`} className="input-label">
                  Degree
                </label>
              </div>
              <div className="form-group">
                <input
                  onChange={(e) => handleInputChange(e, index)}
                  type="text"
                  className="input-field"
                  id={`fieldOfStudy-${index}`}
                  name="fieldOfStudy"
                  placeholder="Field of Study"
                  value={edu.fieldOfStudy}
                />
                <label htmlFor={`fieldOfStudy-${index}`} className="input-label">
                  Field of Study
                </label>
              </div>
              <div className="form-group">
                <input
                  onChange={(e) => handleInputChange(e, index)}
                  type="date"
                  className="input-field"
                  id={`degreeStartYear-${index}`}
                  name="degreeStartYear"
                  placeholder="Degree Start Year"
                  value={edu.degreeStartYear}
                />
                <label htmlFor={`degreeStartYear-${index}`} className="input-label">
                  Degree Start Year
                </label>
              </div>
              <div className="form-group">
                <input
                  onChange={(e) => handleInputChange(e, index)}
                  type="date"
                  className="input-field"
                  id={`degreeEndYear-${index}`}
                  name="degreeEndYear"
                  placeholder="Degree End Year"
                  value={edu.degreeEndYear}
                />
                <label htmlFor={`degreeEndYear-${index}`} className="input-label">
                  Degree End Year
                </label>
              </div>
            </div>
          </div>
        ))}
        <button
          title="Add More Education?"
          onClick={addEducation}
          className="add-button"
        >
          <FaSquarePlus />
        </button>
      </div>
    </div>
  );
};

export default Education;
