import React from 'react'
import {Container, Row, Col, Card, CardColumns, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const MyProjects = () => (
  <div>
    <h2>My Projects</h2>
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">  
        <CardColumns>
  <Card>
  <Card.Body>
    <Card.Title>Ancient Project</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" className="mr-2">Configure</Button><Button variant="secondary">Delete</Button>
  </Card.Body>
  </Card>
  <Card>
  <Card.Body>
    <Card.Title>Another ancient project</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" className="mr-2">Configure</Button><Button variant="secondary">Delete</Button>
  </Card.Body>
  </Card>
  <Card>
  <Card.Body>
    <Card.Title>Add new project</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link className="btn btn-success large" to="/AddProject">Add New project</Link>
  </Card.Body>
  </Card>



</CardColumns>
        </Col>
      </Row>
    </Container>
  </div>
)
