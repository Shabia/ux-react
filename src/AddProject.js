import React from 'react'
import {Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const AddProject = () => (
  <div>
    <h2>Add Project</h2>
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">  
        <Form inline>
          <Form.Label htmlFor="inlineFormInputName2" className="mr-2" >
            Project Name
          </Form.Label>
          <Form.Control
            className="mb-2 mr-sm-2"
            id="inlineFormInputName2"
            placeholder="Project Name"
          />
          <Button type="submit" >
            Create
          </Button>
        </Form>
        </Col>
      </Row>

        <Row className="justify-content-md-center mt-5">
        <Col md="auto"> 
<h2 className="mb-3">Connect Project Management Tool</h2>
        <Form inline>
        <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
    Choose PM Tool
  </Form.Label>
        <Form.Control
          as="select"
          className="my-1 mr-sm-2"
          id="inlineFormCustomSelectPref"
          custom
        >
          <option value="0">Choose...</option>
          <option value="1">Trello</option>
          <option value="2">Monday</option>
          <option value="3">Asana</option>
        </Form.Control>
          <Form.Label htmlFor="inlineFormInputName3" srOnly>
            Project Name
          </Form.Label>
          <Form.Control
            className="mb-2 mr-sm-2"
            id="inlineFormInputName3"
            placeholder="API Key"
          />
          <Link className="btn btn-success large" to="/SelectBoard">Connect</Link>
        </Form>
        </Col>
      </Row>
    </Container>
  </div>
)
