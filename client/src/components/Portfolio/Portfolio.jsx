import { Card, Row, Col, Container} from 'react-bootstrap'
import "./Portfolio.css"
import github from "../../assets/icons/github.png"

export default function Portfolio() {
  
  return (
    <div id="projects">
      <h1 className="wavy" wavy-text="Recent Work xxxxx">Recent Work</h1>
      <p></p>
      <Container>
            <Row className='row-cols-1 row-cols-lg-3'>
              <Col className="card-col">
                <Card className="portfolio-card card">

                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                  <Card.Title>Wordle With Friends</Card.Title>
                  <Card.Text>
                    A Wordle game clone that allows users to create custom Wordle games and to solve Wordles created by other users.
                  </Card.Text>
                      <a href="https://github.com/caseyvaughn/wordle-with-friends"><img className = "icon" src={github} alt="github logo"/></a>
                <br />
                <a className="extern-link" href="https://wordle-with-friendz.netlify.app/">Deployed Site</a>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="card-col">
              <Card className="portfolio-card">
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                  <Card.Title>greatReads</Card.Title>
                  <Card.Text>
                      A reading tracking website that allows users to log their reading habits and review books.
                      
                    </Card.Text>
                
                <a href="https://github.com/caseyvaughn/greatReads"><img className="icon" src={github} alt="github logo" /></a>
                <br/>
                <a className="extern-link" href="https://caseys-great-reads.netlify.app/">Deployed Site</a>
                </Card.Body>
                  </Card>
              </Col>
              <Col className="card-col">
              <Card className="portfolio-card">
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                  <Card.Title>Tarot Reader</Card.Title>
                  <Card.Text>
                      A website that lets users draw a virtual Tarot reading and search for a specific card using data from the Tarot API.
                </Card.Text>
                <a href="https://github.com/caseyvaughn/Tarot-Reader"><img className="icon" src={github} alt="github logo" /></a>
                <br/>
                    <a className = "extern-link" href="https://caseyvaughn.github.io/Tarot-Reader/">Deployed Site</a>
                </Card.Body>
                  </Card>
              </Col>
              </Row>
      </Container>
    </div>
  )
}
