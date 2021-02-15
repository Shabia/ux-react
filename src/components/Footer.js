import React from 'react';
import {Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'



export const Footer = () => (
<footer className="mt-4 py-1">
  <Container className="text-center">
  <p className="mt-3 small">Hand made with <span role="img" aria-label="jsx-a11y/accessible-emoji">❤️ </span>in React</p>
  <h5>Let's Connect</h5>
    
    <div className="social-container">
    <a href="https://www.twitter.com/shabias" className="twitter social">
      <FontAwesomeIcon icon={faTwitter} />
    </a>
    <a href="https://www.instagram.com/shabias"
      className="instagram social">
      <FontAwesomeIcon icon={faInstagram}  />
    </a>
    </div>
  </Container>
</footer>
)
