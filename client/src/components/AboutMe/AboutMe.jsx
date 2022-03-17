import "./AboutMe.css"
import { Container, Row, Col} from "react-bootstrap"
import photo from "../../assets/prof-pic-square-cropped.jpg"


export default function AboutMe() {
  return (
<div id="aboutme" className="section-div aboutme-div">
    <Container className="profile-container">
        <h1 className="cabin aboutme" wavy-text="About Me xxx">About Me</h1>
        <div>
      <Row style={{ marginTop: "25px" }}>
            <Col>
            <img className="profile-pic" src={photo} alt="Casey Vaughn" />
              {/* <img className="profile-pic" src="https://i.imgur.com/Pozvt0u.png" alt="Casey Vaughn" /> */}
            </Col>
            <Col xs={12} md={6} style={{textAlign:"left"}}>
          <h2>Hi, I'm Casey! 👋</h2>
          <p>I'm a full-stack developer with a background in international relations and program coordination. Originally from Indiana (go Hoosiers!), my passion for language learning and exploration led me to live & study in Chile, Turkey, and Azerbaijan.</p>
              <p>I’m most fulfilled when collaborating with others to make a positive impact on the world. When I'm not coding, you can find me spending time outside running, biking, or reading in a hammock. </p>
              <div style={{display:"flex", justifyContent:"center"}}>
                <a href="../../assets/Casey_Vaughn_Resume.pdf" download><button className="resume-btn">My Resume ↓</button></a>
              </div>
              <br />
          
        </Col>
          </Row>
         
          </div>
      </Container>
      </div>

  )
}
