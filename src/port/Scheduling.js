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
import scstart from './../assets/SC-Start.gif'
import scdate from './../assets/SC-Date.gif'
import sctime from './../assets/SC-Time.gif'
import scconfirm from './../assets/SC-Confirm.gif'

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
    <p>User clicks on slot and easily books</p>
    <img src={scdraft1} alt="Wireframe 1" className="img-fluid"/> 
    <p>Pros / Cons</p>
    <ul className="list-unstyled">
      <li>+ Fast booking</li>
      <li>+ Intelligent use of available time</li>
      <li>- People sometimes want to book sessions longer than a week</li>
      <li>- Start/times vary based on location</li>
      <li>- Start/times vary based on event duration or class times</li>
      <li>- Predicting the time slots is difficult</li>
    </ul>
     </Col>
  </Row>

  <Row className="sect-row">
    <Col md={3} className="sub-section"><h4>Second Idea</h4></Col>
    <Col md={8} className="sub-content"> 
    <h5 className="mb-3">A date and time calendar</h5>
    <p>Traditional date and time calendar </p>
    <p>User chooses dates and specific times manuall</p>
   
    <img src={scdraft2} alt="Wireframe 2" className="img-fluid"/> 
    <p>Pros / Cons</p>
    <ul className="list-unstyled">
      <li>+ Full freedom of choice for date/time</li>
      <li>- Long winded</li>
    </ul>
     </Col>
  </Row>
  <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border"> User Journey</h3></Col>
    <Col md={8} className="sub-content">
      <p>We discussed the ideas and decided to go for idea two as the users needed full flexibility of date/time</p>
    <img src={scflow} alt=" flow diagram" className="img-fluid"/>
 
    </Col>
    </Row>
  <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Wireframes</h3></Col>
    <Col md={8} className="sub-content"> 
   
    <p>Mocked up a clearer version of the second design </p>
    <img src={scwire} alt="Wireframe 1" className="img-fluid"/> 
    <p>Pros / Cons</p>
    <ul className="list-unstyled">
      <li>+ All screens are clear</li>
      <li>+ Only two screens as time picker overlays the calendar</li>
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
    
       <h5 className="mb-3">Enter Calendar</h5>
        <img src={scstart} alt="Enter Calendar" className="img-fluid mb-2 ux-gif"/> 
        <h5 className="mb-3 mt-5">Select Date</h5>
        <img src={scdate} alt="Select Date" className="img-fluid mb-2 ux-gif"/> 
        <h5 className="mb-3 mt-5">Select Time</h5>
        <img src={sctime} alt="Select Time" className="img-fluid mb-2 ux-gif"/> 
        <h5 className="mb-3 mt-5">Confirm</h5>
        <img src={scconfirm} alt="Confirm" className="img-fluid mb-2 ux-gif"/> 
    
   
  
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
      <p>What things to say?</p>


    </Col>
    </Row>
 </section>
 </Container>


      </div>




)
