import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Ratingfeedback from "./components/Ratingfeedback";
import Summary from "./components/Summary";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/summary">
            <Summary />
          </Route>
          <Route path="/">
            <h1> Feedback Management System</h1>
            <h3> Please Rate your Course</h3>
            <Ratingfeedback />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
//comment//
