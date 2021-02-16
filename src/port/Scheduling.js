import React from 'react'
import {Row, Nav, Col, Card, CardGroup, Container} from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import fiveppl from './../assets/5ppl.png'
import scprocess from './../assets/SC-Process.svg'
import scdraft1 from './../assets/SC-Draft1.png'
import scdraft2 from './../assets/SC-Draft2.png'
import scflow from './../assets/SC-Flow.png'
import scwire from './../assets/SC-Wire.png'
import scvisual from './../assets/SC-Visual.png'

import sc from './../assets/SC.svg'

export const Scheduling = () => (
  <div>
<section className="port-hero">
  
  <Container>
    <Row >
    <Col md={6} className="py-5">
            <h1 className="display-6">Scheduling</h1>
            <blockquote class="blockquote title-border my-4">
              <p>An on the go quick mobile booking of content</p>
            </blockquote>
        
              <Nav defaultActiveKey="/home" className="flex-column">
            
                <Link to="#background">Background</Link>
                <Link to="#design">Design</Link>
                <Link to="#outcomes">Outcomes</Link>
              </Nav>
          </Col>
            <Col md={6} className="d-flex align-items-center"> 
             <img src={sc} alt="Feature request illustration" className="img-fluid"/>
            </Col>  
    </Row>
    </Container>
  
 </section>
 <Container>
 <section className="port-section" >
 <h2 className="text-center">Process</h2>
 <div className="text-center">
 <img src={scprocess} alt="Process" className="img-fluid"/> 
 </div>
 </section>

 <section className="port-section" id="background">
    <h2 className="text-center">Background</h2>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Problem</h3></Col>
    <Col md={8} className="sub-content">
    <p>A lot of people like to schedule content from their phones but the current UI for this unaavilable on mobile</p>
    <p>Need a simple booking app to find content fast and schedule it</p>

    </Col>
    </Row>
   
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Users	&amp; Audience</h3></Col>
    <Col md={9} className="sub-content">
    <CardGroup>
  <Card>
  <div className="text-center">
    <Card.Img variant="middle" src={fiveppl} className="img-fluid" />
    </div>
    <Card.Body className="text-center">
      <Card.Title>dCloud super users, Sales Engineers, Demo developers</Card.Title>
      <Card.Text>
      Highly tehcnical individuals who often use APIs to skip the UI
      </Card.Text>
    </Card.Body>
  </Card>
  </CardGroup>

    </Col>
    </Row>

    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Team &amp; Tools</h3></Col>
    <Col md={9} className="sub-content">
      <Card className="p-5 bg-contrast">
        <Row>
          <Col md={6}>
          <dl>
            <dt>Role</dt>
            <dd>UX Designer - Booking</dd>
          </dl>
          </Col>
          <Col md={6}>
          <dl>
            <dt>Delivery</dt>
            <dd>Remote</dd>
          </dl>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
          <dl>
            <dt>Team &amp; Collaborators</dt>
            <dd>Antony - UX Design - Find Content</dd>
          </dl>
          </Col>
          <Col md={6}>
          <dl>
            <dt>Method  and Tools</dt>
            <dd>Figma Design -  Wireframe + UI Design</dd>
            <dd>Adobe Sketch -  Rapid prototype ideas.</dd>
            <dd>Google Analytics - Usage stats</dd>
          </dl>
          </Col>
        </Row>
      </Card>
    </Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Scope &amp; Constraints</h3></Col>
    <Col md={9} className="sub-content">
      <p>Deliver in one week.</p>
    </Col>
    </Row>
 </section>

 <section className="port-section" id="design" >
 <h2 className="text-center">Design</h2>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Investigate Analytics</h3></Col>
    <Col md={8} className="sub-content">
      <p>Since the deadline is extremely short we looked at analytics to see how people scheduled from mobile and what devices they were using</p>
        <ul>
          <li>Primary device was iPhone by a big margin</li>
          <li>A lot of drop offs on calendar page</li>
          <li>Something else</li>
        </ul>
       
    </Col>
    </Row>



    <h3 className="title-border">Prototyping</h3>
 
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h4>First Idea</h4></Col>
    <Col md={8} className="sub-content"> 
    <h5 className="mb-3">Book via Available slots</h5>
    <p>User sees available slots in a range of dates/times </p>
    <p>The bot ultra smart in having a conversation and responds pretty well</p>
    <img src={scdraft1} alt="Wireframe 1" className="img-fluid"/> 
    <p>Pros / Cons</p>
    <ul className="list-unstyled">
      <li>+ Simple basic UI</li>
      <li>+ Use of natural language by bot</li>
      <li>- Reponses from bot are too long</li>
      <li>- Bot is not going to be that smart so we have to change how the responses work</li>
    </ul>
     </Col>
  </Row>

  <Row className="sect-row">
    <Col md={3} className="sub-section"><h4>Second Idea</h4></Col>
    <Col md={8} className="sub-content"> 
    <h5 className="mb-3">Adding commands and reducing language complexity</h5>
    <p>Main goal is to make interactions very simple with basic responses like yes/no so that it's easy to understand for the bot </p>
    <p>The responses from the bot are simplified as we want to reduce time spent talking</p>
    <p>Introduction of tasks as commands</p>
    <img src={scdraft2} alt="Wireframe 2" className="img-fluid"/> 
    <p>Pros / Cons</p>
    <ul className="list-unstyled">
      <li>+ List of tasks useful</li>
      <li>+ Option to handle error e.g. failed connection test with exit (reschedule)</li>
      <li>+ Yes no answers make it quick</li>
      <li>- How do you even use tasks quickly?</li>
    </ul>
     </Col>
  </Row>
  <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border"> User Journey</h3></Col>
    <Col md={8} className="sub-content">
    <img src={scflow} alt=" flow diagram" className="img-fluid"/>
 
    </Col>
    </Row>
  <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Wireframes</h3></Col>
    <Col md={8} className="sub-content"> 
    <h5 className="mb-3">Adding commands and reducing language complexity</h5>
    <p>Main goal is to make interactions very simple with basic responses like yes/no so that it's easy to understand for the bot </p>
    <p>The responses from the bot are simplified as we want to reduce time spent talking</p>
    <p>Introduction of tasks as commands</p>
    <img src={scwire} alt="Wireframe 1" className="img-fluid"/> 
    <p>Pros / Cons</p>
    <ul className="list-unstyled">
      <li>+ List of tasks useful</li>
      <li>+ Option to handle error e.g. failed connection test with exit (reschedule)</li>
      <li>+ Yes no answers make it quick</li>
      <li>- How do you even use tasks quickly?</li>
    </ul>
     </Col>
  </Row>

  <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Visuals</h3></Col>
    <Col md={8} className="sub-content">
      
      <p>Visuals designed in Figma using Cisco UI design language as a base</p>
        <img src={scvisual} alt="Visual designs" className="img-fluid mb-2 "/> 
        <div>
    </div>
    </Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Interactions</h3></Col>
    <Col md={8} className="sub-content">
      <h4>Putting it all together now</h4>
      <p>Interactions designed in Figma</p>
    
      {/*   <h5 className="mb-3">Start Using App</h5>
        <img src={cbstart} alt="Start App" className="img-fluid mb-2 ux-gif"/> 
        <h5 className="mb-3 mt-5">See Schedule</h5>
        <img src={cbschedule} alt="See schedule" className="img-fluid mb-2 ux-gif"/> 
        <h5 className="mb-3 mt-5">Search</h5>
        <img src={cbssearch} alt="Search for demos" className="img-fluid mb-2 ux-gif"/> 
        <h5 className="mb-3 mt-5">Test Connection</h5>
        <img src={cbconnection} alt="Connection Test" className="img-fluid mb-2 ux-gif"/> 
        <h5 className="mb-3 mt-5">Top Demos</h5>
        <img src={cbtopdemo} alt="See top demos" className="img-fluid mb-2 ux-gif"/> 
        <h5 className="mb-3 mt-5">Contact Support</h5>
        <img src={cbcsupport} alt="Contact support" className="img-fluid mb-2 ux-gif"/> 
   
   */}
        <div>
    </div>
        
        </Col>
    </Row>
 </section>

 <section className="port-section" id="outcomes" >
 <h2 className="text-center">Lesson &amp; Outcomes</h2>
 <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Throughts</h3></Col>
    <Col md={8} className="sub-content">
      <p>Things</p>

    </Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Future</h3></Col>
    <Col md={8} className="sub-content">
      <p>If in future we get a lot of requests we need to a way to navigate the requests and comments better but lets see how it goes.</p>
      <p>If commenting get’s heavy we will need to better organise this</p>


    </Col>
    </Row>
 </section>
 </Container>


      </div>




)
