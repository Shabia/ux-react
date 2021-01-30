import React from 'react'
import {Row, Nav, Col, Card, CardGroup, Container, Table} from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import fiveppl from './../assets/5ppl.png'
import tbprocess from './../assets/TB-Process.svg'
import tb from './../assets/TB.svg'
import tbdrawsidebar from './../assets/TB-Draw-Tools-SideBar.png'
import tbdrawpill from './../assets/TB-Draw-Tools-Pill.png'
import tbdrawtabs from './../assets/TB-Draw-External-Tabs.png'
import tbdrawborder from './../assets/TB-Draw-External-Borders.png'
import tbdrawzoomnav from './../assets/TB-Draw-Zoom-Nav.png'
import tbdrawzoompan from './../assets/TB-Draw-Zoom-Pan.png'
import tbdrawzoominout from './../assets/TB-Draw-Zoom-InOut.png'

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
  
      <p>Analysed current app by talking to the previous developers and current users for a walk through</p>
      <p>Mapped every interaction to understand how it all fit together</p>
      <p className="display-1"> ADD FLOW DIagram</p>
  
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
      </Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h5>Findings</h5></Col>
    <Col md={8} className="sub-content">
    <ul>
        <li>Can’t visualise vpod gateway- Can’t depict external entities - current one doesn’t show full picture of the solution</li>
        <li>Have to configure all items - when using VM templates no settings come with it just the name of the server</li>
        <li>Can’t see how big the demo is getting, storage size</li>
        <li>When running demo it can use up a lot of RAM</li> <li>default Icons too vague and fit for purpose</li>
        <li>Might want to demo an alternate icon which fits design better</li>
        <li>Diagrams can get very big, how to see things without a big screen</li>
        <li>No way to collaborate on building the diagram</li>
        <li>Diagrams are very static and no way to able to use it as diagramming tool</li>
        <li>No way to find items</li>
        </ul>
        <oblique>* A selection of findings</oblique>
    </Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Define Requirements</h3></Col>
    <Col md={8} className="sub-content">
      <p>Looked at what the business requiremnets were, listed user problems and came up with some solution ideas. </p>
        <strong>A selection of problems:</strong>
<Table responsive="sm" striped bordered >
      <thead>
        <tr>
          <th>Problem</th>
          <th>Solution</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Hard to find items</td>
          <td>Some sort of map type search</td>
        </tr>
        <tr>
          <td>Can't make out how things connect</td>
          <td>Figure out how to make lines more clear</td>
        </tr>
        <tr>
          <td>Too much on screen for complex topolgies</td>
          <td>Pan + Zoom, Navigator</td>
        </tr>
        <tr>
          <td>Can't display external entities for a full diagram</td>
          <td>Figure out how to show external entities</td>
        </tr>
        <tr>
          <td>Sometimes diagram need non functioning items</td>
          <td>Ability to draw/add images</td>
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
      <p>To understand and have a reference whilst prototyping the flow diagram was redrawn with changes in place. on overview of user movement through the app I redrew the flow digram with changes
Logical flow of forms/tasks to make better sense
Added new sections in</p>
   
        <p className="display-1"> ADD new FLOW DIagram</p>
    </Col>
    </Row>
   {/* <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Feature mapping &amp; user flow</h3></Col>
    <Col md={8} className="sub-content"> 
    </Col>
</Row>*/}
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Rapid Prototyping</h3></Col>
    <Col md={8} className="sub-content">
      <p>Use iPad + Adobe Sketch to mockup and draw a few areas. Helped visualise ideas on hard sections and make easy to 
        wireframe prototype chosen solutions in Figma. A few selected screens - for each say the problem, why the solutions and why pick the final one</p>

        <p className="display-4">This project is massive. Here are some selected ui parts:</p>
  
    </Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h4>General screen layouts</h4></Col>
    <Col md={8} className="sub-content"> 
 
    <h5 className="mb-3 mt-5">Sketched Iteration</h5>
      
  
     
      </Col>
      
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h4>Toolbar</h4></Col>
    <Col md={8} className="sub-content"> 
    <h5 className="mb-3">Side bar </h5>
    <img src={tbdrawsidebar} alt="Side bar" className="img-fluid mb-2"/> 
    <p>Pros / Cons</p>
    <ul className="list-unstyled">
      <li>+ Room for text</li>
      <li>+ Easy to understand meaning</li>
      <li>+ Easy to add sub items</li>
      <li>- Takes up a lot of diagram space</li>
      <li>- A lot of empty space below</li>
    </ul>
    <h5 className="mb-3 mt-5">Floating Pill</h5>
    <img src={tbdrawpill} alt="Side bar" className="img-fluid mb-2"/> 
    <p>Pros / Cons</p>
    <ul className="list-unstyled">
      <li>+ Can float over diagram</li>
      <li>+ Takes up small amount of screen space</li>
      <li>+ Takes up small amount of screen space</li>
      <li>- Time to learn icon meaning</li>
    </ul>
    
     

      </Col>
      
    </Row>   <Row className="sect-row">
    <Col md={3} className="sub-section"><h4>External/Internal</h4></Col>
    <Col md={8} className="sub-content"> 
    <h5 className="mb-3">Tabbed like excel sheets</h5>
    <img src={tbdrawtabs} alt="Tabs" className="img-fluid mb-2"/> 
    <p>Pros / Cons</p>
    <ul className="list-unstyled">
      <li>+ Clear tabs to show what is what</li>
      <li>+ People are used to tabs for diffeerent sections from other software</li>
      <li>- Can't visualise how internal elements link outside</li>
      <li>- Might get confusing which tab you're on</li>
    </ul>

    <h5 className="mb-3 mt-5">Boundaries on diagram</h5>
    <img src={tbdrawborder} alt="Border" className="img-fluid mb-2"/> 
    <p>Pros / Cons</p>
    <ul className="list-unstyled">
      <li>+ Everything is on one view</li>
      <li>+ Boundaries will be clear with distinct visual design</li>
    </ul>
   
      
      </Col>
    </Row>

    <Row className="sect-row">
    <Col md={3} className="sub-section"><h4>Support large diagrams</h4></Col>
    <Col md={8} className="sub-content"> 
    <p>Some ideas so the diagram can be as large as needed whilst having complete control of position</p>
    <h5 className="mb-3">Navigator Zoom Tool</h5>
    <img src={tbdrawzoomnav} alt="Border" className="img-fluid mb-2"/> 
    <p>Pros / Cons</p>
    <ul className="list-unstyled">
      <li>+ Able to zoom in and out of diagram so user can keep adding</li>
      <li>+ Box around area shows what part of the diagram is on screen</li>
      <li>- Takes up extra real estate on view</li>
 
    </ul>

    <h5 className="mb-3 mt-5">Trackpad integration</h5>
    <strong>Pan </strong><br /><br />
    <img src={tbdrawzoompan} alt="Border" className="img-fluid mb-2"/> <br /><br />
    <strong>Zoom in/out</strong>
    <img src={tbdrawzoominout} alt="Border" className="img-fluid mb-2"/> 
    <p>Pros / Cons</p>
    <ul className="list-unstyled">
      <li>+ These interactions are found in other desktop apps that support drawing and are quite intuative</li>
      <li>+ Box around area shows what part of the diagram is on screen</li>
      <li>- Takes up extra real estate on view</li>
 
    </ul>
   
      </Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h4>Device Settings</h4></Col>
    <Col md={8} className="sub-content"> 
    <h5 className="mb-3">Flow diagram with basic required features</h5>
    <img src={tbdrawborder} alt="Border" className="img-fluid mb-2"/> 
    <p>Pros / Cons</p>
    <ul className="list-unstyled">
      <li>+ Everything is on one view</li>
      <li>+ Boundaries will be clear with distinct visual design</li>
    </ul>
    <h5 className="mb-3 mt-5">Sketched Iteration</h5>
   
      <h5 className="mb-3 mt-5">Wireframe</h5>
      </Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Wireframes</h3></Col>
    <Col md={8} className="sub-content">
      <p>Use iPad + Adobe Sketch to mockup and draw a few areas. Helped visualise ideas on hard sections and make easy to 
        wireframe prototype chosen solutions in Figma. A few selected screens - for each say the problem, why the solutions and why pick the final one</p>

        <p className="display-4">This project is massive. Here are some selected ui parts:</p>
  
    </Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h4>General screen layouts</h4></Col>
    <Col md={8} className="sub-content"> 
 
    <h6 className="mb-3 mt-5">Sketched Iteration</h6>
      
  
     
      </Col>
      
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h4>Navigation</h4></Col>
    <Col md={8} className="sub-content"> 
    <h6 className="mb-3">Flow diagram with basic required features</h6>
    
    <h6 className="mb-3 mt-5">Sketched Iteration</h6>
    
      <h6 className="mb-3 mt-5">Wireframe</h6>

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

    <h6 className="mb-3 mt-5">Sketched page, request form modal, comment/reply idea, request card info</h6>
      
      <h5 className="mb-3 mt-5">Wireframes of second designs</h5>
      <h6 className="mb-3">Landing Page</h6>
      
      <h6 className="mb-3 mt-5">Submit request modal</h6>
    
      <h6 className="mb-3 mt-5">Commenting and Replying</h6>
   

      
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
        
        <h6 className="mb-3 mt-5">Upvote</h6>
     
        <h6 className="mb-3 mt-5">Read Comments</h6>

        <h6 className="mb-3 mt-5">Add Comment</h6>
 
        <h6 className="mb-3 mt-5">Reply to Comment</h6>

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
