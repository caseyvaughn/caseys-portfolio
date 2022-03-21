import { Navbar, Nav, Container } from 'react-bootstrap'
import { scroller } from "react-scroll";
import "./NavBar.css"
import Resume from "../../assets/Casey_Vaughn_Resume.pdf"

//refrence for using react scroll links
// https://stackoverflow.com/questions/59915723/using-react-scroll-link-while-using-react-boostrap-nav-link

//add eventKey to trigger collapseOnSelect with Nav.Link
// https://stackoverflow.com/questions/64080806/react-bootstrap-dont-collapse-after-select

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="md" fixed="top">
    <Container className="nav-container">
        <Navbar.Brand bsPrefix="cabin nav-title" href="/">CV</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="responsive-navbar">
          <Nav className="mr-auto">
            <Nav.Link
              eventKey="projects"
              style={{ color: "#053f34", marginLeft: "20px" }}
              onClick={() => scroller.scrollTo('projects', {
              smooth: true,
              duration: 100,
            })}
            >Projects</Nav.Link>
            <Nav.Link
              eventKey="aboutme"
              style={{ color: "#053f34", marginLeft: "20px" }}
              onClick={() => scroller.scrollTo('aboutme', {
              smooth: true,
              duration: 100,
            })}
            >About Me</Nav.Link>
            <Nav.Link
              eventKey="contact"
              style={{ color: "#053f34", marginLeft: "20px" }}
              onClick={() => scroller.scrollTo('contact', {
              smooth: true,
              duration: 100,
            })}
            >Contact</Nav.Link>
            <a style={{ textDecoration: "none", color: "#053f34", marginLeft:"20px", marginTop: "8px" }} className="resume-link" href={Resume} download>My Resume ↓</a>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
