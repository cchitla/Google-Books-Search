import React from 'react';
import './Book.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Book = (props) => {
  return (
      <Row style={{width: "80%", margin: "auto", marginBottom: "20px"}}>
        <Col sm={2}><Card>
          <Card.Img variant="left" src={props.image} style={{ width: "12rem" }} />
        </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{props.author}</Card.Subtitle>
              <Card.Text>{props.description}</Card.Text>
              <Button variant="primary">Save Book</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
  );
};

export default Book;