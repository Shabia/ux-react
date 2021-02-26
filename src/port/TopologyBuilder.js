import React from 'react'
import {Row, Nav, Col, Card, CardGroup, Container, Table, Alert} from 'react-bootstrap';
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
import tbdrawsearcha from './../assets/TB-Draw-Search-A.png'
import tbdrawsearchb from './../assets/TB-Draw-Search-B.png'
import tbdrawsearchc from './../assets/TB-Draw-Search-C.png'
import tbdrawsearchd from './../assets/TB-Draw-Search-D.png'
import tbwirea from './../assets/TB-Wire-A.png'
import tbwireb from './../assets/TB-Wire-B.png'
import tbwiresearch from './../assets/TB-Wire-Search.png'
import tbwflowsearch from './../assets/TB-Flow-Search.svg'
import tbflowvlan from './../assets/TB-Flow-Vlan.svg'
import tbflowvm from './../assets/TB-Flow-VM.svg'
import tbflowhard from './../assets/TB-Flow-Hardware.svg'
import tblinesblue from './../assets/TB-Lines-Blue.svg'
import tblinescolor from './../assets/TB-Lines-Color.svg'
import tblinestype from './../assets/TB-Lines-Type.svg'
import tbiconstates from './../assets/TB-Icon-States.svg'
import tbdesignfinal from './../assets/TB-Design-Final.svg'
import tbmenugif from './../assets/TB-Menu.gif'
import tbicongif from './../assets/TB-Icon.gif'
import tbtabgif from './../assets/TB-Tabs.gif'
import tbsearchgif from './../assets/TB-Search.gif'
import tbshowgif from './../assets/TB-ShowHide.gif'
import tbflowold from './../assets/TB-Flow-Old.jpg'



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
  
      <p>The current version of Topology Builder was built ad hoc by Programmers and Demo Developers with no UX or further use cases involved. 
        As such, the goal was to make a tool for Demo Developers, but the rapid move towards remote work and the increasing reliance 
        on remotely designed solutions meant we had to quickly redesign Topology builder and include new features for new types of users.    </p>

        <h4 className="mt-4 mb-3">Redesign Topology Builder  </h4>
        <ol>
          <li>Get to feature parity with V1</li>
          <li>Make it more user friendly by solving common user problems</li>
          <li>Make complex diagrams easy to visualise</li>
          <li>Enable full picture visibility including external entities </li>
          <li>Draw non-functioning objects for complete diagram</li>
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
      Design and build computer topologies, networks, solutions and showcase them to customers
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
    <p><strong>Daily  UX check-ins</strong> - Reviewing previous days’ work, giving and receiving feedback, discussing problems and working on insights.</p>

<p><strong>Bi-weekly project check-ins</strong>- Product Owner, Software Engineers, Software Team Lead, Project Manager and UX Designers. 
Presenting work in progress, asking tough questions and getting approval of designed solutions </p>

<p><strong>Kick off meetings </strong>- All stakeholders working remotely, Product Managers, Project Managers, Demo Developers, Programme Leads, 
Software Engineers, Multi-Disciplinary teams consisting of Tech Leads, UX designers  </p>
   
    
    </Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Scope &amp; Constraints</h3></Col>
    <Col md={9} className="sub-content">
    <p>To design a system for future users without access to them </p>
      <p>A huge project with a small budget (two Designers)</p>
      <p>Constantly and rapidly changing requirements</p>
  </Col>
    </Row>
 </section>

 <section className="port-section" id="research">
    <h2 className="text-center">Research</h2>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Analysis</h3></Col>
    <Col md={8} className="sub-content">
  
      <p>Analysing current app by consulting previous developers and current users</p>
      <p>Mapping all interactions to better understand its structure</p>
      <img src={tbflowold} alt="Old TB Flow Diagram" className="img-fluid mb-2"/> 
  
    </Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Talk to users</h3></Col>
    <Col md={9} className="sub-content">
    <p>Having gained a background understanding of networking and the current app, we interviewed the users to 
      find out pain points and potential new features. </p>
    </Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h5>Interviews</h5></Col>
    <Col md={8} className="sub-content"><p>Organised calls for 5 different users to walk us through how they used the app and to discuss their job role, 
      why and how they used topology builder,  what pain points they had, and any features that would make things easier for them.</p></Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h5>Survey</h5></Col>
    <Col md={8} className="sub-content"><p>Carried out a two-question survey. Kept it brief to maximise participation, and open-ended to avoid 
      pushing participants into thought corners.</p>
      <ul>
        <li>What do you like about it?</li><li>What do you dislike about it?</li>
      </ul>
      </Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h5>Findings</h5></Col>
    <Col md={8} className="sub-content">
    <oblique> A small selection of findings</oblique>
    <ul>
        <li>Vpod gateway not visible</li>
        <li>External entities cannot be depicted</li>
        <li>Current version does not show full picture of the solution</li>
        <li>All items must be configured</li>
        <li>No accompanying settings with VM templates – only name of the server</li>
        <li>Fluctuations in demo size not visible</li>
        <li>Storage size</li>
        <li>Excessive RAM use while running demo</li>
        <li>Better fitting alternate icon desirable</li>
        <li>Large diagrams create screening issues</li>
        <li>No facility for collaboration on building the diagram</li>
        <li>Diagrams are static and it cannot be used as a diagramming tool</li>
        <li>No way to find items</li>
      </ul>
        
    </Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Define Requirements</h3></Col>
    <Col md={8} className="sub-content">
      <p>Assessed the business requirements, listed user problems and proposed solutions. </p>
        <strong>A selection of problems:</strong>
<Table responsive="sm" striped bordered >
      <thead>
        <tr>
          <th>Problem</th>
          <th>Solution Idea</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Hard to find items</td>
          <td>Some kind of map search</td>
        </tr>
        <tr>
          <td>Can't see how things connect</td>
          <td>Make lines clearer</td>
        </tr>
        <tr>
          <td>Screen too cluttered for complex topologies</td>
          <td>Pan + Zoom, Navigator</td>
        </tr>
        <tr>
          <td>Can't display external entities for a full diagram</td>
          <td> Find way to show external entities</td>
        </tr>
        <tr>
          <td>Diagram requires non-functioning items</td>
          <td> Enable drawing and adding images</td>
        </tr>
      </tbody>
    </Table>

     </Col>
    </Row>
 </section>
 <Row className="justify-content-md-center">
    <Col md={8} className="text-center">
    <Alert variant="primary">
      <Alert.Heading>Hey, this project is pretty big!</Alert.Heading>
      <p>
      I'm sure you don't want to read a dissertation, so rather than show everything I've selected some UI parts for each design type.
      </p>
    </Alert>
      </Col>
</Row>
 <section className="port-section" id="design" >
 <h2 className="text-center">Design</h2>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Information Architecture</h3></Col>
    <Col md={8} className="sub-content">
      <p>In order to keep track and have a reference whilst prototyping, the flow diagram was redrawn with changes in place. 
        After analysing user movement through the app, I redrew the flow diagram with improvements to the flow of forms/tasks.
        </p> <p>The flow diagrams adapted as the design and information architecture changed through prototyping.</p>
        </Col>
        </Row>
        <Row className="sect-row">
    <Col md={3} className="sub-section"><h4>Example user flow diagrams</h4></Col>
    <Col md={8} className="sub-content"> 
    <h5 className="mb-3">Add a VLAN</h5>
    <img src={tbflowvlan} alt="Vlan flow" className="img-fluid mb-2"/> 
   
    <h5 className="mb-3 mt-5">Add and Configure Virtual Machines</h5>
    <img src={tbflowvm} alt="VM flow" className="img-fluid mb-2"/> 
    <h5 className="mb-3 mt-5">Delete Hardware</h5>
    <img src={tbflowhard} alt="Hardware flow" className="img-fluid mb-2"/> 
 
   
    
    </Col>
    </Row>

    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Rapid Prototyping</h3></Col>
    <Col md={8} className="sub-content">
      <p>Used iPad and Adobe Sketch to mock-up and draw some areas. Helped visualise ideas on hard sections and make easy to wireframe prototype later.</p>

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
      <li>- Might take time to learn icon meaning</li>
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
    <p>Some ideas so the diagram can be as large as required whilst having complete control of position.</p>
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
      <li>+ Box around area on the navigator shows what part of the diagram is on screen</li>
      <li>- Users who never have used design apps may take some time getting used to it</li>
 
    </ul>
   
      </Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h4>Search</h4></Col>
    <Col md={8} className="sub-content"> 
    <h5 className="mb-3">Idea 1</h5>
    <p>User types in term, result is highlighted and zoomed in on the diagram with the setting open</p>
    <img src={tbdrawsearcha} alt="First Search design" className="img-fluid mb-2"/> 
    <p>Pros / Cons</p>
    <ul className="list-unstyled">
      <li>+ Shows the result exactly</li>
      <li>+ Nice that the setting panel is opened</li>
      <li>- Doesn't support other potential results</li>
    </ul>
    <h5 className="mb-3 mt-5">Idea 2</h5>
    <p>Like above but highlights all potential results with settings opened on side panel with each device on a tab</p>
    <img src={tbdrawsearchb} alt="Second Search design" className="img-fluid mb-2"/> 
    <p>Pros / Cons</p>
    <ul className="list-unstyled">
      <li>+ Everything is on one view</li>
      <li>+ Boundaries will be clear with distinct visual design</li>
      <li>- Might open too many unecessary tabs on side panel</li>
    </ul>
    <h5 className="mb-3 mt-5">Idea 3</h5>
    <p>Fades incorrect results and leaves the matches normal. Added a clear button to remove search state.</p>
    <img src={tbdrawsearchc} alt="Third Search design" className="img-fluid mb-2"/> 
    <p>Pros / Cons</p>
    <ul className="list-unstyled">=
      <li>- Having a search state that needs clearing probably adds another layer of complexity</li>
      <li>- Greying out will confuse with hidden items</li>
    </ul>
    <h5 className="mb-3 mt-5">Idea 4</h5>
    <p>Search model which shows results with info > user selects a single result which is highlighted and setting opened</p>
    <img src={tbdrawsearchd} alt="Fourth Search design" className="img-fluid mb-2"/> 
    <p>Pros / Cons</p>
    <ul className="list-unstyled">
      <li>+ Gives user a list choice with info</li>
      <li>+ Leads them to pick the likely correct result</li>
      <li>+ One side panel open rather than multiple potential panels</li>
    </ul>
  
      </Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Wireframes</h3></Col>
    <Col md={8} className="sub-content">
      
        <p>Wireframes being discussed include UI parts from above pen prototypes</p>
  
    </Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h4>General screen layouts</h4></Col>
    <Col md={8} className="sub-content"> 
      <p>Putting it all together</p>
      </Col>
    </Row>

    <Row className="sect-row">
    <Col md={3} className="sub-section"><h5>First Iteration</h5></Col>
    <Col md={8} className="sub-content">
    <p>Layout with fixed left full menu, search on page, curvy connections</p>
    <img src={tbwirea} alt="First general screen wireframe" className="img-fluid mb-2"/> 
       
        <h6>Thoughts &amp; discussion</h6>
        <ul className="list-unstyled">
      <li>+ Nice overall layout, everything the user needs to see is on screen</li>
      <li>+ Side panels are contextual and useful, tabs enable good categorisation of information</li>
      <li>- Left menu and search bar takes up a lot of space resulting in the actual diagram to be very small</li>
      <li>- Aesthetics of curvy lines questionable</li>
    </ul>

      </Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h5>Second Iteration</h5></Col>
    <Col md={8} className="sub-content">
    <p>Used floating pill menu nav with search and zoom panel to give more space to the diagram</p>
    <p>Side panel shows multiple opened items as tabs</p>
    <img src={tbwireb} alt="Second general screen wireframe" className="img-fluid mb-2"/> 
       
        <h6>Thoughts &amp; discussion</h6>
        <ul className="list-unstyled">
      <li>+ Floating items definitely save a lot of space</li>
      <li>+ Tabbing side panels also makes use of space and users loved the idea of being able to open multiple devices they want configuring</li>
      
    </ul>

      </Col>
    </Row>

    <Row className="sect-row">
    <Col md={3} className="sub-section"><h4>Search</h4></Col>
    <Col md={8} className="sub-content"> 
    <p>When presenting the search ideas, we decided as a team the modal search was probably the most effective. Search is opened by 
      clicking the search icon on the pill menu.</p>
    <h5>Flow</h5>
    <p>Mocked up flow diagram for how search would work</p>
    <img src={tbwflowsearch} alt="Search Flow" className="img-fluid mb-2"/> 
    <h5>Search Popup UI</h5>
    <p>Matched items show up with detailed info to help user make right choice</p>
    <img src={tbwiresearch} alt="Search Modal" className="img-fluid mb-2"/> 
    
        <h6>Thoughts &amp; discussion</h6>
        <ul className="list-unstyled">
      <li>+ Info on the items very useful</li>
      <li>+ Opening of selected device in a side panel so user can configure generated positive feedback from users and business stakeholders</li>
    </ul>

      </Col>
      
    </Row> 


    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Visuals</h3></Col>
    <Col md={8} className="sub-content">
      <p>Some problems needed to be solved using UI design</p>
     </Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h4>Connections</h4></Col>
    <Col md={8} className="sub-content">
     
        <p>On complex diagrams it was hard to tell which device connected to which VLAN as they were all the same</p>
        <img src={tblinesblue} alt="Lines same colour" className="img-fluid mb-2"/> 

        <h5 className="mb-3 mt-5">Solution</h5>
        <p>After some discussion we were inspired by the London Tube map and its use of colour and pattern to clearly present the different tube lines. 
          Adopting a similar approach vis-à-vis the diagram led to improved distinctions between connections</p>
        <img src={tblinescolor} alt="Lines different colour" className="img-fluid mb-2"/> 
        <p>By alternating line colours there is clarity of how devices and VLANS connect.</p> 
        <p> For line types dashes and dots were introduced:</p>
        <img src={tblinestype} alt="Lines type" className="img-fluid mb-2"/> 

     </Col>
    </Row>
    
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h4>States</h4></Col>
    <Col md={8} className="sub-content">
     
        <p>Device icons have different visual states for errors, connections, configuration types etc. I developed several types of states that can be used.</p>
        <img src={tbiconstates} alt="Various icon states" className="img-fluid mb-2"/> 
       
     </Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Final Design</h3></Col>
    <Col md={8} className="sub-content">
     
        <p>After many iterations and feedback from the business stakeholders the final visual design evolved to this </p>
        <img src={tbdesignfinal} alt="Final design" className="img-fluid mb-2"/> 
       
     </Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h4>Interactions</h4></Col>
    <Col md={8} className="sub-content">
      <p>A selection of interactions of UI parts</p>
  
       
        <h5 className="mb-3">Menu Function</h5>
        <img src={tbmenugif} alt="Menu Interaction" className="img-fluid mb-2"/> 
        <h5 className="mb-3 mt-5">Tab through devices</h5>
        <img src={tbtabgif} alt="Tabs Interaction" className="img-fluid mb-2"/> 
     
        <h5 className="mb-3 mt-5">Change Icon</h5>
        <img src={tbicongif} alt="Change Icon Interaction" className="img-fluid mb-2"/> 

        <h5 className="mb-3 mt-5">Show/Hide Details</h5>
        <img src={tbshowgif} alt="Show hide Interaction" className="img-fluid mb-2"/> 
 
        <h5 className="mb-3 mt-5">Search</h5>
        <img src={tbsearchgif} alt="Search Interaction" className="img-fluid mb-2"/> 

     </Col>
    </Row>
 </section>

 <section className="port-section" id="outcomes" >
 <h2 className="text-center">Lesson &amp; Outcomes</h2>
 <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Thoughts</h3></Col>
    <Col md={8} className="sub-content">
      <p>This project was very complex and required many cycles of iterations, feedback and user testing.
         The end result was a well thought out and designed product</p>
<p>The team worked well together in designing this remotely. The collaboration cycles and daily UX discussions provided a great deal of value. 
  Users were very happy with our design which was very rewarding for the team. </p>
<p>Given more time and better circumstances (this project took place during Covid 19 lockdown), it would have been useful to see the topology configurations work in real life. 
  Had this been the case, the team would have better understood how such a product translates into real world use.
</p>

    </Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Future</h3></Col>
    <Col md={8} className="sub-content">
      <p>As this product is released to new user groups, we will process the user feedback and add new designs and features accordingly.</p>
      <p>Overall, I am very excited to launch this.</p>
    </Col>
    </Row>
 </section>
 </Container>


 </div>




)
