import React from 'react'
import { Link } from 'react-router-dom';
import {Jumbotron, Row, Col, Card, CardDeck, Container } from 'react-bootstrap';

import selfie from './assets/selfie.jpg'
import il from './assets/IL.svg'
import fr from './assets/FR.svg'
import sc from './assets/SC.svg'
import tb from './assets/TB.svg'
import cb from './assets/CB.svg'
import dc from './assets/DC.svg'


export const Home = () => (
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
     
      <CardDeck className="mb-4">

    <Card>
    <Link to="/port/FeatureRequest">
     <Card.Img src={tb} className="hp-card-img"/>
     <Card.Body>
    
      <Row>
      <Col lg={5} ><Card.Title>Topology Builder</Card.Title>
        </Col><Col lg={7} ><Card.Text>
        <small className="text-muted">Software App - Computer Networking</small>
        </Card.Text></Col>
      </Row>
      </Card.Body>
      </Link>
    </Card>
    <Card>
    <Link to="/port/FeatureRequest">
     <Card.Img src={cb} className="hp-card-img"/>
     <Card.Body>
    
      <Row>
      <Col lg={7} ><Card.Title>dCloud Assistant</Card.Title>
        </Col><Col lg={5} ><Card.Text>
        <small className="text-muted">Mobile App - Chat/Voice</small>
        </Card.Text></Col>
      </Row>
      </Card.Body>
      </Link>
    </Card>
</CardDeck>
<CardDeck className="mb-4">
  
<Card>
    <Link to="/port/FeatureRequest">
     <Card.Img src={sc}  alt="feature request" className="hp-card-img"/>
     <Card.Body>
    
      <Row>
      <Col lg={5} ><Card.Title>Scheduling</Card.Title>
        </Col><Col lg={7} ><Card.Text>
        <small className="text-muted">Mobile App - Booking Calendar</small>
        </Card.Text></Col>
      </Row>
      </Card.Body>
      </Link>
    </Card>
    <Card>
    <Link to="/port/FeatureRequest">
     <Card.Img src={il} className="hp-card-img"/>
     <Card.Body>
    
      <Row>
      <Col lg={5} ><Card.Title>Icon Library</Card.Title>
        </Col><Col lg={7} ><Card.Text>
        <small className="text-muted text-right">Web UI - Asset Management</small>
        </Card.Text></Col>
      </Row>
      </Card.Body>
      </Link>
    </Card>
</CardDeck>
<CardDeck>
  
<Card>
    <Link to="/port/FeatureRequest">
     <Card.Img src={fr} className="hp-card-img" />
     <Card.Body>
    
      <Row>
      <Col lg={7} ><Card.Title>Feature Request UI</Card.Title>
        </Col><Col lg={5} ><Card.Text>
        <small className="text-muted">Web UI - Social</small>
        </Card.Text></Col>
      </Row>
      </Card.Body>
      </Link>
    </Card>
    <Card>
    <Link to="/port/FeatureRequest">
     <Card.Img src={dc} className="hp-card-img" />
     <Card.Body>
    
      <Row>
      <Col lg={7} ><Card.Title>Documentation</Card.Title>
        </Col><Col lg={5} ><Card.Text>
        <small className="text-muted">Web UI - Technical Help</small>
        </Card.Text></Col>
      </Row>
      </Card.Body>
      </Link>
    </Card>
</CardDeck>
     
      </Container>
      </div>




)
