import React, { useState } from 'react';
import './SearchContainer.css';
import Search from '../Search/Search';
import Book from '../Book/Book';
import axios from 'axios';

const SearchContainer = () => {
  const [search, setSearch] = useState("");
  const [searchBy, setSearchBy] = useState("title");
  const [books, setBooks] = useState([]);

  const baseurl = "https://www.googleapis.com/books/v1/volumes?q=";
  const api_KEY = "AIzaSyDMLYz8crz5nu6iTcVa_9zL6i64QkXemgQ";

  
  const searchByAuthor = (query) => {
    // axios.get("/api/searchByAuthor", {
    //   params: {query}
    // }).then(res => setBooks(res.data.items))

    axios({
      method: "GET",
      url: `${baseurl}inauthor:${query}&maxResults=20&key=${api_KEY}`
    }).then(res => setBooks(res.data.items))
  };

  const searchByTitle = (query) => {
    // axios.get("/api//searchByTitle", {
    //   params: {query}
    // }).then(res => setBooks(res.data.items))

    axios({
      method: "GET",
      url: `${baseurl}intitle:${query}&maxResults=20&key=${api_KEY}`
    }).then(res => setBooks(res.data.items))
  };

  // &fields=items(title,authors,description,imageLinks)

  const selectOption = (searchBy) => {
    setSearchBy(searchBy);
  }

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  }

  return (
    <>
      <Search
        selectOption={selectOption}
        handleInputChange={handleInputChange}
        search={search}
        searchBy={searchBy}
        searchByAuthor={searchByAuthor}
        searchByTitle={searchByTitle} />


      {books.length === 0 ? "" : books.map(book => (
        <Book key={book.id} 
        title={book.volumeInfo.title}
        author={book.volumeInfo.authors}
        description={book.volumeInfo.description} 
        image={book.volumeInfo.imageLinks.smallThumbnail} />
      ))}

      {/* <Book title={books[0].volumeInfo.title}/>  */}

    </>
  );
};

export default SearchContainer;