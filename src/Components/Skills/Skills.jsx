import React from 'react';
import './Skills.css';
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import cSharp from '../../Images/c-sharp.png';
import cPlus from '../../Images/c++LOGO.png';
import css from '../../Images/css-logo.png';
import html from '../../Images/htmlLOGO.png';
import js from '../../Images/jsLOGO.png';
import c from '../../Images/cLOGO.png';
import reactJS from '../../Images/reactLOGO.png';

const Skills = () => {
  return (
    <div>
        <div className="container-skills block">
            <div className="skills">
            <p>Continuously enhancing and refining my skills through ongoing development and learning.</p>
            <div className="img-skills">
                <AnimatedOnScroll animationIn="fadeInLeft"><img src={html} alt=""  /></AnimatedOnScroll>
                <AnimatedOnScroll animationIn="fadeInRight"><img src={cPlus} style={{scale:"0.9"}} alt="" /></AnimatedOnScroll>
                <AnimatedOnScroll animationIn="fadeInLeft"><img src={css} alt=""  /></AnimatedOnScroll>
                <AnimatedOnScroll animationIn="fadeInRight"><img src={cSharp} alt=""  /></AnimatedOnScroll>
                <AnimatedOnScroll animationIn="fadeInLeft"><img src={js} alt=""  /></AnimatedOnScroll>
                <AnimatedOnScroll animationIn="fadeInRight"><img src={reactJS} alt=""  /></AnimatedOnScroll>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Skills