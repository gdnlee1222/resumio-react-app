import React, { useState } from "react";
import { useBasicInfo } from "../Context/InfoProvider";
import { FaPlusSquare, FaTrash } from "react-icons/fa";
import "./Skills.css";

const Skills = () => {
  const { skills, dispatch } = useBasicInfo();
  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      dispatch({ type: "ADD_SKILL", payload: newSkill });
      setNewSkill(""); // Clear the input field after adding
    }
  };

  const handleDeleteSkill = (index) => {
    dispatch({ type: "DELETE_SKILL", payload: skills[index] });
  };

  const handleChangeSkill = (e, index) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = e.target.value;
    dispatch({ type: "UPDATE_SKILLS", payload: updatedSkills });
  };

  return (
    <div>
      <h2>Key Skills</h2>
      <p>Add relevant professional key skills and proficiencies.</p>
      {skills.map((skill, index) => (
        <div key={index}>
          <div>
            <input
              value={skill}
              type="text"
              onChange={(e) => handleChangeSkill(e, index)}
            />
            <label> Skill {index + 1}</label>
          </div>
          <button
            title="Delete Skill"
            className="delete-button"
            onClick={() => handleDeleteSkill(index)}
          >
            <FaTrash />
          </button>
        </div>
      ))}
      <br />
      <input
        type="text"
        value={newSkill}
        onChange={(e) => setNewSkill(e.target.value)}
        placeholder="Add new skill"
      />
      <button title="Add More Skills?" onClick={handleAddSkill}>
        <FaPlusSquare />
      </button>
    </div>
  );
};

export default Skills;
