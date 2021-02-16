import React from 'react'
import {Jumbotron, Row, Col, Container} from 'react-bootstrap'
import selfie from './assets/selfie.jpg'


import Gallery from "react-photo-gallery";
import { photos } from "./components/photos";


export const About = () => (
  
    <div>
    <Jumbotron>
  <Container>
      <Row>
          <Col lg={8} className="">
            <h1 className="display-4">Shabia</h1>
            <h1 className="display-6">UX Product Designer</h1>
              <p className="lead mt-4">
              I design apps and code front end <br />
              Enjoy solving hard problems <br />
              Currently based in London open to roam 
              </p>
              <p className="display-6 mb-0">Kind of post on <a href="https://www.instagram.com/shabias">Instagram</a></p>
              <p className="display-6 mb-0">Lurk a lot on  <a href="https://www.twitter.com/shabias">Twitter</a></p>
               <p className="display-6 mb-0">I do check  <a href="mailto:shabia@outlook.com">Emails</a></p>
          </Col>
            <Col lg={4} className="d-flex align-items-center"> <img src={selfie} className="profile" alt="hp-bg" roundedCircle/> 
           </Col>
      </Row>
      </Container>
 </Jumbotron>
<Container>

  <Row>
    <Col>
    <h2 className="mb-3">Non work stuff...</h2>
    <p>Art, photography, gym, fitness, climbing, travel, crypto, stocks, space... </p>
    
    <Gallery photos={photos} />
    </Col>
  </Row>
</Container>
    </div>
 
)
