import React, { Component } from "react";
import "./App.css";
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import ListContainer from './components/ListContainer/ListContainer';
import Book from './components/Book/Book';
import Search from './components/Search/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar />
          <Header />
          <ListContainer />
          <Book />
          <Search />
          
      </div>
    );
  }
}

export default App;
