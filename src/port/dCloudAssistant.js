import React from 'react'
import {Row, Nav, Col, Card, CardGroup, Container} from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import threeppl from './../assets/3ppl.png'
import cbprocess from './../assets/CB-Process.svg'
import cbwire1 from './../assets/CB-Wire1.png'
import cbwire2 from './../assets/CB-Wire2.png'
import cbwire3 from './../assets/CB-Wire3.png'
import cbstart from './../assets/CB-StartApp.gif'
import cbcsupport from './../assets/CB-ContactSupport.gif'
import cbschedule from './../assets/CB-Schedule.gif'
import cbssearch from './../assets/CB-Searchgif.gif'
import cbtopdemo from './../assets/CB-TopDemos.gif'
import cbconnection from './../assets/CB-ConnectionTest.gif'
import cb from './../assets/CB.svg'
import cbflow from './../assets/CB-Flow.svg'
import cbvisual from './../assets/CB-Visuals.png'

export const dCloudAssistant = () => (
  <div>
<section className="port-hero">
  
  <Container>
    <Row >
    <Col md={6} className="py-5">
            <h1 className="display-6">dCloud Assistant</h1>
            <blockquote class="blockquote title-border my-4">
              <p>App to schedule and interact with dCloud using messenger bot commands / voice</p>
            </blockquote>
        
              <Nav defaultActiveKey="/home" className="flex-column">
            
                <Link to="#background">Background</Link>
                <Link to="#design">Design</Link>
                <Link to="#outcomes">Outcomes</Link>
              </Nav>
          </Col>
            <Col md={6} className="d-flex align-items-center"> 
             <img src={cb} alt="Feature request illustration" className="img-fluid"/>
            </Col>  
    </Row>
    </Container>
  
 </section>
 <Container>
 <section className="port-section" >
 <h2 className="text-center">Process</h2>
 <div className="text-center">
 <img src={cbprocess} alt="Process" className="img-fluid"/> 
 </div>
 </section>

 <section className="port-section" id="background">
    <h2 className="text-center">Background</h2>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Problem</h3></Col>
    <Col md={8} className="sub-content">
    <p>We found that people liked to schedule on the go and some super users used dcloud Apis to create their own 
      scheduling bot to bypass the UI which they thought was long winded. When using the dCloud catalogue, we found 
      that a bunch of users created a command list via Cisco Webex API’s to be able to find content and schedule it.</p>
      <p>We thought it would be a nice experiment to build something official out for them and try out natural language</p>

    </Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Users	&amp; Audience</h3></Col>
    <Col md={9} className="sub-content">
    <CardGroup>
  <Card>
  <div className="text-center">
    <Card.Img variant="middle" src={threeppl} className="img-fluid" />
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
            <dd>UX Designer</dd>
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
            <dd>Antony - UX Design Feedback</dd>
            <dd>Jimmy - Manager</dd>
          </dl>
          </Col>
          <Col md={6}>
          <dl>
            <dt>Method  and Tools</dt>
            <dd>Figma Design -  Wireframe + UI Design</dd>
          </dl>
          </Col>
        </Row>
      </Card>
    </Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Scope &amp; Constraints</h3></Col>
    <Col md={9} className="sub-content">
      <p>This project is a design experiment to see other ways we can use dCloud.</p>
    </Col>
    </Row>
 </section>

 <section className="port-section" id="design" >
 <h2 className="text-center">Design</h2>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Talk to Users</h3></Col>
    <Col md={8} className="sub-content">
      <p>Learn what kind of tasks they typically perform and why they do it</p>
      <h5 className="mb-3 mt-5">Typical Tasks</h5>
        <ul>
          <li>Find a demo </li>
          <li>Schedule content - date time</li>
          <li>Find out what they have booked</li>
          <li>Test internet connection</li>
          <li>See most scheduled content</li>
        </ul>
    </Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Command User Journey</h3></Col>
    <Col md={8} className="sub-content">
    <img src={cbflow} alt="COmmand flow diagram" className="img-fluid"/> 
 
    </Col>
    </Row>

    <h3 className="title-border">Prototyping</h3>
 
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h4>First Iteration</h4></Col>
    <Col md={8} className="sub-content"> 
    <h5 className="mb-3">Basic idea to get started</h5>
    <p>User initiates the conversation by telling the bot what they want </p>
    <p>The bot is smart in conversation by respondng like a human</p>
    <img src={cbwire1} alt="Wireframe 1" className="img-fluid"/> 
    <p>Pros / Cons</p>
    <ul className="list-unstyled">
      <li>+ Good to give option to type or speak</li>
      <li>+ Use of natural language by bot</li>
      <li>- Reponses from bot are too long</li>
      <li>- Bot is not going to be that smart so we have to change how the responses work</li>
    </ul>
     </Col>
  </Row>

  <Row className="sect-row">
    <Col md={3} className="sub-section"><h4>Second Iteration</h4></Col>
    <Col md={8} className="sub-content"> 
    <h5 className="mb-3">Adding commands and reducing language complexity</h5>
    <p>Main goal is to make interactions very simple with basic responses like yes/no so that it's easy to understand for the bot </p>
    <p>The responses from the bot are simplified as we want to reduce time spent talking</p>
    <p>Introduction of tasks as commands</p>
    <img src={cbwire2} alt="Wireframe 2" className="img-fluid"/> 
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
    <Col md={3} className="sub-section"><h4>Third Iteration</h4></Col>
    <Col md={8} className="sub-content"> 
    <h5 className="mb-3">Simplyfying Commands and responses</h5>
    <p>Adding number value to tasks to make it fast and easy to respond </p>
    <p>Introduce how a support agent enters the chat and takes over from bot</p>
    <p>Introduction of tasks as commands</p>
    <img src={cbwire3} alt="Wireframe 3" className="img-fluid"/> 
    <p>Pros / Cons</p>
    <ul className="list-unstyled">
      <li>+ Number commands reduce times significantly</li>
      <li>+ Nice to have support agent take over</li>
      <li>+ Recognition of? </li>
      <li>- Need to see interaction </li>
    </ul>
     </Col>
  </Row>
  <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Visuals</h3></Col>
    <Col md={8} className="sub-content">
      
      <p>Visuals designed in Figma using Cisco UI design language as a base</p>
        <img src={cbvisual} alt="Visual designs" className="img-fluid mb-2 "/> 
        <div>
    </div>
    </Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Interactions</h3></Col>
    <Col md={8} className="sub-content">
      <h4>Putting it all together now</h4>
      <p>Interactions designed in Figma</p>
    
        <h5 className="mb-3">Start Using App</h5>
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
   
   
        <div>
    </div>
        
        </Col>
    </Row>
 </section>

 <section className="port-section" id="outcomes" >
 <h2 className="text-center">Lesson &amp; Outcomes</h2>
 <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Thoughts</h3></Col>
    <Col md={8} className="sub-content">
      <p>Designing the responses and nature of the bot was difficult so we realised going for a command based approach was probabky best</p>
<p>We got feedback from the users  we spoke with initially who really liked our solution. </p>

    </Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Future</h3></Col>
    <Col md={8} className="sub-content">
      <p>In future it would be good to use the api in any messaging platform such as Whatsapp, Messenger, Webex etc so users don't need to download a separate app.</p>
      <p>Perhaps integrating with Siri could potentially be very useful.</p>


    </Col>
    </Row>
 </section>
 </Container>


      </div>




)
