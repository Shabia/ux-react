import React from 'react'
import {Row, Nav, Col, Card, CardGroup, Container, Jumbotron} from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import heropic from './../assets/test-img.png'
import twoppl from './../assets/2ppl.png'
import threeppl from './../assets/3ppl.png'





export const FeatureRequest = () => (
  <div>
<section className="port-hero">
  <Jumbotron>
  <Container>
    <Row >
    <Col md={6} className="">
            <h1 className="display-6">Feature Request UI</h1>
            <blockquote class="blockquote title-border my-4">
              <p>A feature request system to capture user needs, feedback and determine the most popular requests.</p>
            </blockquote>
        
              <Nav defaultActiveKey="/home" className="flex-column">
            
                <Link to="#background">Background</Link>
                <Link to="#process">process</Link>
                <Link to="#outcomes">Outcomes</Link>
              </Nav>
          </Col>
            <Col md={6} className="d-flex align-items-center"> 
              <img src={heropic} alt="Hero photo" className="img-fluid"/> 
            </Col>  
    </Row>
    </Container>
    </Jumbotron>
 </section>
 <Container>
 <section className="work-overview" >

 </section>

 <section className="port-section" id="background">
    <h2 className="text-center">Background</h2>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Problem</h3></Col>
    <Col md={8} className="sub-content">
      <p>Repurposing Topology builder for a new user groups who have never used the system before but will need to because of losing their offices 
        to remote work. We have an idea of these user’s day to day activity but to learn better on how to add more user specific features we decided 
        some sort of feedback system is required.</p>
    <p>`f`ind out what is missing from Topology builder especially from large new types of people such as Cisco sellers, 
      partners and sales engineers, whom is it missing for and why they’d like it. This will help us going forward to design features 
      for new specific groups of users.</p>
    </Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Users	&amp; Audience</h3></Col>
    <Col md={9} className="sub-content">
    <CardGroup>
  <Card>
    <Card.Img variant="middle" src={twoppl} className="img-fluid" />
    <Card.Body>
      <Card.Title>Product Managers, UX Designers</Card.Title>
      <Card.Text>
      Look at the reported problems and design the solutions
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="middle" src={threeppl} className="img-fluid" />
    <Card.Body>
      <Card.Title>Network &mp; Sales Engineers, Partners + all new user types we don’t know</Card.Title>
      <Card.Text>
      Report needs, problems and missing features
      </Card.Text>
    </Card.Body>
  </Card>
  </CardGroup>

    </Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Team &amp; Tools</h3></Col>
    <Col md={9} className="sub-content">
      <Card className="p-5 blu-gry">
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
            <dd>Antony - UUX Design</dd>
            <dd>Fadzie - Product Mangement</dd>
          </dl>
          </Col>
          <Col md={6}>
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
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Scope &amp; Constraints</h3></Col>
    <Col md={9} className="sub-content">
      <p>Personally put this forward as I noticed a problem with knowing what the gaps between user use cases were. 
         Prefer talking  users before starting any 
        project but at this present moment can’t contact SE’s and partners due to business reasons so designing f
        or unknown use cases is requires a lot of guessing.</p>
    </Col>
    </Row>
 </section>

 <section className="port-section" id="process" >
 <h2 className="text-center">Process</h2>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Idea Generation</h3></Col>
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
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Feature mapping &amp; user flow</h3></Col>
    <Col md={8} className="sub-content">
      
    </Col>
    </Row>
    <h3 className="title-border">Prototyping</h3>
 
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h4>User view Design 1</h4></Col>
    <Col md={8} className="sub-content"><p>First basic pass to get the minimal features in</p></Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h5>Thoughts &amp; discussion</h5></Col>
    <Col md={8} className="sub-content"><p>Thoughts screen is a bit busy
        We want to reduce submissions of the same thing so need a way to show other peoples submission
        Maybe commenting on submissions and for explaining any further views - encourages discussions and conversations
        A way to show we are working on the submissions - keeps customers engaged and happy</p></Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h4>User view Design 2</h4></Col>
    <Col md={8} className="sub-content"><p>First basic pass to get the minimal features in</p></Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h5>Thoughts &amp; discussion</h5></Col>
    <Col md={8} className="sub-content"><p>Thoughts screen is a bit busy
        We want to reduce submissions of the same thing so need a way to show other peoples submission
        Maybe commenting on submissions and for explaining any further views - encourages discussions and conversations
        A way to show we are working on the submissions - keeps customers engaged and happy</p></Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Visual UI</h3></Col>
    <Col md={8} className="sub-content">Cisco UI Kit
        Fit into Topology Builder UI</Col>
    </Row>
 </section>

 <section className="port-section" id="outcomes" >
 <h2 className="text-center">Lesson &amp; Outcomes</h2>
 <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Throughts</h3></Col>
    <Col md={8} className="sub-content">
      <p>As this is something new and an experiment we will see how many people use it. To start with we will have 10,000 users a 5% response rate is
         normal for surveys and user feedback on dCloud apps so we can measure it against that.</p>
<p>What worked well in the project? - designing for myself  - this is unusual as everything in this team has been for products most people would never use. Figuring out problems was really fast.
In hindsight, what would you do differently? - Look at how we manage and analyse overall feedback for completely new projects. Spend some time talking to the new potential users
If you’d had more time, what would you have done? - A full on admin system for the requests
What data do you have to quantify the results of the project? - At time of writing this has been broken down into stories and now being built.</p>

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
