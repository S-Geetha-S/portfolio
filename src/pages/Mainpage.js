import React, { useEffect } from 'react';
import './Mainpage.css';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import EducationHistory from '../components/EducationHistory';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Internships from '../components/Internships';

const MainPage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.fade-in, .fade-out');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          section.classList.add('visible');
          section.classList.remove('hidden');
        } else {
          section.classList.remove('visible');
          section.classList.add('hidden');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger the scroll handler on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="main-page">
      <Navbar />
      <Home />
      <About/>
      <EducationHistory />
      <Internships/>
      <Projects/>
      <Contact/>
    </div>
  );
};

export default MainPage;