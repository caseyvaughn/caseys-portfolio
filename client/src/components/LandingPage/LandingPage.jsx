import React from 'react'
import "./LandingPage.scss"
import { scroller } from "react-scroll";


export default function LandingPage() {
  return (
    <div className="landing-page cabin">
      <h1 className="greeting"> Hi, I'm Casey! 👋  </h1>
      <h3 className="greeting desc">Program coordinator turned full stack developer</h3>
     
      {/* {[...Array(100)].map((val) => {
        return (
          <div className="dot"></div>
        )
      })} */}
      <div style={{display:"flex", justifyContent:"center"}}>
      <button className="resume-btn"><h1 className="cabin project-header"
              onClick={() => scroller.scrollTo('projects', {
              smooth: true,
              duration: 100,
            })}
        >Recent Work ⬇</h1></button>
      </div>
    </div>
  )
}
