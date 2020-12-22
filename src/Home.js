import React from 'react'
import { Container, Jumbotron, Row, Col, Button } from 'react-bootstrap';
import hpBg from './assets/hpBg.png'


export const Home = () => (
  <Jumbotron fluid>
  <Container fluid>
 <Row>
    <Col md={4} className="">
      <h1 className="display-4">Automate your projects to increase productivity</h1>
    <br />
    <Button className="btn-hp ">Find Out How</Button>
    </Col>
      <Col md={8} className="d-flex align-items-center"> <img src={hpBg} className="hpbg" alt="hp-bg"/> </Col>
 </Row>
    
  </Container>
</Jumbotron>


)
