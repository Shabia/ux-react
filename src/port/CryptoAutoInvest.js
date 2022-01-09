import React from 'react'
import Iframe from 'react-iframe'
import {Row, Nav, Col, Card, CardGroup, Container} from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import aisketch from './../assets/AI-Sketch.png'
import aiprocess from './../assets/AI-Process.png'
import aihomescreen from './../assets/AI - App HomeScreen.png'
import aibuyscreena from './../assets/AI - Buy Screen.png'
import aibuyscreenb from './../assets/AI - Buy Screen2.png'
import aibuyscreenc from './../assets/AI - Buy Screen3.png'
import aiconfirmscreen from './../assets/AI - ConfirmationScreen.png'
import aihelp from './../assets/AI - Help Screen.png'
import aiflow from './../assets/AI - Flow.png'
import people from './../assets/people.png'
import ai from './../assets/AI.svg'






export const CryptoAutoInvest = () => (
  <div>
<section className="port-hero">
  
  <Container>
    <Row >
    <Col md={6} className="py-5">
            <h1 className="display-6">Crypto Auto Invest</h1>
            <blockquote class="blockquote title-border my-4">
              <p>Feature to dollar cost average into Crypto with a potential to passively invest</p>
            </blockquote>
        
              <Nav defaultActiveKey="/home" className="flex-column">
            
                <Link to="#background">Background</Link>
                <Link to="#research">Design</Link>
                <Link to="#design">Design</Link>
              </Nav>
          </Col>
            <Col md={6} className="d-flex align-items-center"> 
            <img src={ai} alt="Crypto Auto invest" className="img-fluid mb-2 ux-gif"/> 
            </Col>  
    </Row>
    </Container>
  
 </section>
 <Container>
 <section className="port-section" >
 <h2 className="text-center">Process</h2>
 <div className="text-center">
 <img src={aiprocess} alt="Help screen ui" className="img-fluid mb-2 ux-gif"/> 
 </div>
 </section>

 <section className="port-section" id="background">
    <h2 className="text-center">Background</h2>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Problem</h3></Col>
    <Col md={8} className="sub-content">
    <p>A common term in crypto is dollar cost averaging to get the best price via recurring passive purchases. 
      This can help users by taking the decision away from them of when to buy, spend less time on market analysis leading to a heavy amount of decision making a user must do to invest.   </p>

    </Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Users	&amp; Audience</h3></Col>
    <Col md={9} className="sub-content">
    <CardGroup>
  <Card>
  <div className="text-center">
    <Card.Img variant="middle" src={people} className="img-fluid" />
    </div>
    <Card.Body className="text-center">
      <Card.Title>Beginner casual Investor</Card.Title>
      <Card.Text>
      The user is a beginner casual investor who is looking to get into crypto by dollar cost averaging. They have never bought crypto before and this will be their first purchase. 
<br />
<p className="text-left">
<h5 className="mb-3 mt-5">User assumptions for the prototype</h5>
</p>
<ul className="text-left">
<li>User has just signed up</li>
<li>Doesn’t know what they’re doing</li>
<li>Is not from technical background</li>
</ul>


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
      <p>This project is a personal design experiment to problem solve an investing issue</p>
    </Col>
    </Row>
 </section>

 <section className="port-section" id="research" >
 <h2 className="text-center">Research</h2>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Talk to Users</h3></Col>
    <Col md={8} className="sub-content">
      <p>Spoke to people  who aren’t into Crypto yet but curious  to see if they’re interested in investing.</p>
      <h5 className="mb-3 mt-5">Common issues:</h5>
        <ul>
          <li>Don’t know what crypto is</li>
          <li>So many different coins</li>
          <li>Don’t know what to buy or when to invest</li>
          <li>Don’t understand investing</li>
          <li>Would invest if they didn’t have to think about it</li>
        </ul>
        <p>It’s worth considering some of these user problems when designing the process so we can aim to get more people into crypto.</p>
         <p> Also as the buyer is casual and wants the process to be as simple as possible, I will look exclusively at mobile solutions, as this is more convenient for people. </p>
    </Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Existing Products</h3></Col>
    <Col md={8} className="sub-content">
    <p>Looked at two apps to see how they do a recurring purchase.</p>
    <h5 className="mb-3 mt-5">Coinbase</h5>
    <ul className="list-unstyled">
      <li>+ Has a simple process</li>
      <li>+ Clear CTA underneath price</li>
      <li>+ Purchase types are simple, no calendars</li>
      <li>- Not convenient for specific dates</li>
    </ul>

    <h5 className="mb-3 mt-5">Crypto.com</h5>
    <ul className="list-unstyled">
      <li>+ Information on what a recurring purchase is</li>
      <li>- Info is a lot of text so new users probably won’t read it</li>
      <li>- Hard to see CTA for recurring purchase on price screen</li>
      <li>+ has a selection of frequencies</li>
      <li>+ Specific dates available</li>
      <li>- The UI for frequencies has too many selections therefore unnecessary and complex</li>
    </ul>
    </Col>
    </Row>
    </section>
    <section className="port-section" id="design" >
 <h2 className="text-center">Design</h2>
    <h3 className="title-border">Prototyping</h3>
 
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h4>Potential Features</h4></Col>
    <Col md={8} className="sub-content"> 
 
    <p>Based on user and existing app research came up with a few ideas</p>

    <ul>
    <li>Frequency of buys - so users can do the recurring buy by choosing the frequency </li>
    <li>User selects own date - This is similar to the standard feature on other apps</li>
    <li>App auto purchase - A new feature in the crypto world that I would like to introduce. Based on the user feedback the very casual new user doesn’t have to think about anything. 
      The app does all the work by analysing the market data, the user just selects the monthly amount they’re comfortable with then the app will choose a good buy price based on dip %. 
      This is obviously very draft, the nuances are something to work on, but something like this would likely benefit new users. </li>
    <li>General screen with a portfolio outline and a basic profit loss analysis - this would help new users keep track of how their assets are doing</li>

    </ul>
     </Col>
  </Row>

  <Row className="sect-row">
    <Col md={3} className="sub-section"><h4>Quick Ideas</h4></Col>
    <Col md={8} className="sub-content"> 
    <p>To get a basic idea of the process and the screens. I sketched some basic screens of how this could potentially work and to guide to the wireframes and user process.</p>
    <img src={aisketch} alt="Help screen ui" className="img-fluid mb-2 ux-gif"/> 

     </Col>
  </Row>
  <Row className="sect-row">
    <Col md={3} className="sub-section"><h4>Wireframes</h4></Col>
    <Col md={8} className="sub-content"> 
    <h5 className="mb-3">Home Screen</h5>
    <img src={aihomescreen} alt="Home screen a" className="img-fluid mb-2 ux-gif"/> 



    <ul>
      <li>Initial first entry has two CTA - invest and learning how to invest</li>
      <li>Learning how to invest would take users to the help screen (see below)</li>
      <li>After an investment has been made a profit/loss figure and chart is displayed with a list of cryptos they own. 
        The profit loss/figure and value of the coin would be useful to tell the user how well their portfolio is doing</li>
    </ul>

    <h5 className="mb-3">Select Crypto</h5>
    Add image

    <ul>
      <li>This is a pretty standard screen based off App UI. It lists all the available crypto on the app</li>
    </ul>

    <h5 className="mb-3">Buy Screen</h5>
    <img src={aibuyscreena} alt="Buy screen a" className="img-fluid mb-2 ux-gif"/> 
    <img src={aibuyscreenb} alt="Buy screen b" className="img-fluid mb-2 ux-gif"/> 
    <img src={aibuyscreenc} alt="Buy screen c" className="img-fluid mb-2 ux-gif"/> 

    <ul>
      <li>Based on existing App buy UI</li>
      <li>After selecting a budget frequency selection is made available. This is similar to Coinbase.</li>
      <li>User can select single purchase or monthly. If they select monthly then additional frequency dates are available</li>
      <li>For each type of purchase (except single ) user can select a given date or calendar or App Auto Purchase to remove the thinking and leave it to the app. There is a small info view to explain what App Auto Purchase is if people didn’t watch the help investment videos
</li>
      <li>Can add more frequency types in the future</li>
    </ul>

    <h5 className="mb-3">Confirmation Screens</h5>
    <img src={aiconfirmscreen} alt="Confirmation Sscreen UI" className="img-fluid mb-2 ux-gif"/> 

    <ul>
      <li>This is a standard confirm screen where user would accept the purchase then a feedback screen is displayed</li>
    </ul>

    <h5 className="mb-3">Help Screen </h5>
    <img src={aihelp} alt="Help screen ui" className="img-fluid mb-2 ux-gif"/> 

    <ul>
      <li>Decided to add a simple help screen with basic videos about investing so it helps users get a better understanding of the basics of investing</li>
    </ul>
     </Col>
  </Row>
  <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">User Flow Process</h3></Col>
    <Col md={8} className="sub-content">
      
      <p>Visuals designed in Figma using Cisco UI design language as a base</p>

      <img src={aiflow} alt="User flow diagram" className="img-fluid mb-2 ux-gif"/> 
        <div>
    </div>
    </Col>
    </Row>
    <Row className="sect-row">
    <Col md={3} className="sub-section"><h3 className="title-border">Visuals & Interactions</h3></Col>
    <Col md={8} className="sub-content">
      <h4>Putting it all together now</h4>
      <p>Interactions designed in Figma</p>
      <Iframe width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FarGIOlhOVbq8aRdduqS3UO%2FKraken%3Fpage-id%3D301%253A683%26node-id%3D301%253A723%26viewport%3D331%252C48%252C0.12%26scaling%3Dscale-down%26starting-point-node-id%3D301%253A723" allowfullscreen />
    
   
        <div>
    </div>
        
        </Col>
    </Row>
 </section>

 </Container>


      </div>




)
