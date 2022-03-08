import { Navbar, Nav, Container} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
// import { Link } from "react-scroll"
// import { scroller } from "react-scroll";
import "./NavBar.css"

// https://stackoverflow.com/questions/59915723/using-react-scroll-link-while-using-react-boostrap-nav-link

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
            {/* <Link to="projects" smooth={true}>Projects 1 </Link> */}
            {/* <NavLink onClick={() => scroller.scrollTo('projects', {
              smooth: true,
              offset: -70,
              duration: 500,
            })}
            >Projects 2</NavLink> */}


            <NavLink className="nav" to="/">Home</NavLink>
            <Nav.Link className="nav" to='/projects'>Projects</Nav.Link>
            <NavLink className="nav" to="/aboutme">About Me</NavLink>
            <NavLink className="nav" to="/">Contact</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
