import React, { createContext, useReducer, useContext } from "react";

// Create context
const InfoContext = createContext();

// Initial state
const initialState = {
  basicInfo: {
    name: "Your Name",
    profession: "Occupation",
    address: "1234 Your Address",
    barangay: "N/A",
    city: "Metro Manila",
    zip: "1234",
    email: "your@email.com",
    phone: "1234-567-8910",
  },
  profile: "",
  experience: [],
  education: {},
  skills: [],
  image: "", // Add image state
  newEducation: [],
  currentPage: "basicinfo", // Add currentPage state
};

// Reducer function
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
      return {
        ...state,
        skills: [...state.skills, action.payload], // Add new skill to the skills array
      };
    case "DELETE_SKILL":
      return {
        ...state,
        skills: state.skills.filter((skill) => skill !== action.payload), // Remove skill from the skills array
      };
    case "UPDATE_SKILLS":
      return {
        ...state,
        skills: action.payload, // Update skills array
      };
    case "SET_NEW_EDUCATION":
      return { ...state, newEducation: action.payload };
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};

// InfoProvider component
export const InfoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <InfoContext.Provider value={{ ...state, dispatch }}>
      {children}
    </InfoContext.Provider>
  );
};

// Custom hook to use InfoContext
export const useBasicInfo = () => useContext(InfoContext);
