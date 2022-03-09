import React from 'react'
import "./LandingPage.scss"

export default function LandingPage() {
  return (
    <div className="landing-page">
      <h1 className="cabin">LandingPage</h1>
     {/* //https://stackoverflow.com/questions/50209799/when-can-an-empty-array-be-iterated-over#:~:text=An%20array%20of%20undefined%20s%20can%20be%20iterated%20over%20%2D%20here,not%20be%20assigned%20to%20anything.&text=Note%20that%20you%20shouldn't,over%20each%20item%20and%20console. */}
      {[...Array(100)].map((val) => {
        return (
          <div className="dot"></div>
        )
      })}
    </div>
  )
}
