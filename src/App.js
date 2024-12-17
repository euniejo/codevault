import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ProjectGrid from "./components/ProjectGrid";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThreeDRendering from "./components/ThreeDRendering";

function App() {
  return (
    // Wrap the entire application with BrowserRouter to enable routing
    <Router>
      <div className="w3-light-grey w3-content" style={{ maxWidth: "1600px" }}>
        {/* Sidebar remains static across all pages */}
        <Sidebar />
        <div className="w3-main" style={{ marginLeft: "300px" }}>
          {/* Header remains static across all pages */}
          <Header />

          {/* Routes for page navigation */}
          <Routes>
            <Route path="/" element={<ProjectGrid />} /> {/* Main page */}
            <Route path="/3d-rendering" element={<ThreeDRendering />} /> {/* 3D Rendering page */}
          </Routes>

          {/* Additional static sections */}
          <About />
          <Contact />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;