import React from 'react';
import './Search.css';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// import { searchByAuthor, searchByTitle } from '../../utils/googlebooks';

const Search = (props) => {
  // const [search, setSearch] = useState("");
  // const [searchBy, setSearchBy] = useState("title");

  // const selectOption = (searchBy) => {
  //   setSearchBy(searchBy);
  // }

  // const handleInputChange = (event) => {
  //   setSearch(event.target.value);
  // }

  const searchType = () => {
    let style = props.searchBy;
    return (
      <Row>
        <Col>
          <div onClick={e => props.selectOption("title")}
            className={props.searchBy === "title" ? style : "title-inactive"}>
            Search by Title</div>
        </Col>
        <Col>
          <div onClick={e => props.selectOption("author")}
            className={props.searchBy === "author" ? style : "author-inactive"}>
            Search by Author</div>
        </Col>
      </Row>
    );
  };

  return (
    <>
      <Container>
        {searchType()}
        <Form>
          <Form.Control size="sm"
            onChange={e => props.handleInputChange(e)}
            type="text" placeholder="" value={props.search} />
        </Form>
      </Container>
      <Button onClick={ props.searchBy === "title" ? () => props.searchByTitle(props.search) : () => props.searchByAuthor(props.search) } 
      className="button" type="submit">Submit</Button>
    </>
  );
};

export default Search;