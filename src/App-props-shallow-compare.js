/** 
 * DEMO 3 props浅比较
*/
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ComponentChild, FunctionalChild, PureChild, FunctionalChildMemo } from "./components/children-props-shallow-compare";

class Parent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      parentArray: [1, 2, 3, 4]
    }
    this.interval = null;
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      const { parentArray } = this.state;
      parentArray.push(parentArray.length + 1)
      this.setState({
        parentArray
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    const { parentArray } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <PureChild parentArray={parentArray} />
          <ComponentChild parentArray={parentArray} />
          <FunctionalChild parentArray={parentArray} />
          <FunctionalChildMemo parentArray={parentArray} />
        </header>
      </div>
    );
  }

}

export default Parent;