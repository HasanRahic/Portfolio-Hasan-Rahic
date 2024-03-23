import './App.css';
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { FaInfoCircle } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { FaLanguage } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import React, { useState, useEffect } from 'react';

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

  const fadeInStyles = {
    transition: 'opacity 2.5s ease',
    opacity: isVisible ? 1 : 0,
  };

  return (
    <>
      <div className="main">
        <p className='resume'>Resume of</p>
        <div className="container header">
          <AnimatedOnScroll>
            <img src="./images/Hasan-Rahic-PNG.png" alt="" />
          </AnimatedOnScroll>
          <div className="text">
            <AnimatedOnScroll><p>Hasan Rahic</p></AnimatedOnScroll>
          </div>
        </div>
        <AnimatedOnScroll>
          <div className="container about" style={fadeInStyles}>
            <h1><FaInfoCircle /> About</h1>
            <div className="text about-text">
              My name is Hasan, and I come from
              Bosnia and Herzegovina, a small city
              called Mostar. As a child, I developed
              a passion for computers and enjoyed
              exploring their capabilities, which
              ultimately led me to pursue studies in
              high school and continue in college.
              The <br/>ever-evolving nature of
              technology fascinates me, offering
              endless entertainment and
              opportunities for learning. I am eager
              to expand my knowledge and network
              with experienced individuals while
              sharing a few laughs along the way.
            </div>
          </div>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
          <div className="container education" style={fadeInStyles}>
            <h1><FaGraduationCap /> Education</h1>
            <h2>OCTOBER 2022 - CURRENT</h2>
              <div className="text education-text">
                <h3>Faculty of Information Technologies / Software engineering<br/></h3>
                <p>I'm currently studying at the Faculty of Information Technologies
                at the University of Dzemal Bjedic Mostar. I'm currently a <br/> second-year student.</p>
              </div>
            </div>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
          <div className="container education" style={fadeInStyles}>
            <h2>SEPTEMBER 2018 - JUNE 2022</h2>
            <div className="text education-text">
              <h3>JU Srednja elektrotehnicka skola / Information Technologies<br/></h3>
                <p>I completed high school in Mostar with a focus on IT, where I
                  gained a solid foundation in the world of information technology.
                  During this time, I acquired fundamental knowledge in
                  programming languages such as C++, C#, Java, as well as
                  proficiency in web development languages including HTML, CSS,
                  and JavaScript.<br/>
                  Graduated: <b>Yes</b>
                </p>
              </div>
            </div>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
          <div className="container skills" style={fadeInStyles}>
            <h1><FaComputer /> Skills</h1>
            <div className="text skills-text">
              <p>C++ <b>Very experienced</b><br/><br/>
                C# <b>Experienced</b><br/><br/>
                Java <b>Reasonably experienced</b><br/><br/>
                HTML <b>Expert</b><br/><br/>
                CSS <b>Expert</b><br/><br/>
                JavaScript <b>Experienced</b><br/><br/></p>
                React JS <b>Experienced</b>
            </div>
          </div>
          <div className="text skills-icons" style={fadeInStyles}>
            <div className="first-row">
              <img src="./images/C++-Logo.wine.png" alt="" style={{width:90, height:55, float:'left'}}/>
              <img src="./images/c-sharp.png" alt="" style={{width:45, height:45}}/>
              <img src="./images/java-logo-1.png" alt="" style={{width:45, height:45, float:'right'}}/>
            </div>
            <div className="second-row">
              <img src="./images/html.png" alt="" style={{width:55, height:55}}/>
              <img src="./images/css-logo.png" alt="" style={{width:35, height:55}}/>
            </div>
            <div className="third-row">
              <img src="./images/javascript.png" alt="" style={{width:65, height:45}}/>
              <img src="./images/React.png" alt="" style={{width:65, height:50}}/>
            </div>
          </div>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
          <div className="container languages" style={fadeInStyles}>
            <h1><FaLanguage /> Languages</h1>
            <div className="text languages-text">
              <p><img src="./images/UK.png" alt="" style={{width:30}} /> English <b>Native or bilingual</b><br/><br/>
              <img src="./images/Bosnia.png" alt="" style={{width:30}} /> Bosnian <b>Native or bilingual</b><br/><br/>
              <img src="./images/German.png" alt="" style={{width:30}} /> German <b>Good</b></p>
            </div>
          </div>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
          <div className="container hobbies" style={fadeInStyles}>
            <h1><FaClock  /> Hobbies and Interests</h1>
            <div className="text hobbies-text">
              <p>My hobby of going to the gym provides me with both physical and mental challenges, stress relief, and
              a sense of community, allowing me to stay fit, energized, and connected with like-minded individuals.</p>
              <img src="./images/HasoSvlacionica.jpeg" alt="" />
              <img src="./images/HasoTeretana11.jpeg" alt="" />
            </div>
          </div>
        </AnimatedOnScroll>
          <div className="container buttons" style={fadeInStyles}>
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
            </div>
          </div>
          <div className="container social" style={fadeInStyles}>
            <div className="socials">
              <div className="instagram-facebook">
                <p>Stay updated with my latest insights, projects, and thoughts by following me on social media. Click the buttons below to connect:</p>
                <div className="instagram">
                  <AnimatedOnScroll animationIn="fadeInLeft">
                    <a href="https://www.instagram.com/hasan.rahic/"><button><FaInstagramSquare style={{opacity:.7}} /> Instagram</button></a>
                  </AnimatedOnScroll>
                </div>
                <div className="facebook">
                  <AnimatedOnScroll animationIn="fadeInRight">
                    <a href="https://www.facebook.com/hasan.rahic/"><button><FaFacebook style={{opacity:.7}}/> Facebook</button></a>
                  </AnimatedOnScroll>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}

export default App;
