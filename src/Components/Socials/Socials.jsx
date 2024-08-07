import React from 'react';
import './Socials.css';
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AnimatedOnScroll } from "react-animated-css-onscroll";


const Socials = () => {
  return (
    <div>
        <div className="container-social block">
          <div className="socials">
            <p>Stay updated with my latest insights, projects, and thoughts by following me on social media. Click the buttons below to connect:</p>
            <div className="instagram-facebook">
              <div className="instagram">
                <AnimatedOnScroll animationIn="fadeInRight">
                  <a href="https://www.instagram.com/hasan.rahic/"><button><FaInstagramSquare /> Instagram</button></a>
                </AnimatedOnScroll>
              </div>
              <div className="facebook">
                <AnimatedOnScroll animationIn="fadeInLeft">
                  <a href="https://www.facebook.com/hasan.rahic/"><button><FaFacebook/> Facebook</button></a>
                </AnimatedOnScroll>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Socials