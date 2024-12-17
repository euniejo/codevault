import React from "react";
import "./App.css";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import PhotoGrid from "./components/PhotoGrid";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w3-light-grey w3-content" style={{ maxWidth: "1600px" }}>
      <Sidebar />
      <div className="w3-main" style={{ marginLeft: "300px" }}>
        <Header />
        <PhotoGrid />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;