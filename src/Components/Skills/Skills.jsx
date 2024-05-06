import React from 'react';
import './Skills.css';
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import cSharp from '../../Images/c-sharp.png';
import cPlusPlus from '../../Images/C++-Logo.wine.png';
import css from '../../Images/css-logo.png';
import html from '../../Images/html.png';
import js from '../../Images/javascript.png';
import reactPng from '../../Images/React.png';

const Skills = () => {
  return (
    <div>
        <div className="container-skills">
            <div className="skills">
            <p>Continuously enhancing and refining my skills through ongoing development and learning.</p>
            <div className="img-skills">
                <AnimatedOnScroll animationIn="fadeInLeft"><img src={html} alt=""  /></AnimatedOnScroll>
                <AnimatedOnScroll animationIn="fadeInRight"><img src={reactPng} alt=""  /></AnimatedOnScroll>
                <AnimatedOnScroll animationIn="fadeInLeft"><img src={css} alt=""  /></AnimatedOnScroll>
                <AnimatedOnScroll animationIn="fadeInRight"><img src={cPlusPlus} alt=""  /></AnimatedOnScroll>
                <AnimatedOnScroll animationIn="fadeInLeft"><img src={js} alt=""  /></AnimatedOnScroll>
                <AnimatedOnScroll animationIn="fadeInRight"><img src={cSharp} alt=""  /></AnimatedOnScroll>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Skills