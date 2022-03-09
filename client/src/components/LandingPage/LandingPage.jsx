import React from 'react'
import "./LandingPage.scss"


export default function LandingPage() {
  return (
    <div className="landing-page cabin">
      <h1 className="greeting"> Hi, I'm Casey! 👋  </h1>
      <h3 className="desc">Program coordinator turned full stack developer</h3>
     
      {[...Array(100)].map((val) => {
        return (
          <div className="dot"></div>
        )
      })}
    </div>
  )
}
