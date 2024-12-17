import React from "react";

function PhotoGrid() {
  const photos = [
    { src: "/w3images/mountains.jpg", alt: "Mountains" },
    { src: "/w3images/lights.jpg", alt: "Lights" },
    { src: "/w3images/nature.jpg", alt: "Nature" },
  ];

  return (
    <div className="w3-row-padding">
      {photos.map((photo, index) => (
        <div className="w3-third w3-container w3-margin-bottom" key={index}>
          <img
            src={photo.src}
            alt={photo.alt}
            style={{ width: "100%" }}
            className="w3-hover-opacity"
          />
          <div className="w3-container w3-white">
            <p>
              <b>Lorem Ipsum</b>
            </p>
            <p>
              Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
              condimentum.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PhotoGrid;