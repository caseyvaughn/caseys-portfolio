import { Navbar, Nav, Container} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import "./NavBar.css"

export default function NavBar() {
  return (
    <Navbar collapseOnSelect
      expand="lg">
    <Container className="nav-container">
        {/* <Navbar.Brand style={{ color: "053f34" }} href="/" className="cabin nav navbar-title">Casey Vaughn</Navbar.Brand> */}
        <h1 className="cabin nav" href="/">Casey Vaughn</h1>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="responsive-navbar">
          <Nav className="mr-auto">
            <NavLink className="nav" to="/">Home</NavLink>
            <NavLink className="nav" to="/projects">Projects</NavLink>
            <NavLink className="nav" to="/aboutme">About Me</NavLink>
            <NavLink className="nav" to="/">Contact</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
