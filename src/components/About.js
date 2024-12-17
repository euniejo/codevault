import React from "react";

function About() {
  return (
    <div className="w3-container w3-padding-large" id="about">
      <h4>
        <b>About Me</b>
      </h4>
      <p>
        <b>Continuous Learner and Passionate Software Developer 👋</b>
        <br />
        Software Engineer | Currently Working as a Co-op Intern
        <br />
        Focused on AI engineering, specializing in data integration and visualization.
        <br />
        Experienced in developing Embedded Speech Recognition systems using C++.
      </p>
      <hr />
      <h4>Technical Skills</h4>
      {/* Progress bars / Skills */}
      <p>Photography</p>
      <div className="w3-grey">
        <div
          className="w3-container w3-dark-grey w3-padding w3-center"
          style={{ width: "95%" }}
        >
          95%
        </div>
      </div>
      <p>Web Design</p>
      <div className="w3-grey">
        <div
          className="w3-container w3-dark-grey w3-padding w3-center"
          style={{ width: "85%" }}
        >
          85%
        </div>
      </div>
      <p>Photoshop</p>
      <div className="w3-grey">
        <div
          className="w3-container w3-dark-grey w3-padding w3-center"
          style={{ width: "80%" }}
        >
          80%
        </div>
      </div>
      <p>
        <button
          type="button"
          className="w3-button w3-dark-grey w3-padding-large w3-margin-top w3-margin-bottom"
        >
          <i className="fa fa-download w3-margin-right"></i>Download Resume
        </button>
      </p>
      <hr />
    </div>
  );
}

export default About;