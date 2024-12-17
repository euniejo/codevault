import React from "react";

function Footer() {
  return (
    <footer className="w3-container w3-padding-32 w3-dark-grey">
      <div className="w3-row-padding">
        {/* Contact Message */}
        <div className="w3-half">
          <h3>Looking for a Software Developer?</h3>
          <p>
            Drop a line at:{" "}
            <a href="mailto:manikstk@gmail.com" className="w3-text-teal">
              iameuniejo@gmail.com
            </a>
          </p>
          <p>Have some time? Let's connect!</p>
        </div>

        {/* Placeholder for Additional Content */}
        <div className="w3-half">
          <p>Technologies: React | Python | C++ | AI/ML | Embedded Systems</p>
          <a href="#top" className="w3-button w3-black w3-margin-top">
          Back to Top
        </a>
        </div>
      </div>
      <div className="w3-center w3-padding-8">
        <p>&copy; 2025 Eunie Jo. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;