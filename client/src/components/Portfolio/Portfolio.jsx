import { Card, Row, Col, Container} from 'react-bootstrap'
import "./Portfolio.css"
import DevIcon from "devicon-react-svg";


export default function Portfolio() {
  
  return (
    <div id="projects" >
      <div style={{ paddingTop: "100px" }}>
        <h1 className="cabin" style={{fontSize:"10vw", position:"relative"}}>Recent Projects</h1>
      <p></p>
      <Container>
        <Row className='row-cols-1 row-cols-lg-3'>
          <Col className="card-col">
            <Card className="portfolio-card card">
              <Card.Body>
                <Card.Title className="site-title">Wordle With Friends</Card.Title>
                  <Card.Text>
                    A Wordle game clone that allows users to create custom Wordle games and to solve Wordles created by other users.
                  </Card.Text>
                <DevIcon icon="react" className="icon" />
                <DevIcon icon="ruby" className="icon" /> 
                <DevIcon icon="nodejs" className="icon" />
                <DevIcon icon="bootstrap" className="icon" />
                
                    <br />
                <a className="extern-link" href="https://wordle-with-friendz.netlify.app/">Deployed Site</a>
                <a href="https://github.com/caseyvaughn/wordle-with-friends"> <br />
                  <>
                    <DevIcon icon="github_badge" className="github-icon" />
                  </>
                </a>
              </Card.Body>
              </Card>
          </Col>
          
            <Col className="card-col">
              <Card className="portfolio-card">
                <Card.Body>
                  <Card.Title>greatReads</Card.Title>
                  <Card.Text>
                    A reading tracking website that allows users to log their reading habits and create, edit, and delete reviews.
                  </Card.Text>
                  <DevIcon icon="react" className="icon" />
                  <DevIcon icon="nodejs" className="icon" />
                  <DevIcon icon="bootstrap" className="icon" />
                    
                  <br/>
                <a className="extern-link" href="https://caseys-great-reads.netlify.app/">Deployed Site</a>
              <br/>
              <a href="https://github.com/caseyvaughn/greatReads">
                      <>
                        <DevIcon icon="github_badge" className="github-icon" />
                      </>
                    </a>
                </Card.Body>
                </Card>
          </Col>
          
          <Col className="card-col">
            <Card className="portfolio-card">
              <Card.Body>
                <Card.Title>Tarot Reader</Card.Title>
                  <Card.Text>
                    A website that lets users draw a virtual Tarot reading and search for a specific card using data from the Tarot API.
                </Card.Text>
                
                  <DevIcon icon="javascript" className="icon"/>
                  <DevIcon icon="nodejs" className="icon" />
                  <DevIcon icon="css3" className="icon" />
                  <DevIcon icon="html5" className="icon" />

                      
                    <br/>
                <a className="extern-link" href="https://caseyvaughn.github.io/Tarot-Reader/">Deployed Site</a>
                <br />
                <a href="https://github.com/caseyvaughn/Tarot-Reader">
                        <>
                          <DevIcon icon="github_badge" className="github-icon" />
                        </>
                      </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
      </Container>
      </div>
      </div>
  )
}
