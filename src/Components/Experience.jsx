import React from "react";
import { useBasicInfo } from "../Context/InfoProvider";
import { FaSquarePlus, FaTrash } from "react-icons/fa6";
import "./Experience.css"; // Import external CSS file

const Experience = () => {
  const { experience, dispatch } = useBasicInfo();

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedExperience = experience.map((exp, expIndex) => (
      expIndex === index ? { ...exp, [name]: value } : exp
    ));
    dispatch({ type: "SET_EXPERIENCE", payload: updatedExperience });
  };

  const addExperience = () => {
    const newExperience = { position: "", company: "", startyear: "", endyear: "", describe: "" };
    dispatch({ type: "SET_EXPERIENCE", payload: [...experience, newExperience] });
  };

  const deleteExperience = (index) => {
    const updatedExperience = experience.filter((_, expIndex) => expIndex !== index);
    dispatch({ type: "SET_EXPERIENCE", payload: updatedExperience });
  };

  return (
    <div className="professional-experience">
      <div className="professional-experience-header">
        <h2 className="experience-title">Professional Experience</h2>
        <p className="experience-description">Add your most recent job and continue in descending order.</p>
        {experience.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <span className="experience-subtitle">Experience {index + 1}</span>
              <button
                onClick={() => deleteExperience(index)}
                title="Delete Experience"
                className="delete-button"
              >
                <FaTrash />
              </button>
            </div>
            <div className="experience-details">
              <div className="form-group">
                <input
                  onChange={(e) => handleInputChange(e, index)}
                  type="text"
                  className="input-field"
                  id={`position-${index}`}
                  name="position"
                  placeholder="Position"
                  value={exp.position}
                />
                <label htmlFor={`position-${index}`} className="input-label">Position</label>
              </div>
              {/* Other input fields */}
              <div className="form-group">
                <input
                  onChange={(e) => handleInputChange(e, index)}
                  type="text"
                  className="input-field"
                  id={`company-${index}`}
                  name="company"
                  placeholder="Company Name"
                  value={exp.company}
                />
                <label htmlFor={`company-${index}`} className="input-label">Company Name</label>
              </div>
              <div className="form-group">
                <input
                  onChange={(e) => handleInputChange(e, index)}
                  type="date"
                  className="input-field"
                  id={`startyear-${index}`}
                  name="startyear"
                  placeholder="Start Year"
                  value={exp.startyear}
                />
                <label htmlFor={`startyear-${index}`} className="input-label">Start Year</label>
              </div>
              <div className="form-group">
                <input
                  onChange={(e) => handleInputChange(e, index)}
                  type="date"
                  className="input-field"
                  id={`endyear-${index}`}
                  name="endyear"
                  placeholder="End Year"
                  value={exp.endyear}
                />
                <label htmlFor={`endyear-${index}`} className="input-label">End Year</label>
              </div>
              <div className="form-group">
                <textarea
                  onChange={(e) => handleInputChange(e, index)}
                  className="input-field textarea-field"
                  placeholder="Describe your work experience"
                  id={`describe-${index}`}
                  name="describe"
                  rows={5}
                  value={exp.describe}
                ></textarea>
                <label htmlFor={`describe-${index}`} className="input-label">Describe your work experience</label>
              </div>
            </div>
          </div>
        ))}
        <button
          title="Add More Experience?"
          onClick={addExperience}
          className="add-button"
        >
          <FaSquarePlus />
        </button>
      </div>
    </div>
  );
};

export default Experience;
