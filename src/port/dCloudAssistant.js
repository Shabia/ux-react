import React from 'react'
import {Row, Nav, Col, Card, CardGroup, Container} from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
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
import cb from './../assets/CB.svg'

export const dCloudAssistant = () => (
  <div>
<section className="port-hero">
  
  <Container>
    <Row >
    <Col md={6} className="py-5">
            <h1 className="display-6">dCloud Assistant</h1>
            <blockquote class="blockquote title-border my-4">
              <p>App to schedule and interact with dCloud without a UI via using bot commands / voice</p>
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
 <img src={frprocess} alt="Process" className="img-fluid"/> 
 </div>
 </section>

 <section className="port-section" id="background">
    <h2 className="text-center">Background</h2>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Problem</h3></Col>
    <Col md={8} className="sub-content">
    <p>We found that people liked to schedule on the go and some super users used dcloud Apis to create their own 
      scheduling bot to bypass the UI which they thought was long winded. When using the dCloud catalog we found 
      that a bunch of users created a command list via Cisco Webex API’s to be able.</p>
      <p>We thought it would be a nice experiment to build something official out for them</p>

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

 <section className="port-section" id="design" >
 <h2 className="text-center">Design</h2>
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
    <Col md={8} className="sub-content"><p>Thoughts screen is a bit busy
        We want to reduce submissions of the same thing so need a way to show other peoples submission
        Maybe commenting on submissions and for explaining any further views - encourages discussions and conversations
        A way to show we are working on the submissions - keeps customers engaged and happy</p></Col>
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
    <Col md={8} className="sub-content"><p>Thoughts screen is a bit busy
        We want to reduce submissions of the same thing so need a way to show other peoples submission
        Maybe commenting on submissions and for explaining any further views - encourages discussions and conversations
        A way to show we are working on the submissions - keeps customers engaged and happy</p></Col>
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
