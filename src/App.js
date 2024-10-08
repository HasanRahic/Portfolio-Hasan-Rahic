import './App.css';
import { AnimatedOnScroll } from "react-animated-css-onscroll";

import React, { useState, useEffect } from 'react';
import Haso from './Images/Hasan-Rahic-PNG.png'
import About from './Components/About/About.jsx';
import Education from './Components/Education/Education.jsx';
import Languages from './Components/Languages/Language.jsx';
import Hobbies from './Components/Hobbies/Hobbies.jsx';
import Course from './Components/Course/Course.jsx';
import Skills from './Components/Skills/Skills.jsx';
import Event from './Components/Events/Event.jsx';
import Connect from './Components/Connect/Connect.jsx';
import Socials from './Components/Socials/Socials.jsx';


function App() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.pageYOffset + window.innerHeight;
      const aboutElement = document.querySelector('.about');
      if (aboutElement && top > aboutElement.offsetTop) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <div className="main">
        <p className='resume'>Resume of</p>
        <div className="container header">
          <AnimatedOnScroll><img src={Haso} alt="" /></AnimatedOnScroll>
          <div className="text">
            <AnimatedOnScroll><p>Hasan Rahić</p></AnimatedOnScroll>
          </div>
        </div>
        <About />
        <Education />
        <Course />
        <Event />
        <Skills />
        <Languages />
        <Hobbies />
        <Connect />
        <Socials />
      </div>
    </>
  );
}

export default App;
