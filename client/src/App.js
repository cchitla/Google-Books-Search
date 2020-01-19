import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import SearchContainer from './components/SearchContainer/SearchContainer';
import SavedContainer from './components/SavedContainer/SavedContainer';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Header />
          <Switch>
            <Route exact path="/"></Route>
            <Route exact path="/search" component={SearchContainer}></Route>
            <Route exact path="/saved" component={SavedContainer}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
