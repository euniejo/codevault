import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProjectGrid() {
  const navigate = useNavigate(); // Navigation to manage rendering mode

  const photos = [
    { src: "/w3images/mountains.jpg", alt: "Mountains" },
    { src: "/w3images/lights.jpg", alt: "Lights" },
    { src: "/w3images/nature.jpg", alt: "Nature" },
  ];

  const handleFirstImageClick = () => {
    navigate("/3d-rendering"); // Navigate to the 3D rendering page
    console.log(localStorage.getItem("is3DActive")); // "true"
  };

  return (
    <>
      {/* Filter Section */}
      <div className="w3-container">
        <div className="w3-section w3-bottombar w3-padding-16">
          <span className="w3-margin-right">Filter:</span>
          <button className="w3-button w3-black">ALL</button>
          <button className="w3-button w3-white">
            <i className="fa fa-diamond w3-margin-right"></i>Design
          </button>
          <button className="w3-button w3-white w3-hide-small">
            <i className="fa fa-photo w3-margin-right"></i>Photos
          </button>
          <button className="w3-button w3-white w3-hide-small">
            <i className="fa fa-map-pin w3-margin-right"></i>Art
          </button>
        </div>
      </div>


      {/* Photo Grid */}
      <div className="w3-row-padding">
        {photos.map((photo, index) => (
          <div className="w3-third w3-container w3-margin-bottom" key={index}>
            <img
              src={photo.src}
              alt={photo.alt}
              onError={(e) => {
                e.target.onerror = null; // Prevent infinite loop
                // e.target.src = "/w3images/logo.png"; // Replace with logo on error
              }}
              style={{
                width: "100%",
                cursor: index === 0 ? "pointer" : "default",
              }}
              className="w3-hover-opacity"
              onClick={index === 0 ? handleFirstImageClick : undefined}
            />
            <div className="w3-container w3-white">
              <p>
                <b>{photo.alt}</b>
              </p>
              <p>
                Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
                condimentum.
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProjectGrid;