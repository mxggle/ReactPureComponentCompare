/**
 * DEMO 2 新旧state相同
 */
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ComponentChild, FunctionalChild, PureChild } from "./components/children-state";

class ParentState extends React.Component {
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

export default ParentState;