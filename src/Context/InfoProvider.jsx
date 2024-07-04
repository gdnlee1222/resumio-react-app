import React, { createContext, useReducer, useContext } from "react";

const InfoContext = createContext();

const initialState = {
  basicInfo: {
    name: "",
    profession: "",
    address: "",
    barangay: "",
    city: "",
    zip: "",
    email: "",
    phone: "",
  },
  profile: "",
  experience: [],
  education: [],
  skills: [],
  image: "", // Add image state
  newEducation: [],
  currentPage: "basicinfo", // Add currentPage state
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_BASIC_INFO":
      return { ...state, basicInfo: action.payload };
    case "SET_IMAGE":
      return { ...state, image: action.payload };
    case "SET_PROFILE":
      return { ...state, profile: action.payload };
    case "SET_EXPERIENCE":
      return { ...state, experience: action.payload };
    case "SET_EDUCATION":
      return { ...state, education: action.payload };
    case "ADD_SKILL":
      return { ...state, skills: [...state.skills, action.payload] }; // Add new skill to the skills array
    case "DELETE_SKILL":
      return {
        ...state,
        skills: state.skills.filter((_, index) => index !== action.payload), // Remove skill from the skills array
      };
    case "UPDATE_SKILLS":
      return { ...state, skills: action.payload }; // Update skills array
    case "SET_NEW_EDUCATION":
      return { ...state, newEducation: action.payload };
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};

export const InfoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const validateBasicInfo = () => {
    const { name, email, phone } = state.basicInfo;
    if (!name || !email || !phone) {
      alert("Please fill out all required fields: Full Name, Email, and Phone.");
      return false;
    }
    return true;
  };

  return (
    <InfoContext.Provider value={{ ...state, dispatch, validateBasicInfo }}>
      {children}
    </InfoContext.Provider>
  );
};

export const useBasicInfo = () => useContext(InfoContext);
