import { Link } from "react-scroll"
import "./About.css"

import React from 'react'
import { FaCss3, FaFigma, FaGit, FaGithub, FaHtml5, FaJs, FaLinkedin, FaMicrosoft, FaReact, FaWordpress } from "react-icons/fa"
import { FaC } from "react-icons/fa6"

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-left-section">
      <h1>About Me</h1>
        <p>I'm a,
Passionate web developer
pursuing a Computer Science and
Engineering degree at Francis
Xavier Engineering College.
Known Skills in HTML, CSS,
JavaScript, and UI/UX Designing with a focus on
creating visually appealing and
user-friendly interfaces.</p>
         <div className="react-icon">
         <a href="https://github.com/S-Geetha-S" target="_blank" rel="noopener noreferrer">
         <FaGithub />
         </a>
         <a href="https://www.linkedin.com/in/geethas1804/" target="_blank" rel="noopener noreferrer">
         <FaLinkedin />
         </a>
         </div>
      </div>
      <div className="about-right-section">
          <h1>Expertize</h1>
          <div className="icon">
            
            <FaHtml5/>
            <FaCss3/>
            <FaJs/>
            <FaFigma/>
            <FaC/>
            <FaWordpress/>
            <FaGithub/>
            <FaReact/>
          </div>
      </div>
    </div>
  )
}

export default About