import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
export const Signup = () => (

  <Container fluid>
 
  <Row className="justify-content-md-center">

    <Col md="auto">  
    <h1>Sign Up</h1>
    <h2>Try Nudge for free on us</h2>
        <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Work email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" size="lg" block>
              Let me check it out!
            </Button>
            <Link to="/Signin">Already have an account? Sign in</Link>
    </Form>
</Col>
   
  </Row>
</Container>

)
