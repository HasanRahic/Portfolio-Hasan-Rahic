import React from 'react'
import './Connect.css'
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";


const Connect = () => {
  return (
    <div>
        <div className="container-buttons block">
          <div className="btn-links">
            <div className="github">
              <AnimatedOnScroll animationIn="fadeInLeft">
                <p>Discover a collection of my past projects and contributions on GitHub. Click the button below to explore:</p>
                <a href="https://github.com/HasanRahic"><button ><FaGithub /> GitHub</button></a>
              </AnimatedOnScroll>
            </div>
            <div className="linkedin">
              <AnimatedOnScroll animationIn="fadeInRight">
                <p>Let's connect on LinkedIn! Explore my professional journey, accomplishments, and interests by clicking the button below:</p>
                <a href="https://www.linkedin.com/in/hasan-rahic-3941b2255/"><button><FaLinkedin /> LinkedIn</button></a>
              </AnimatedOnScroll>
            </div>
            <div className="mail">
              <AnimatedOnScroll animationIn="fadeInLeft">
                <p>Let's Connect and Discuss Opportunities!
                  Interested in learning more about my experience, discussing potential collaborations, or exploring new opportunities together? Feel free to reach out to me via email! Click the button below to send me a message:
                  Looking forward to connecting and hearing from you soon!</p>
                <a href="mailto:hasanrahic604@gmail.com"><button><FaEnvelope /> Mail</button></a>
              </AnimatedOnScroll>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Connect