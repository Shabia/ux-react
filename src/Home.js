import React from 'react'
import { Link } from 'react-router-dom';
import {Jumbotron, Row, Col, Card, CardDeck, Container } from 'react-bootstrap';
import profilepic from './assets/profilepic.png'
import rect from './assets/rect.png'


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
      <CardDeck>
  <Link to="/port/FeatureRequest">
    <Card>
      <Card.Img variant="top" src={rect} />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          <Row>

          </Row>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  </Link>
  
</CardDeck>
      </Row>
      </Container>
      </div>




)
