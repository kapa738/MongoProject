import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

import searchResults from "./components/searchResults.component";
import addComment from "./components/add-comment.component";
import navBar from "./components/navBar.component";

function App() {
  return (
    <Router>
      <Route path="/" exact component={navBar}></Route>
      <Route path="/search" component={searchResults}></Route>
      <Route path="/add" component={addComment}></Route>
    </Router>
  );
}

export default App;
