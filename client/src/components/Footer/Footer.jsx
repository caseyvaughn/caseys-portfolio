import React from 'react'
import github from "../../assets/icons/github.png"
import linkedin from "../../assets/icons/linkedin.png"
import "./Footer.css"

export default function Footer() {
  return (
    <div className="footer section-div" id="contact">
      {/* <h2  wavy-text="Let's get in touch! xxx">Let's get in touch!</h2> */}
      <p className="aboutme1">Let's build something great together!</p>
      <p style={{fontSize:"20px"}}>
        <a className = "email" href="mailto:caseytvaughn@gmail.com?"> Say hi 📪  </a>
         or find me elsewhere on the internet: 
          <a href="https://github.com/caseyvaughn/">
            <img className = "footer-icon" src={github} alt="github logo"></img>
        </a>
        <a href="https://www.linkedin.com/in/cvaughn555/">
          <img className = "footer-icon" src={linkedin} alt="linkedin logo"></img>
        </a> 
      </p>
    </div>
  )
}
