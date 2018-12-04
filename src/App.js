import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Cat from "./components/cat";
import Cats from "./components/cats";

class App extends Component {
  render() {
    return (
      <div>
        <Cat />
        <Cats />
      </div>
    );
  }
}

export default App;
