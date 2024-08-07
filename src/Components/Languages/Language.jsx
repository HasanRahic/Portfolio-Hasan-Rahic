import React from 'react'
import { FaLanguage } from "react-icons/fa";
import './Language.css'
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import Bosnia from '../../Images/Bosnia.png'
import UK from '../../Images/UK.png'
import Germany from '../../Images/German.png'

const Language = () => {
  return (
    <div>
        <AnimatedOnScroll animationIn="zoomIn">
          <div className="container-languages block">
            <h1><FaLanguage /> Languages</h1>
            <div className="text-languages">
              <p><img src={UK} alt="" style={{width:30}} /> &bull; English <b>Native or bilingual</b> &bull;</p>
              <p><img src={Bosnia} alt="" style={{width:30}} /> &bull; Bosnian <b>Native or bilingual</b> &bull;</p>
              <p><img src={Germany} alt="" style={{width:30}} /> &bull; German <b>Good</b> &bull;</p>
            </div>
          </div>
        </AnimatedOnScroll>
    </div>
  )
}

export default Language