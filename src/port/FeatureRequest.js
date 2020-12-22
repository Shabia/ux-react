import React from 'react'
import {Row, Nav, Col, Card, CardGroup} from 'react-bootstrap';



export const FeatureRequest = () => (
  <div>
<section className="port-hero">
    <Row >
    <Col md={6} className="">
            <h1 className="display-6">Project Title</h1>
            <blockquote class="blockquote">
              <p>Brief description</p>
            </blockquote>
        
              <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">Active</Nav.Link>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
                <Nav.Link eventKey="disabled" disabled>
                  Disabled
                </Nav.Link>
              </Nav>
          </Col>
            <Col md={6} className="d-flex align-items-center"> Image of work </Col>  
    </Row>
 </section>
 <section className="work-overview" >

 </section>

 <section className="background">
    <h2 className="text-center">Background</h2>
    <Row>
    <Col md={3} className="sub-section"><h3>Problem</h3></Col>
    <Col md={8} className="sub-content">
      <p>Repurposing Topology builder for a new user groups who have never used the system before but will need to because of losing their offices 
        to remote work. We have an idea of these user’s day to day activity but to learn better on how to add more user specific features we decided 
        some sort of feedback system is required.</p>
    <p>We’d like to find out what is missing from Topology builder especially from large new types of people such as Cisco sellers, 
      partners and sales engineers, whom is it missing for and why they’d like it. This will help us going forward to design features 
      for new specific groups of users.</p>
      <p>Designers talked about the features we wanted and how best to capture the info. 
        We wanted to be basic and give us the info back without having the need to analyse requests.</p>
        <ul>
          <li>Organised ideas into buckets - Important/Nice to have/Overkill</li>
          <li>Reasons for ideas - Why</li>
          <li>Two user types - admin (us) topolgy users</li>
        </ul>
    </Col>
    </Row>
    <Row>
    <Col md={3} className="sub-section"><h3>Users	&amp; Audience</h3></Col>
    <Col md={9} className="sub-content">
    <CardGroup>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  </CardGroup>

    </Col>
    </Row>
    <Row>
    <Col md={3} className="sub-section"><h3>Team &amp; Tools</h3></Col>
    <Col md={9} className="sub-content">
      <Card>
        <Row>
          <Col md={5}>
          <dl>
            <dt>Role</dt>
            <dd>UX Designer</dd>
          </dl>
          </Col>
          <Col md={5}>
          <dl>
            <dt>Delivery</dt>
            <dd>Remote</dd>
          </dl>
          </Col>
        </Row>
        <Row>
          <Col md={5}>
          <dl>
            <dt>Team &amp; Collaborators</dt>
            <dd>Antony - UUX Design</dd>
            <dd>Fadzie - Product Mangement</dd>
          </dl>
          </Col>
          <Col md={5}>
          <dl>
            <dt>Method  and Tools</dt>
            <dd>Figma Design -  Wireframe + UI Design</dd>
            <dd>Adobe Sketch -  Rapid prototype ideas.</dd>
            <dd>Miro - User flows, Requirements Analysis</dd>
          </dl>
          </Col>
        </Row>
      </Card>
    </Col>
    </Row>
    <Row>
    <Col md={3} className="sub-section"><h3>Scope &amp; Constraints</h3></Col>
    <Col md={9} className="sub-content">
      <p>Personally put this forward as I noticed a problem with knowing what the gaps between user use cases were. 
         Prefer talking  users before starting any 
        project but at this present moment can’t contact SE’s and partners due to business reasons so designing f
        or unknown use cases is requires a lot of guessing.</p>
    </Col>
    </Row>
 </section>

 <section className="process" >
 <h2 className="text-center">Process</h2>
    <Row>
    <Col md={3} className="sub-section"><h3>Idea Generation</h3></Col>
    <Col md={8} className="sub-content">
      <p>Designers talked about the features we wanted and how best to capture the info. 
        We wanted to be basic and give us the info back without having the need to analyse requests.</p>
        <ul>
          <li>Organised ideas into buckets - Important/Nice to have/Overkill</li>
          <li>Reasons for ideas - Why</li>
          <li>Two user types - admin (us) topolgy users</li>
        </ul>
    </Col>
    </Row>

 </section>

 <section className="outcomes" >

 </section>

    
   
      </div>




)
