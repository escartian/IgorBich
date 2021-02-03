import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import * as serviceWorker from './serviceWorker';

import Logo from './Logo.png';
import LinkedIn from './LinkedIn_logo_initials.png';


const body = (<div id = "default">
    
  <Navbar bg="dark"  variant="dark" expand="lg">
    <Navbar.Brand href="#home">
        <img
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Igor Bich logo"
        />
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">About</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

  <Container className="p-3">
  <h1 className="header">
      Hello, I'm Igor Bich</h1>
      <h3>Software engineer</h3>
    <Jumbotron>
      <p> Currently  I am working for TCS as a software developer and have been with the company since 2018.
          I studied computer science at The College of New Jersey (TCNJ)
          where I earned my Bachelor’s of Science degree in computer science.
      </p>
      <p>    
          I am open to opportunities for full time and contract to hire positions in fields related
          to computer science and software development.
          My interests within the realm of computer science are software engineering, web development,
          mobile app development, networks and security, machine learning, and robotics,
          however with the constant changes in technology, I am open to experimentation.
      </p>
      <p>
          I am comfortable with any operating system.
          My main languages are Java and Javascript, however I am familiar with many other popular languages.
      </p>
      <p>    
          Outside of computer science I have a variety of hobbies. I enjoy playing guitar, drawing, writing, and working out.
      </p>
    </Jumbotron>
    <p>Contact Me: <a href ="https://www.linkedin.com/in/igor-bich"><img 
        src={LinkedIn}
        width="30"
        height="30"
        />
      </a>
    </p>
  </Container>
</div>);

ReactDOM.render(
  body, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
