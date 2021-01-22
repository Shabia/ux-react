import React from 'react'
import {Jumbotron, Row, Col, Container } from 'react-bootstrap'
import selfie from './assets/selfie.jpg'

export const About = () => (
  
    <div>
    <Jumbotron>
  <Container>
      <Row>
          <Col lg={8} className="">
            <h1 className="display-4">Shabia</h1>
            <h1 className="display-6">UX Product Designer</h1>
              <p className="lead">
              I design apps and code front end <br />
              I love all things art <br />
              Currently based in London open to roam 
              </p>
          </Col>
            <Col lg={4} className="d-flex align-items-center"> <img src={selfie} className="profile" alt="hp-bg" roundedCircle/> 
           </Col>
      </Row>
     
      </Container>
 </Jumbotron>
<Container>
<h2>Connect</h2>
</Container>
    </div>
 
)
