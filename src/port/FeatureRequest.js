import React from 'react'
import {Row, Nav, Col, Card, CardGroup, Container} from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import twoppl from './../assets/2ppl.png'
import threeppl from './../assets/3ppl.png'
import frprocess from './../assets/FR-Process.svg'
import frIdea from './../assets/FR-IdeaBoard.svg'
import frFlowA from './../assets/FR-Design1Flow.svg'
import frFlowB from './../assets/FR-Design2Flow.svg'
import frwirea from './../assets/FR-Wire1.svg'
import frwireba from './../assets/FR-Wire2A.svg'
import frwirebb from './../assets/FR-Wire2B.svg'
import frwirebc from './../assets/FR-Wire2C.svg'
import frdrawone from './../assets/FR-Draw1.svg'
import frwdrawtwo from './../assets/FR-Draw2.svg'
import frnewreq from './../assets/FR-NewRequest.gif'
import frupvote from './../assets/FR-UpVote.gif'
import frreadcomment from './../assets/FR-ReadComment.gif'
import fraddcomment from './../assets/FR-AddComment.gif'
import frreplycomment from './../assets/FR-ReplyComment.gif'
import fr from './../assets/FR.svg'

export const FeatureRequest = () => (
  <div>
<section className="port-hero">
  
  <Container>
    <Row >
    <Col md={6} className="py-5">
            <h1 className="display-6">Feature Request UI</h1>
            <blockquote class="blockquote title-border my-4">
              <p>A feature request system to capture user needs, feedback and determine the most popular requests.</p>
            </blockquote>
        
              <Nav defaultActiveKey="/home" className="flex-column">
            
                <Link to="#background">Background</Link>
                <Link to="#design">Design</Link>
                <Link to="#outcomes">Outcomes</Link>
              </Nav>
          </Col>
            <Col md={6} className="d-flex align-items-center"> 
             <img src={fr} alt="Feature request illustration" className="img-fluid"/>
            </Col>  
    </Row>
    </Container>
  
 </section>
 <Container>
 <section className="port-section" >
 <h2 className="text-center">Process</h2>
 <div className="text-center">
 <img src={frprocess} alt="Process" className="img-fluid"/> 
 </div>
 </section>

 <section className="port-section" id="background">
    <h2 className="text-center">Background</h2>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Problem</h3></Col>
    <Col md={8} className="sub-content">
    <p>The task was to repurpose Topology Builder for new user groups unfamiliar with the technology but now forced to use it by the Covid Pandemic. 
      We had a basic awareness of these users’ day to day activities, 
      but it was necessary to acquire more detailed information, and as such a system for gathering feedback was put in place  .</p>
    <p>It was essential to find out what was missing from Topology Builder. Particular focus was directed towards large scale users such as Cisco sellers, 
      partners and sales engineers. 
      Details of what was missing and who was affected were gathered, and this information was factored into successive developments  .</p>

    </Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Users	&amp; Audience</h3></Col>
    <Col md={9} className="sub-content">
    <CardGroup>
  <Card>
    <div className="text-center">
      <Card.Img variant="middle" src={twoppl} className="img-fluid" />
    </div>
    <Card.Body>
      <Card.Title>Product Managers, UX Designers</Card.Title>
      <Card.Text>
      Look at the reported problems and design the solutions
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
  <div className="text-center">
    <Card.Img variant="middle" src={threeppl} className="img-fluid" />
    </div>
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
      <p>I strongly advocated this project as I personally noticed a problem knowing what the gaps between user cases were. 
        I would of course liked to have consulted users before starting this project, 
        but the circumstances at the time meant contacting SEs and partners was not an option .</p>
    </Col>
    </Row>
 </section>

 <section className="port-section" id="design" >
 <h2 className="text-center">Design</h2>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Idea Generation</h3></Col>
    <Col md={8} className="sub-content">
      <p>As designers we talked about the features we wanted and how best to capture the info. 
        We wanted to keep things as simple as possible to maximise the return of information without participants having to analyse requests.</p>
        <ul>
          <li>Organised ideas into buckets in order of importance </li>
          <li>Reasons for ideas - Why</li>
          <li>Two user types - admin (us) Topology users</li>
        </ul>
        <img src={frIdea} alt="Feature Request Ideas Board" className="img-fluid"/> 
    </Col>
    </Row>
   {/* <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Feature mapping &amp; user flow</h3></Col>
    <Col md={8} className="sub-content"> 
    </Col>
</Row>*/}
    <h3 className="title-border">Prototyping</h3>
 
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h4>User view Design 1</h4></Col>
    <Col md={8} className="sub-content"> 
    <h6 className="mb-3">Flow diagram with basic required features</h6>
    <img src={frFlowA} alt="Flow A" className="img-fluid"/> 
    <h6 className="mb-3 mt-5">Sketched Iteration</h6>
      <img src={frdrawone} alt="hand drawn sketch one" className="img-fluid"/> 
      <h6 className="mb-3 mt-5">Wireframe</h6>
      <img src={frwirea} alt="Wireframe design of first iteration" className="img-fluid"/> 
     
      </Col>
      
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h5>Thoughts &amp; discussion</h5></Col>
    <Col md={8} className="sub-content"><p>Thoughts screen was unnecessarily busy. We wanted to reduce submissions of the same substance and so needed a way to display other people’s submissions. 
      We postulated that commenting on submissions and explaining further views would encourage discussions and conversations. </p></Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h4>User view Design 2</h4></Col>
    <Col md={8} className="sub-content">
    <h6 className="mb-3">Second pass with additional features</h6>
    <img src={frFlowB} alt="Flow B" className="img-fluid"/> 
    <h6 className="mb-3 mt-5">Sketched page, request form modal, comment/reply idea, request card info</h6>
      <img src={frwdrawtwo} alt="hand drawn sketch two" className="img-fluid"/> 
      <h5 className="mb-3 mt-5">Wireframes of second designs</h5>
      <h6 className="mb-3">Landing Page</h6>
      <img src={frwireba} alt="Wireframe design of second iteration - landing page" className="img-fluid"/> 
      <h6 className="mb-3 mt-5">Submit request modal</h6>
      <img src={frwirebc} alt="Wireframe design of second iteration"/> 
      <h6 className="mb-3 mt-5">Commenting and Replying</h6>
      <img src={frwirebb} alt="Wireframe design of second iteration" className="img-fluid"/> 

      
      </Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h5>Thoughts &amp; discussion</h5></Col>
    <Col md={8} className="sub-content"><p>
      Screen is less cluttered. Center aligned content makes for easy scanning. Commenting and replying make it possible to 
      track which ones people are talking about and also give us the ability to capture more insights of the problem. Commenting is probably not a minimum feature.
      </p></Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Interactions &amp; Visuals</h3></Col>
    <Col md={8} className="sub-content">
      Visuals designed in Figma using:
      <ul>
        <li>Cisco UI Kit - as a base</li>
        <li>Topology Builder UI design - design language for this suite of products that we previously designed</li>
        </ul>
       
        <h6 className="mb-3">New Request</h6>
        <img src={frnewreq} alt="Create a new request" className="img-fluid mb-2 ux-gif"/> 
        <h6 className="mb-3 mt-5">Upvote</h6>
        <img src={frupvote} alt="Upvote a request" className="img-fluid mb-2 ux-gif"/> 
        <h6 className="mb-3 mt-5">Read Comments</h6>
        <img src={frreadcomment} alt="Read Comments" className="img-fluid mb-2 ux-gif"/> 
        <h6 className="mb-3 mt-5">Add Comment</h6>
        <img src={fraddcomment} alt="Add Comment" className="img-fluid mb-2 ux-gif"/> 
        <h6 className="mb-3 mt-5">Reply to Comment</h6>
        <img src={frreplycomment} alt="Reply to Comment" className="img-fluid mb-2 ux-gif"/> 
   
   
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
      <p>This is a new project and as such it is imperative to monitor usage and process feedback. We will initially have 10,000 users, 
        and can expect at least a 5% response rate as is normal for dCloud apps user surveys and feedback.</p>
<p>Had an admin system been in place to process requests we could have worked more efficiently.</p>
<p> In hindsight I think we need manage and analyse overall feedback for completely new projects. Spend some time talking to the new potential users.</p>
<p> Any future increase in requests will pose administrative challenges which must be dealt with competently and decisively. 
  A well-resourced system should be in place to meet this challenge  </p>
<p> The business stakeholders thought the idea of the project was good but they suggested there might be other ways to get feedback. </p>

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
