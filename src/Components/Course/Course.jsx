import React from 'react';
import './Course.css';
import kraljFahd from '../../Images/centar.png';
import { FaGraduationCap } from "react-icons/fa";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

const Course = () => {
  return (
    <div>
        <div className="container-course block" >
          <h1><FaGraduationCap /> Course</h1>
          <h2>JavaScript - March 2024</h2>
            <div className="course-text">
              <h3>Royal Embassy Of Saudi Arabia - Mostar<br/></h3>
              <p>In March 2024, I attended a rigorous JavaScript course hosted at the Royal Embassy of Saudi Arabia. Through engaging lectures and practical exercises, I deepened my understanding of JavaScript's core concepts and honed my programming skills. After completing the course and passing the final assessment, I earned a certification, empowering me to apply my expertise in real-world projects with confidence.</p>
              <AnimatedOnScroll animationIn="fadeInDown"><img src={kraljFahd} alt="" /></AnimatedOnScroll>
            </div>
        </div>
    </div>
  )
}

export default Course