import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import FinalPage from "./Pages/FinalPage";
import LandingPage from "./Pages/Landingpage";
import Navbar from "./Pages/Navbar";
import Footer from "./Components/Footer";
import { InfoProvider } from "./Context/InfoProvider";

const App = () => {
  return (
    <InfoProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/final" element={<FinalPage />} />
        </Routes>
        <Footer />
      </Router>
    </InfoProvider>
  );
};

export default App;
