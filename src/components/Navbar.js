import { Link } from "react-scroll"
import "./Navbar.css"

import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

    const[isOpen, setIsOpen] = useState(false);

    const handleScroll = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      };

    const togglemenu =() =>{
      setIsOpen(!isOpen);
    }
    
      return (
        <div className="navbar">
          
          
          <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                <div className="navbar-item" onClick={() => handleScroll('home')}>Home</div>
                <div className="navbar-item" onClick={() => handleScroll('about')}>About</div>
                <div className="navbar-item" onClick={() => handleScroll('education-history')}>Education</div>
                <div className="navbar-item" onClick={() => handleScroll('Internships')}>Internship</div>
                <div className="navbar-item" onClick={() => handleScroll('project')}>Projects</div>
                <div className="navbar-item" onClick={() => handleScroll('contact')}>Contact</div>
            </div>

            <div className="navbar-toggle" onClick={togglemenu}>
            {isOpen ? <FaTimes/> : <FaBars/>}
          </div>
          
        </div>
      );
    };

export default Navbar