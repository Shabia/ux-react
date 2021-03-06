import React from 'react'
import { Link } from 'react-router-dom';
import {Jumbotron, Row, Col, Card, CardDeck, Container } from 'react-bootstrap';


import fr from './assets/FR.svg'
import sc from './assets/SC.svg'
import tb from './assets/TB.svg'
import cb from './assets/CB.svg'



export const Home = () => (
  <div>
<Jumbotron>
  <Container className="text-center">
            <h1 className="display-4">Portfolio</h1>
            <h1 className="display-6">UX Product Design</h1>
      </Container>
 </Jumbotron>
<Container>
     
      <CardDeck className="mb-4">

    <Card>
    <Link to="/port/TopologyBuilder">
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
    <Link to="/port/dCloudAssistant">
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

<CardDeck>
<Card>
    <Link to="/port/Scheduling">
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

    
</CardDeck>
     
      </Container>
      </div>




)
