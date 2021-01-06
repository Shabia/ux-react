import React from 'react'
import { Link } from 'react-router-dom';
import {Jumbotron, Row, Col, Card, CardDeck, Container } from 'react-bootstrap';
import profilepic from './assets/profilepic.png'
import rect from './assets/rect.png'
import proOne from './assets/test-img.png'



export const Home = () => (
  <div>
<Jumbotron>
  <Container>
      <Row>
          <Col md={8} className="">
            <h1 className="display-4">Shabia</h1>
            <h1 className="display-6">UX Product Designer</h1>
              <p className="lead">
              I design apps and code front end <br />
              I love all things art <br />
              Currently based in London open to roam 
              </p>
          </Col>
            <Col md={4} className="d-flex align-items-center"> <img src={profilepic} className="profile" alt="hp-bg"/> </Col>
      </Row>
      </Container>
 </Jumbotron>
<Container>
      <Row>
      <CardDeck className="mb-4">

    <Card>
    <Link to="/port/FeatureRequest">
     <Card.Img src={rect} />
     <Card.Body>
    
      <Row>
      <Col md={6} ><Card.Title>Feature Request UI</Card.Title>
        </Col><Col md={4} ><Card.Text>
        <small className="text-muted">Web UI - Social</small>
        </Card.Text></Col>
      </Row>
      </Card.Body>
      </Link>
    </Card>
    <Card>
    <Link to="/port/FeatureRequest">
     <Card.Img src={rect} />
     <Card.Body>
    
      <Row>
      <Col md={6} ><Card.Title>Feature Request UI</Card.Title>
        </Col><Col md={4} ><Card.Text>
        <small className="text-muted">Web UI - Social</small>
        </Card.Text></Col>
      </Row>
      </Card.Body>
      </Link>
    </Card>
</CardDeck>
<CardDeck>
  
<Card>
    <Link to="/port/FeatureRequest">
     <Card.Img src={rect} />
     <Card.Body>
    
      <Row>
      <Col md={6} ><Card.Title>Feature Request UI</Card.Title>
        </Col><Col md={4} ><Card.Text>
        <small className="text-muted">Web UI - Social</small>
        </Card.Text></Col>
      </Row>
      </Card.Body>
      </Link>
    </Card>
    <Card>
    <Link to="/port/FeatureRequest">
     <Card.Img src={rect} />
     <Card.Body>
    
      <Row>
      <Col md={6} ><Card.Title>Feature Request UI</Card.Title>
        </Col><Col md={4} ><Card.Text>
        <small className="text-muted">Web UI - Social</small>
        </Card.Text></Col>
      </Row>
      </Card.Body>
      </Link>
    </Card>
</CardDeck>
      </Row>
      </Container>
      </div>




)
