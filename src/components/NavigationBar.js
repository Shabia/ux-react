import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar} from 'react-bootstrap';

export const NavigationBar = () => (
  <header className="ux-port-header">

  <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    <Navbar.Brand href="/">ux-port</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="justify-content-end" >
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

 </header>
)
