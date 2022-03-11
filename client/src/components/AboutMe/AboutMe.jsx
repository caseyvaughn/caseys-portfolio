import "./AboutMe.css"
import { Container, Row, Col} from "react-bootstrap"

export default function AboutMe() {
  return (
<div id="aboutme" className="section-div">
    <Container className="profile-container">
        <h1 className="cabin aboutme" wavy-text="About Me xxx">About Me</h1>
        <div>
      <Row style={{ marginTop: "25px" }}>
        <Col><img className="profile-pic" src="https://i.imgur.com/Pozvt0u.png" alt="Casey Vaughn" /></Col>
            <Col xs={12} md={6} style={{textAlign:"left"}}>
          <h2>Hi, I'm Casey! 👋</h2>
          <p>I'm a full-stack developer with a background in federal government and international education. Originally from Indiana, I've lived in Chile, Azerbaijan, and D.C., and now proudly call Philadelphia my home. </p>
          <p>I strive to deliver products that are intuitive, accessible, and well designed. When I'm not coding, you can find me spending time outside running, biking, or reading in a hammock. </p>
          <p>Let's build something great together!</p>
        </Col>
          </Row>
          </div>
      </Container>
      </div>

  )
}
