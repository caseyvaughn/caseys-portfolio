import React from 'react'
import github from "../../assets/icons/github.png"
import linkedin from "../../assets/icons/linkedin.png"
import "./Footer.css"
import { scroller } from "react-scroll";

export default function Footer() {
  return (
    <div className="footer section-div" id="contact">
      <h2 className="aboutme1 relative">Let's build something great together!</h2>
        <div className="footer-text">
          <a className = "email" href="mailto:caseytvaughn@gmail.com?"> Say hi 📪  </a>
         or find me elsewhere on the internet: 
          <a href="https://github.com/caseyvaughn/">
            <img className = "footer-icon" src={github} alt="github logo"></img>
        </a>
        <a href="https://www.linkedin.com/in/cvaughn555/">
          <img className = "footer-icon" src={linkedin} alt="linkedin logo"></img>
        </a>
        
      </div>
      <div style={{ display: "flex", justifyContent:"space-between" }}>
        <button
          className="up-arrow"
          onClick={() => scroller.scrollTo('landing-page', {
              smooth: true,
              duration: 100,
              offset: -150,
            })}
        
          >↑</button>
          <h3 className="cabin" style={{ marginTop: "20px", fontSize: "20px" }}>Built by Casey Vaughn | © 2022</h3>
        <button
          className="up-arrow"
          onClick={() => scroller.scrollTo('landing-page', {
            smooth: true,
            duration: 100,
            offset: -150,
          })}>↑</button>
        </div>
    </div>
  )
}
