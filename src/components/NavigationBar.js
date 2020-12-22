import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Form} from 'react-bootstrap';
import styled from 'styled-components';




export const NavigationBar = () => (
  <header className="ux-port-header">

  <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    <Navbar.Brand href="/">ux-port</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="m-auto">
      <Nav.Item>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/about">How it Works</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/contact">Pricing</Link>
            </Nav.Link>
           </Nav.Item>
           <Nav.Item>
            <Nav.Link>
              <Link to="/MyProjects">My Projects</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/AddProject">Add Project</Link>
            </Nav.Link>
          </Nav.Item>
      </Nav>
       <Nav>
        <Form inline>
            <Nav.Item>
            <Nav.Link>
              <Link to="/Signup" className="btn btn-primary">Try it out!</Link>
            </Nav.Link>
          </Nav.Item>
          </Form>
      </Nav>
  </Navbar.Collapse>
</Navbar>

 </header>
)
