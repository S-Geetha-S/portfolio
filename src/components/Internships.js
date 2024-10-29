import "./Internships.css";
import React from "react";
import nxt from "../Assets/nxt logo.webp";
import zenan from "../Assets/zenan logo.png";
import edu from "../Assets/edunet logo.jpg";

const Internships = () => {
  return (
    <div className="full-width-background">
      <div className="internships-section">
        <h2>Internships</h2>
        <div className="internships-list">
          <div className="internship-item">
            <img src={nxt} alt="NXT Company Logo" className="company-logo" />
            <div className="internship-details">
              <p className="company-name">NxtLogic Software Solutions, Coimbatore.</p>
              <p className="role">Web Developer Intern</p>
            </div>
            <p className="duration">June 2023</p>
          </div>
          <div className="internship-item">
            <img src={zenan} alt="Zenan Company Logo" className="company-logo" />
            <div className="internship-details">
              <p className="company-name">Zenanvibe, Tirunelveli.</p>
              <p className="role">Web Developer Intern</p>
            </div>
            <p className="duration">Sept 2023</p>
          </div>
          <div className="internship-item">
            <img src={edu} alt="Edunet Foundation Logo" className="company-logo" />
            <div className="internship-details">
              <p className="company-name">Edunet Foundation</p>
              <p className="role">Full Stack Developer Intern</p>
            </div>
            <p className="duration">Feb - April 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internships;
