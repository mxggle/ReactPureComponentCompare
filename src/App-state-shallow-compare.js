
/**
 * DEMO 4 state 浅比较
 */
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ComponentChild, FunctionalChild, PureChild } from "./components/children-state-shallow-compare";

class Parent extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <PureChild />
          <ComponentChild />
          <FunctionalChild />
        </header>
      </div>
    );
  }

}

export default Parent;