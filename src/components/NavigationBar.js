import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar} from 'react-bootstrap';

export const NavigationBar = () => (
  <header className="ux-port-header">
<Container>
  <Navbar collapseOnSelect expand="lg">
    <Navbar.Brand href="/">S.</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="text-end" >
      <Nav.Item>
            <Nav.Link>
              <Link to="/">Portfolio</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
          </Nav.Item>
      </Nav>
  </Navbar.Collapse>
</Navbar>
</Container>
 </header>
)
