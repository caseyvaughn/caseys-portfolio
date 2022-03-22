import "./AboutMe.css"
import { Container, Row, Col} from "react-bootstrap"
import photo from "../../assets/prof-pic-square-cropped.jpg"
import resume from "../../assets/Casey_Vaughn_Resume.pdf"


export default function AboutMe() {
  return (
    <div id="aboutme" className="section-div aboutme-div" style={{ paddingTop: "100px" }}>
    <h1 className="cabin aboutme" style={{fontSize:"10vw"}}>About Me</h1>
    <Container  fluid="false" className="profile-container">
        <div>
      <Row style={{ marginTop: "25px" }}>
            <Col>
            <img className="profile-pic" src={photo} alt="Casey Vaughn" />
            </Col>
            <Col xs={12} md={6} style={{textAlign:"left"}}>
          <h2>Hi, I'm Casey! 👋</h2>
          <p>I'm a full-stack developer with a background in international relations and program coordination. Originally from Indiana (go Hoosiers!), my passion for language learning and exploration led me to live & study in Chile, Turkey, Azerbaijan, and Washington DC. I now proudly call Philadelphia my home.</p>
              <p>I’m most fulfilled when collaborating with others to make a positive impact on the world. When I'm not coding, you can find me spending time outside running, biking, or reading in a hammock. </p>
              <div style={{display:"flex", justifyContent:"center"}}>
                <a href={resume} download><button className="resume-btn">My Resume ↓</button></a>
              </div>
              <br />
          
        </Col>
          </Row>
         
          </div>
      </Container>
      </div>

  )
}
