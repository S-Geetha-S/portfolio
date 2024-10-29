import "./Projects.css";
import pro1 from "../Assets/hospital.jpg";
import pro2 from "../Assets/music web.jpg";
import pro3 from "../Assets/kids kingdom.jpg";
import pro4 from "../Assets/online shopping.jpg";

import React from 'react';

const Projects = () => {
  return (
    <div className="project" id="project">
      <div className="patent">
        <h1>Projects</h1>
        <div className="patent-img">
          <div className="flip-container">
            <div className="flip-card">
              <div className="flip-card-front">
                <img src={pro1} alt="project1" className="image" />
              </div>
              <div className="flip-card-back">
              <h2> Hospital Management System in Java with JDBC Connectivity </h2>
                <p className="patent-text">A Hospital Management System HMS in Java with JDBC is designed to efficiently manage patient records, doctor schedules, and billing. Java offers a user-friendly interface, while JDBC facilitates secure database connectivity for real-time updates and accurate reporting, improving hospital workflow and reducing administrative tasks.</p>
              </div>
            </div>
          </div>
          <div className="flip-container">
            <div className="flip-card">
              <div className="flip-card-front">
                <img src={pro2} alt="project2" className="image" />
              </div>
              <div className="flip-card-back">
                <h2> Music web application using Django Framework</h2>
                <p className="patent-text">A Music Web Application using Django provides a platform for users to explore, stream, and organize music online. Django's backend manages user authentication, playlists, and music recommendations, while its ORM ensures secure data storage. With a responsive interface, the app delivers an engaging and seamless music experience across devices.</p>
              </div>
            </div>
          </div>
          <div className="flip-container">
            <div className="flip-card">
              <div className="flip-card-front">
                <img src={pro3} alt="project3" className="image" />
              </div>
              <div className="flip-card-back">
                <h2> Kids Kingdom - Online shopping System</h2>
                <p className="patent-text">Kids Kingdom is an online shopping platform for children’s products, offering toys, clothing, accessories, and educational items. It provides easy navigation, secure payments, and a streamlined checkout. With personalized recommendations, real-time inventory updates, and order tracking, Kids Kingdom ensures a safe, convenient, and satisfying shopping experience for parents.</p>
              </div>
            </div>
          </div>
          <div className="flip-container">
            <div className="flip-card">
              <div className="flip-card-front">
                <img src={pro4} alt="project4" className="image" />
              </div>
              <div className="flip-card-back">
                <h2> Online Shopping System</h2>
                <p className="patent-text">An Online Shopping System is a digital platform allowing users to browse, purchase, and review products online. With a user-friendly interface, secure payments, order tracking, and inventory management, it streamlines shopping, enhances convenience, and provides a wide marketplace accessible on any internet-enabled device.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
