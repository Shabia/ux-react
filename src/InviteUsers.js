import React from 'react'
import {Container, Row, Col, Form, Card, Button,  Image } from 'react-bootstrap';

export const InviteUsers = () => (
  <div>
    <h2>Invite Users from X board</h2>
    <Container>
      <Row className="justify-content-md-center">
        <Col  xl={10}>  
        <Card className="mb-3">
          <Card.Body> 
            <Row>
            <Col sm={2}><Image src="https://via.placeholder.com/50" roundedCircle /></Col>
            <Col sm={4}><span>Robet Bronze</span></Col>
            <Col sm={5}> <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label srOnly>Phone No</Form.Label>
              <Form.Control type="phone" placeholder="Phone number" />
            </Form.Group>
            </Form>
            </Col>
            <Col sm={1}>
              <Form className="justify-content-end">
                <Form.Check  id="q" />
            </Form>
            </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card className="mb-3">
          <Card.Body> 
            <Row>
            <Col sm={2}><Image src="https://via.placeholder.com/50" roundedCircle /></Col>
            <Col sm={4}><span>Augustus Silver</span></Col>
            <Col sm={5}> <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label srOnly>Phone No</Form.Label>
              <Form.Control type="phone" placeholder="Phone number" />
            </Form.Group>
            </Form>
            </Col>
            <Col sm={1}>
              <Form className="justify-content-end">
                <Form.Check  id="q" />
            </Form>
            </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card className="mb-3">
          <Card.Body> 
            <Row>
            <Col sm={2}><Image src="https://via.placeholder.com/50" roundedCircle /></Col>
            <Col sm={4}><span>Mya Small</span></Col>
            <Col sm={5}> <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label srOnly>Phone No</Form.Label>
              <Form.Control type="phone" placeholder="Phone number" />
            </Form.Group>
            </Form>
            </Col>
            <Col sm={1}>
              <Form className="justify-content-end">
                <Form.Check  id="q" />
            </Form>
            </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card className="mb-3">
          <Card.Body> 
            <Row>
            <Col sm={2}><Image src="https://via.placeholder.com/50" roundedCircle /></Col>
            <Col sm={4}><span>Dany Tall</span></Col>
            <Col sm={5}> <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label srOnly>Phone No</Form.Label>
              <Form.Control type="phone" placeholder="Phone number" />
            </Form.Group>
            </Form>
            </Col>
            <Col sm={1}>
              <Form className="justify-content-end">
                <Form.Check  id="q" />
            </Form>
            </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card className="mb-3">
          <Card.Body> 
            <Row>
            <Col sm={2}><Image src="https://via.placeholder.com/50" roundedCircle /></Col>
            <Col sm={4}><span>Crystal Snow</span></Col>
            <Col sm={5}> <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label srOnly>Phone No</Form.Label>
              <Form.Control type="phone" placeholder="Phone number" />
            </Form.Group>
            </Form>
            </Col>
            <Col sm={1}>
              <Form className="justify-content-end">
                <Form.Check  id="q" />
            </Form>
            </Col>
            </Row>
          </Card.Body>
        </Card>
        <Button variant="success" size="lg">Invite via Whatsapp</Button>
        </Col>
      </Row>
    </Container>
  </div>
)
