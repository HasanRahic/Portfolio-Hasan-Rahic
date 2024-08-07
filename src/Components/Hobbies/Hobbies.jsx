import React from 'react'
import { FaClock } from "react-icons/fa";
import './Hobbies.css';
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import HasoSvlacionica from '../../Images/HasoSvlacionica.jpeg';
import HasoTeretana from '../../Images/HasoTeretana11.jpeg'

const Hobbies = () => {
  return (
    <div>
        <div className="container-hobbies block">
          <h1><FaClock  /> Hobbies and Interests</h1>
          <div className="text-hobbies-text">
            <p>My hobby of going to the gym provides me with both physical and mental challenges, stress relief, and
            a sense of community, allowing me to stay fit, energized, and connected with like-minded individuals.</p>
            <div className="pictures">
              <AnimatedOnScroll animationIn="fadeInRight"><img src={HasoSvlacionica} alt="" /></AnimatedOnScroll>
              <AnimatedOnScroll animationIn="fadeInLeft"><img src={HasoTeretana} alt="" /></AnimatedOnScroll>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hobbies