import React from 'react';
import './Event.css';
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { FaCalendarCheck } from "react-icons/fa";
import Hakaton1 from '../../Images/hackathon1.jpeg';
import Hakaton2 from '../../Images/hackathon5.jpeg';
import Hakaton3 from '../../Images/hackathon4.jpeg';
import Hakaton4 from '../../Images/hackathon7.jpeg';

const Event = () => {
  return (
    <div>
        <div className="container-conv block">
          <h1><FaCalendarCheck /> Hackathon 2024 BEST Mostar</h1>
          <div className="text-conv">
            <p>Thrilled to have participated in the exhilarating 2024 Best Mostar Hackathon! 
            As a participant, I had the fantastic opportunity to immerse myself in a dynamic atmosphere alongside some of the brightest minds in the industry, all driven by a shared passion for innovation and problem-solving.
            The experience was nothing short of exhilarating! From brainstorming sessions to late-night coding marathons, every moment was filled with excitement and creativity. Collaborating with fellow participants, exchanging ideas, and overcoming challenges together truly made it a memorable journey.
            Not only did I have the chance to showcase my technical skills, but I also honed my ability to think on my feet, adapt to unforeseen circumstances, and work effectively under pressure – all invaluable lessons that will undoubtedly shape my future endeavors.
            You can find our project on my GitHub. Click the link below to check it out and explore the code.</p>
            <div className="text-conv-img">
              <AnimatedOnScroll animationIn="fadeInUp"><img src={Hakaton1} alt=""  /></AnimatedOnScroll>
              <AnimatedOnScroll animationIn="fadeInLeft"><img src={Hakaton2} alt=""  /></AnimatedOnScroll>
              <AnimatedOnScroll animationIn="fadeInRight"><img src={Hakaton3} alt=""  /></AnimatedOnScroll>
              <AnimatedOnScroll animationIn="fadeInDown"><img src={Hakaton4} alt=""  /></AnimatedOnScroll>
            </div>
          </div>
          
          
        </div>
        
    </div>
  )
}

export default Event