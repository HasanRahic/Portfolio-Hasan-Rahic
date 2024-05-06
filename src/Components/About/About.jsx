import React, { useState, useEffect } from 'react';
import { FaInfoCircle } from "react-icons/fa";
import './About.css';

const About = () => {

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

  const fadeInStyles = {
    transition: 'opacity 3.5s ease',
    opacity: isVisible ? 1 : 0,
  };

  return (
    <div className="container-about">
        <h1><FaInfoCircle /> About</h1>
        <div className="about-text">
            <p>My name is Hasan, and I come from
            Bosnia and Herzegovina, a small city
            called Mostar. As a child, I developed
            a passion for computers and enjoyed
            exploring their capabilities, which
            ultimately led me to pursue studies in
            high school and continue in college.
            The ever-evolving nature of
            technology fascinates me, offering
            endless entertainment and
            opportunities for learning. I am eager
            to expand my knowledge and network
            with experienced individuals while
           sharing a few laughs along the way.</p>
        </div>
    </div>
  )
}

export default About