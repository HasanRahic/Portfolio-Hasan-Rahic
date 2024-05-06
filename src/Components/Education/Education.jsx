import React, {useState, useEffect} from 'react';
import { FaGraduationCap } from "react-icons/fa";
import './Education.css';
import Sveuciliste from '../../Images/sveuciliste.jpg';
import SrednjaSkola from '../../Images/srednja.jpg';
import { AnimatedOnScroll } from "react-animated-css-onscroll";

const Education = () => {
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const top = window.pageYOffset + window.innerHeight;
  //     const aboutElement = document.querySelector('.about');
  //     if (aboutElement && top > aboutElement.offsetTop) {
  //       setIsVisible(true);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // const fadeInStyles = {
  //   transition: 'opacity 3.5s ease',
  //   opacity: isVisible ? 1 : 0,
  // };
  // const fadeInStylesImg = {
  //   transition: 'opacity 8.5s ease',
  //   opacity: isVisible ? 1 : 0,
  // };

  return (
    <div>
        <div className="container-education">
          <h1><FaGraduationCap /> Education</h1>
          <h2>OCTOBER 2022 - CURRENT</h2>
          <div className="text-education">
            <h3>Faculty of Information Technologies / Software engineering<br/></h3>
            <p>I'm currently studying at the Faculty of Information Technologies
              at the University of Dzemal Bjedic Mostar. I'm currently a second-year student.</p>
            <AnimatedOnScroll animationIn="zoomIn"><img src={Sveuciliste} alt="" /></AnimatedOnScroll>
          </div>
        </div>
        <div className="container-education">
          <h2>SEPTEMBER 2018 - JUNE 2022</h2>
          <div className="text-education">
            <h3>JU Srednja elektrotehnička škola / Information Technologies<br/></h3>
              <p>I completed high school in Mostar with a focus on IT, where I
                gained a solid foundation in the world of information technology.
                During this time, I acquired fundamental knowledge in
                programming languages such as C++, C#, Java, as well as
                proficiency in web development languages including HTML, CSS,
                and JavaScript.<br/>
                Graduated: <b>Yes</b></p>
              <AnimatedOnScroll animationIn="zoomIn"><img src={SrednjaSkola} alt=""/></AnimatedOnScroll>
          </div>
        </div>
    </div>
  )
}

export default Education