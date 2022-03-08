import { Card, Row, Col, Container} from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import "./Portfolio.css"

export default function Portfolio() {
  
  return (
    <div>Portfolio
      <h1>Recent Work</h1>
      <Container>
        {/* <Row>
          <Col> */}
            <Row className='row-cols-1 row-cols-lg-3'>
              <Col>
                <Card className="portfolio-card card">
                {/* // <Card style={{ borderRadius: "25px",backgroundColor: "#d2d0e7"}}> */}
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                  <Card.Title>Wordle With Friends</Card.Title>
                  <Card.Text>
                    A Wordle game clone that allows users to create custom Wordle games and to solve Wordles created by other users.
                      https://wordle-with-friendz.netlify.app/
                    </Card.Text>
                    <a className = "extern-link" href="https://wordle-with-friendz.netlify.app/">Deployed Site</a>
                </Card.Body>
                  </Card>
              </Col>
              <Col>
              <Card className="portfolio-card">
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                  <Card.Title>greatReads</Card.Title>
                  <Card.Text>
                      A reading tracking website that allows users to log their reading habits and review books.
                      
                    </Card.Text>
                    <a className = "extern-link" href="https://caseys-great-reads.netlify.app/">Deployed Site</a>
                </Card.Body>
                  </Card>
              </Col>
              <Col>
              <Card className="portfolio-card">
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                  <Card.Title>Tarot Reader</Card.Title>
                  <Card.Text>
                      Users to draw a virtual Tarot reading and to search for a specific card using data from the Tarot API.
                      https://caseyvaughn.github.io/Tarot-Reader/
                    </Card.Text>
                    <a className = "extern-link" href="https://caseyvaughn.github.io/Tarot-Reader/">Deployed Site</a>
                </Card.Body>
                  </Card>
              </Col>
              </Row>
          {/* </Col>
        </Row> */}
      </Container>
      
      
    </div>
  )
}
