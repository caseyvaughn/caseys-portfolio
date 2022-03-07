import { Navbar, Nav, Container} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import "./NavBar.css"

export default function NavBar() {
  return (
    <Navbar collapseOnSelect
      expand="lg">
    <Container className="nav-container">
      <Navbar.Brand href="/" className = "cabin nav">Casey Vaughn</Navbar.Brand>
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
