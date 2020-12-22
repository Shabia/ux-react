import React from 'react'
import {Container, Row, Col, Form, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const SelectBoard = () => (
  <div>
    <h2>Trello boards...</h2>
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">  
        <h3>Select trello board</h3>
        <Card className="mb-3">
        <Card.Header><strong>The Old Project</strong></Card.Header>
          <Card.Body> Some info about the project
            <Form className="justify-content-end">
            <Form.Check type="radio" id="q" label="1 Tasks, 1 Member" />
            </Form>
          </Card.Body>
        </Card>
        <Link to="/InviteUsers"><Card className="mb-3">
        <Card.Header><strong>This Project</strong></Card.Header>
          <Card.Body> Select this one
            <Form className="justify-content-end">
            <Form.Check type="radio" id="q" label="26 Tasks, 7 Members" />
            </Form>
          </Card.Body>
        </Card></Link>
        <Card>
        <Card.Header><strong>A random project</strong></Card.Header>
          <Card.Body> Some info about the project
            <Form className="justify-content-end">
            <Form.Check type="radio" id="q" label="10 Tasks, 4 Members" />
            </Form>
          </Card.Body>
        </Card>
       </Col>
      </Row>
       </Container>
  </div>
)
