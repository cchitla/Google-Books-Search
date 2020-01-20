import React, { useState } from 'react';
import './Search.css';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Search = () => {
  const [search, setSearch] = useState("");
  const [searchBy, setSearchBy] = useState("title");

  const selectOption = (searchBy) => {
    setSearchBy(searchBy);
  }

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  }

  const searchType = () => {
    let style = searchBy;
    return (
      <Row>
        <Col>
          <div onClick={e => selectOption("title")} className={searchBy === "title" ? style : "title-inactive"}>Search by Title</div>
        </Col>
        <Col>
          <div onClick={e => selectOption("author")} className={searchBy === "author" ? style : "author-inactive"}>Search by Author</div>
        </Col>
      </Row>
    )
  }


  return (
    <>
      <Container>
        {searchType()}
        <Form>
          <Form.Control size="sm" onChange={e => handleInputChange(e)} type="text" placeholder="" value={search} />
        </Form>
      </Container>
      <Button className="button" type="submit">Submit</Button>
    </>
  );
};

export default Search;