import { Navbar, Nav, Container} from 'react-bootstrap'
// import { NavLink } from 'react-router-dom'
// // import { Link } from "react-scroll"
import { scroller } from "react-scroll";
import Scroll from 'react-scroll'

import "./NavBar.css"
const ScrollLink = Scroll.ScrollLink

// https://stackoverflow.com/questions/59915723/using-react-scroll-link-while-using-react-boostrap-nav-link

export default function NavBar() {
  return (
    <Navbar collapseOnSelect
      expand="lg"
      sticky="top"
    >
    <Container className="nav-container">
        {/* <Navbar.Brand style={{ color: "053f34" }} href="/" className="cabin nav navbar-title">Casey Vaughn</Navbar.Brand> */}
        <h1 className="cabin nav" href="/">Casey Vaughn</h1>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="responsive-navbar">
          <Nav className="mr-auto">
          <Nav.Link onClick={() => scroller.scrollTo('projects', {
              smooth: true,
              duration: 100,
            })}
            >Projects</Nav.Link>
            <Nav.Link onClick={() => scroller.scrollTo('aboutme', {
              smooth: true,
              duration: 100,
            })}
            >About Me</Nav.Link>
             <Nav.Link onClick={() => scroller.scrollTo('contact', {
              smooth: true,
              duration: 100,
            })}
            >Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
