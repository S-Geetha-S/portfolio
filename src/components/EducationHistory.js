import React from 'react';
import './EducationHistory.css';


const EducationHistory = () => {
  return (
    <div className="education-history">
      <h2>Education History</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-date">2021 - 2025</div>
          <div className="timeline-content">
            <h3>B.E. Computer Science and Engineering</h3>
            <p>Francis Xavier Engineering College, Tirunelveli.</p>
            <p>CGPA : 8.3</p>
            <p>Minor Degree: Data Science</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">2020 - 2021</div>
          <div className="timeline-content">
            <h3>Higher Secondary</h3>
            <p>Reach Matric Higher Secondary School, Moolaikaraipatti, Tirunelveli.</p>
            <p>Percentage: 91.5%</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">2018 - 2019</div>
          <div className="timeline-content">
            <h3>SSLC</h3>
            <p>Reach Matric Higher Secondary School, Moolaikaraipatti, Tirunelveli.</p>
            <p>Percentage: 90.2%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationHistory;
