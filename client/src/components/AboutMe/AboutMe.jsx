import "./AboutMe.css"
import { Container, Row, Col } from "react-bootstrap"

export default function AboutMe() {
  return (

    <Container className="profile-container">
      <h1 className="cabin">About Me</h1>
      <Row style={{ marginTop: "25px" }}>
        <Col><img className="profile-pic" src="https://i.imgur.com/Pozvt0u.png" alt="Casey Vaughn" /></Col>
        <Col xs={8} style={{textAlign:"left"}}>
          <h2>Hi, I'm Casey! 👋</h2>
          <p>I'm a full-stack developer with a background in federal government and international education. I strive to deliver products that are intuitive, accessible, and well designed.</p>
          <p> I'm a Hoosier who has lived in Chile, Turkey, Azerbaijan, and D.C., and I now proudly call Philadelphia my home. When I'm not coding, you can find me spending time outside running, biking, or reading in a hammock. </p>
          <p>Let's build something great together!</p>
        </Col>
      </Row>

    </Container>

  )
}
