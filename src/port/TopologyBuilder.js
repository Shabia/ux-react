import React from 'react'
import {Row, Nav, Col, Card, CardGroup, Container, Table} from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import fiveppl from './../assets/5ppl.png'
import tbprocess from './../assets/TB-Process.svg'
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
import tb from './../assets/TB.svg'

export const TopologyBuilder = () => (
  <div>
<section className="port-hero">
  
  <Container>
    <Row >
    <Col md={6} className="py-5">
            <h1 className="display-6">Topology Builder</h1>
            <blockquote class="blockquote title-border my-4">
              <p>Desktop app for designing and creating cloud hosted Cisco network maps and solutions</p>
            </blockquote>
        
              <Nav defaultActiveKey="/home" className="flex-column">
            
                <Link to="#background">Background</Link>
                <Link to="#research">Research</Link>
                <Link to="#design">Design</Link>
                <Link to="#outcomes">Outcomes</Link>
              </Nav>
          </Col>
            <Col md={6} className="d-flex align-items-center"> 
             <img src={tb} alt="Feature request illustration" className="img-fluid"/>
            </Col>  
    </Row>
    </Container>
  
 </section>
 <Container>
 <section className="port-section" >
 <h2 className="text-center">Process</h2>
 <div className="text-center">
 <img src={tbprocess} alt="Process" className="img-fluid"/> 
 </div>
 </section>

 <section className="port-section" id="background">
    <h2 className="text-center">Background</h2>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Problem</h3></Col>
    <Col md={8} className="sub-content">
  
      <p>The current version of Topology builder was built on the fly with programmers and demo developers with no UX or further 
        use cases involved. The goal then was to make a tool for demo developers but now with the world going remote and more people 
        relying on designing solutions remotely we need to quickly redesign Topology builder and include new features for new types of users.  </p>

        <h4 className="mt-4 mb-3">Redesign Topology builder </h4>
        <ol>
          <li>Get to feature parity with v1</li>
          <li>Make it more user friendly by solving common user problems</li>
          <li>Complex diagrams need to be easily visualised </li>
          <li>Ability to see full picture including external entities </li>
          <li>For a complete diagram need to draw non functioning objects</li>
          <li>On board new user types</li>
        </ol>
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
      <Card.Title>dCloud Operations, Admins, Demo Developers,  Lab Builders, System Engineers
 </Card.Title>
      <Card.Text>
      Look at the reported problems and design the solutions
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
            <dd>Lead UX Designer - logical diagram/drawing view</dd>
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
            <dd>Antony - Lead UX Design - Table config view</dd>
            <dd>Fadzie - Product Mangement</dd>
            <dd>Barry - Project Mangement</dd>
          </dl>
          </Col>
          <Col md={6}>
          <dl>
            <dt>Method  and Tools</dt>
            <dd>Figma Design -  Wireframe + UI Design</dd>
            <dd>Adobe Sketch -  Rapid prototype ideas.</dd>
            <dd>Miro - User flows, Requirements Analysis</dd>
            <dd>Ipad Adobe Sketch -  Rapid Prototyping</dd>
          </dl>
          </Col>
        </Row>
      </Card>
    </Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Collaboration Style</h3></Col>
    <Col md={9} className="sub-content">
    <p><strong>Daily  UX check-ins</strong> - going through previous day’s work, getting feedback from each other, discussing problems and working on insights.</p>

<p><strong>Bi-weekly project check-ins</strong> - product owner, software engineers, software team lead, project manager and UX designers. 
  Show the current work in progress, ask tough questions and get sign off on designed solutions. </p>

<p><strong>Kick off meetings </strong>- All stakeholders working remotely and multi disciplinary teams consisting of Tech Leads, 
  Product Managers, Project Managers, Demo Developers, Programme Leads, Software Engineers and UX designers </p>
   
    
    </Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Scope &amp; Constraints</h3></Col>
    <Col md={9} className="sub-content">
    <p>Designing a system for people do not yet use it with no access to them </p>
      <p>A massive project with a very small budget - two designers</p>
      <p>Requirements keep changing on the fly</p>
  </Col>
    </Row>
 </section>

 <section className="port-section" id="research">
    <h2 className="text-center">Research</h2>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Analysis</h3></Col>
    <Col md={8} className="sub-content">
  
      <p>Analysed current app by </p>

  
    </Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Talk to users</h3></Col>
    <Col md={9} className="sub-content">
<p>Upon developing a background understanding of networking and the current app we decided that to make a better product we should 
  interview the users, find out pain points or potential new features </p>
    </Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h5>Interviews</h5></Col>
    <Col md={8} className="sub-content"><p>Set up calls for 5 different users to talk to us about their  job role, why they 
      used topology builder and how they used it and walk us through how they used the app, 
      what pain points they had and any kind of features that would make things easier for them.</p></Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h5>Survey</h5></Col>
    <Col md={8} className="sub-content"><p>Did a two question opened survey. Kept it brief to encourage people to fill it
       out and open ended so to gather insights without pushing them into thought corners and find out what the actual 
      good/bad points were..</p>
      <ul>
        <li>What do you like about it</li><li>What do you dislike about it.</li>
      </ul>
      <h6 className="my-4">Findings</h6>
      <ul>
        <li>Can’t visualise vpod gateway- Can’t depict external entities - current one doesn’t show full picture of the solution</li>
        <li>Have to configure all items - when using VM templates no settings come with it just the name of the server</li>
        <li>Can’t see how big the demo is getting, storage size</li>
        <li>When running demo it can use up a lot of RAM- default Icons too vague and fit for purpose</li>
        <li>Might want to demo an alternate icon which fits design better</li>
        <li>Diagrams can get very big, how to see things without a big screen</li>
        <li>No way to collaborate on building the diagram</li>
        <li>Diagrams are very static and no way to able to use it as diagramming tool</li>
        <li>No way to find items</li>
        </ul>
      </Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Define Requirements</h3></Col>
    <Col md={8} className="sub-content">
    <p>Putting together the information from the user interviews and checking in with the business</p>
<h5 className="my-4">Business stakeholders</h5>
<ul>
  <li>The business had a few things that tied into what users had problems with</li>
  <li>Freeform diagramming and ability to add elements that do not need to be configured</li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
<h5 className="my-4">From user insights</h5>

<ul>
<li>Some sort of search - findability in complex diagrams</li>
  <li>Photoshop like drawing tools - no limitations in what the tool can demonstrate </li>
  <li> Navigator , pan + zoom</li>
  <li> Navigator , pan + zoom</li>
  <li>Add more views like external, maybe more pages like google sheets</li>
</ul>
<h5 className="my-4">Mapping solutions to user problems</h5>
  
<Table responsive="sm">
      <thead>
        <tr>
          <th>Problem</th>
          <th>Solution</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
      </tbody>
    </Table>

  
    </Col>
    </Row>
 </section>
 <section className="port-section" id="design" >
 <h2 className="text-center">Design</h2>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Information Architecture</h3></Col>
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
