import "./Home.css";
import sg from "../Assets/portfolio-image.png";
import React, { useState, useEffect } from 'react';

const Home = () => {
  const [currentTitle, setCurrentTitle] = useState("Frontend Developer");
  const titles = ["Frontend Developer", "Web Developer", "UI/UX Designer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prevTitle) => {
        const currentIndex = titles.indexOf(prevTitle);
        const nextIndex = (currentIndex + 1) % titles.length;
        return titles[nextIndex];
      });
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumeClick = () => {
    const pdfUrl = 'Resume - Geetha S.pdf';
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="home" id="home">
      <div className="left-section">
        <div className="heading">
          <h1 className="hi">Hello, I am </h1>
          <h1 className="name">S.Geetha</h1>
        </div>
        <div className="text">
          <h3>A Passionate <span className="changing-text">{currentTitle}</span></h3>
        </div>
        <div className="home-btn">
          <div className="btn" onClick={() => handleScroll('contact')}>Contact</div>
          <div className="btn" onClick={handleResumeClick}>Resume</div>
        </div>
      </div>
      <div className="right-section">
        <div className="imageframe">
          <img src={sg} alt="S.Geetha" className="img" />
        </div>
      </div>
    </div>
  );
};

export default Home;
