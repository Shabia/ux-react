

import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//header
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

//signup


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="ux-port">
      <header className="ux-port-header">

      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
           <Nav>
            <Form inline>
                <Button variant="outline-primary">Sign Up Modal</Button>
              </Form>
          </Nav>
      </Navbar.Collapse>
    </Navbar>
  
     </header>
      <div className="main">
this is main

      </div>
      <footer className="App-footer">
          <Container>
            <p>Place sticky footer content here.</p>
          </Container>
        </footer>
    </div>
  );
}

export default App;
