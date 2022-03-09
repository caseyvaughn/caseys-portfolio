import React from 'react'
import "./LandingPage.scss"
{/* //https://stackoverflow.com/questions/50209799/when-can-an-empty-array-be-iterated-over#:~:text=An%20array%20of%20undefined%20s%20can%20be%20iterated%20over%20%2D%20here,not%20be%20assigned%20to%20anything.&text=Note%20that%20you%20shouldn't,over%20each%20item%20and%20console. */}

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
