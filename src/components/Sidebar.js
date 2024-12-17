import React from "react";

function Sidebar() {

  // eslint-disable-next-line no-unused-vars
  const openSidebar = () => {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  };

  const closeSidebar = () => {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  };

  return (
    <>
      <nav
        className="w3-sidebar w3-collapse w3-white w3-animate-left"
        style={{ zIndex: 3, width: "300px" }}
        id="mySidebar"
      >
        <div className="w3-container">
          <a
            href="#"
            onClick={closeSidebar}
            className="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey"
            title="close menu"
          >
            <i className="fa fa-remove"></i>
          </a>
          <img
            src="/w3images/avatar_g2.jpg"
            alt="avatar"
            style={{ width: "45%" }}
            className="w3-round"
          />
          <br />
          <br />
          <h4>
            <b>PORTFOLIO</b>
            <p className="w3-text-grey">Eunie Jo</p>
          </h4>
        </div>
        <div className="w3-bar-block">
          <a
            href="#portfolio"
            onClick={closeSidebar}
            className="w3-bar-item w3-button w3-padding w3-text-teal"
          >
            <i className="fa fa-th-large fa-fw w3-margin-right"></i>PORTFOLIO
          </a>
          <a
            href="#about"
            onClick={closeSidebar}
            className="w3-bar-item w3-button w3-padding"
          >
            <i className="fa fa-user fa-fw w3-margin-right"></i>ABOUT
          </a>
          <a
            href="#contact"
            onClick={closeSidebar}
            className="w3-bar-item w3-button w3-padding"
          >
            <i className="fa fa-envelope fa-fw w3-margin-right"></i>CONTACT
          </a>
        </div>
        <div className="w3-panel w3-large">
            {/* Home Icon */}
            <a href="/" className="icon-spacing" title="Home">
              <i className="fa fa-home w3-hover-opacity"></i>
            </a>
            
            {/* Email Icon */}
            <a
              href="mailto:iameuniejo@gmail.com?subject=Hello&body=I would like to connect with you!"
              className="icon-spacing"
              title="Send Email"
            >
              <i className="fa fa-envelope w3-hover-opacity"></i>
            </a>
            
            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/euniejo"
              className="icon-spacing"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <i className="fa fa-linkedin w3-hover-opacity"></i>
            </a>
        </div>
      </nav>
      <div
        className="w3-overlay w3-hide-large w3-animate-opacity"
        onClick={closeSidebar}
        style={{ cursor: "pointer" }}
        title="close side menu"
        id="myOverlay"
      ></div>
    </>
  );
}

export default Sidebar;