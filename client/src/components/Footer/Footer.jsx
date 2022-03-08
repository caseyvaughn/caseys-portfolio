import React from 'react'
import github from "../../assets/icons/github.png"
import linkedin from "../../assets/icons/linkedin.png"

export default function Footer() {
  return (
    <div className="footer">
      <h2>Let's get in touch!</h2>
      <p style={{fontSize:"20px"}}>
        <a className = "extern-link" href="mailto:caseytvaughn@gmail.com?"> Say hi 👋      </a>
         or find me elsewhere on the internet: 
          <a href="https://github.com/caseyvaughn/">
            <img className = "icon" src={github} alt="github logo"></img>
        </a>
        <a href="https://www.linkedin.com/in/cvaughn555/">
          <img className = "icon" src={linkedin} alt="linkedin logo"></img>
        </a> 
      </p>
    </div>
  )
}
