import React from 'react'
import github from "../../assets/icons/github.png"
import linkedin from "../../assets/icons/linkedin.png"

export default function Footer() {
  return (
    <div className="footer">
      <h5>Say hi!</h5>
      <a href="https://github.com/caseyvaughn/">
        <img className = "icon" src={github}></img>
      </a>
      <a href="https://www.linkedin.com/in/cvaughn555/">
        <img className = "icon" src={linkedin}></img>
      </a>

    </div>
  )
}
