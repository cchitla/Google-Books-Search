import React from 'react';
import './Header.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';


const Header = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <h1 className="text">Book Search</h1>
        <p className="text">
          Find and save books of interest.
    </p>
      </Container>
    </Jumbotron>
  );
};

export default Header;