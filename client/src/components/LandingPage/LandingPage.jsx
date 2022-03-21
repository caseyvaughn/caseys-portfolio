import React from 'react'
import "./LandingPage.scss"
import { scroller } from "react-scroll";


export default function LandingPage() {
  return (
    <div id="landing-page" >
      <div className="landing-page">
      <h1 className="greeting cabin"> Hi, I'm Casey! 👋  </h1>
      <h3 className="desc cabin">Program coordinator turned full stack developer</h3>
      <div style={{display:"flex", justifyContent:"center"}}>
      <button className="resume-btn"><h1 className="project-header"
              onClick={() => scroller.scrollTo('projects', {
              smooth: true,
                duration: 100,
            })}
        >Recent Work ⬇</h1></button>
        </div>
        </div>
    </div>
  )
}
