import { Card, Row, Col, Container} from 'react-bootstrap'
import "./Portfolio.css"
import { scroller } from "react-scroll";
import DevIcon from "devicon-react-svg";
import wordle from "../../assets/wordle.png"



export default function Portfolio() {
  return (
    <div id="projects" className="section-div">
    
      <h1 className="wavy cabin" wavy-text="Recent Work xxxxx"
              onClick={() => scroller.scrollTo('projects', {
              smooth: true,
              duration: 100,
            })}
            >Recent Work ⬇</h1>
      <p></p>
      <Container>
        <Row className='row-cols-1 row-cols-lg-3'>
          <Col className="card-col">
            <Card className="portfolio-card card">
              
              <Card.Body>
                <Card.Title className="cabin">Wordle With Friends</Card.Title>
              </Card.Body>

              
              <Card.Body>
                
                  <Card.Text>
                    A Wordle game clone that allows users to create custom Wordle games and to solve Wordles created by other users.
                  </Card.Text>
                <DevIcon icon="react" className="icon" />
                <DevIcon icon="ruby" className="icon" /> 
                <DevIcon icon="nodejs" className="icon" />
                <DevIcon icon="bootstrap" className="icon" />
                <a href="https://github.com/caseyvaughn/wordle-with-friends">
                  <>
                    <DevIcon icon="github_badge" className="icon" />
                  </>
                </a>
                    <br />
                  <a className="extern-link" href="https://wordle-with-friendz.netlify.app/">Deployed Site</a>
              </Card.Body>
              <Card.Img variant="bottom" style={{borderRadius: "50px"}} className="screenshot" src={wordle} />
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
                  <DevIcon icon="react" className="icon" />
                  <DevIcon icon="nodejs" className="icon" />
                  <DevIcon icon="bootstrap" className="icon" />
                    <a href="https://github.com/caseyvaughn/greatReads">
                      <>
                        <DevIcon icon="github_badge" className="icon" />
                      </>
                    </a>
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
                
                  <DevIcon icon="javascript" className="icon"/>
                  <DevIcon icon="nodejs" className="icon" />
                  <DevIcon icon="css3" className="icon" />
                  <DevIcon icon="html5" className="icon" />

                      <a href="https://github.com/caseyvaughn/Tarot-Reader">
                        <>
                          <DevIcon icon="github_badge" className="icon" />
                        </>
                      </a>
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
